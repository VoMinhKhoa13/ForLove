module.exports = async (req, res) => {
  // Cấu hình các Header CORS để chạy mượt mà giữa các môi trường
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Xử lý Preflight request của CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Tự động đọc file .env cục bộ nếu có (dành cho chạy thử local)
  try {
    const fs = require('fs');
    const path = require('path');
    const envPath = path.join(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const envConfig = fs.readFileSync(envPath, 'utf8');
      envConfig.split('\n').forEach(line => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
          const key = match[1];
          let value = match[2] || '';
          // Loại bỏ dấu nháy kép hoặc nháy đơn bao quanh giá trị
          if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
          if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
          process.env[key] = value.trim();
        }
      });
    }
  } catch (e) {
    // Bỏ qua lỗi đọc file khi chạy thực tế trên môi trường cloud Vercel
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Phương thức không được hỗ trợ. Vui lòng dùng POST.' });
  }

  const { productId, productName, message, girlfriendName } = req.body;

  if (!productId || !productName) {
    return res.status(400).json({ error: 'Thiếu thông tin sản phẩm.' });
  }

  // Đọc cấu hình từ Vercel Environment Variables
  const tgToken = process.env.TELEGRAM_BOT_TOKEN;
  const tgChatId = process.env.TELEGRAM_CHAT_ID;
  const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

  let tgSent = false;
  let discordSent = false;

  // 1. GỬI TIN NHẮN QUA TELEGRAM BOT
  if (tgToken && tgChatId) {
    try {
      const text = `💝 *BẠN GÁI ĐÃ CHỌN QUÀ* 💖\n\n` +
                   `• *Người chọn:* ${girlfriendName || 'Bạn gái của bạn'}\n` +
                   `• *Sản phẩm:* ${productName} (Thư mục: ${productId})\n` +
                   `• *Lời nhắn:* "${message || 'Không có lời nhắn đi kèm'}"\n\n` +
                   `Hãy nhanh chóng chuẩn bị món quà bất ngờ này cho cô ấy nhé! 💕`;

      const response = await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: tgChatId,
          text: text,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        tgSent = true;
      } else {
        const errData = await response.json();
        console.error('Telegram Bot Error:', errData);
      }
    } catch (error) {
      console.error('Lỗi khi gửi tin nhắn Telegram:', error);
    }
  }

  // 2. GỬI TIN NHẮN QUA DISCORD WEBHOOK
  if (discordWebhookUrl) {
    try {
      const response = await fetch(discordWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [
            {
              title: '💖 BẠN GÁI ĐÃ CHỌN QUÀ 💖',
              description: `**${girlfriendName || 'Bạn gái của bạn'}** vừa chọn một sản phẩm trên trang web!`,
              color: 12021369, // Mã màu Rose Gold #B76E79
              fields: [
                {
                  name: 'Tên mẫu',
                  value: productName,
                  inline: true
                },
                {
                  name: 'Mã thư mục',
                  value: productId,
                  inline: true
                },
                {
                  name: 'Lời nhắn từ cô ấy',
                  value: message ? `"${message}"` : '*Không có lời nhắn đi kèm*'
                }
              ],
              footer: {
                text: 'Hệ thống chọn quà trang sức ngọt ngào'
              },
              timestamp: new Date().toISOString()
            }
          ]
        })
      });

      if (response.ok) {
        discordSent = true;
      } else {
        console.error('Discord Webhook Error Status:', response.status);
      }
    } catch (error) {
      console.error('Lỗi khi gửi Discord webhook:', error);
    }
  }

  // Nếu ít nhất một kênh gửi thành công
  if (tgSent || discordSent) {
    return res.status(200).json({
      success: true,
      message: 'Thông báo đã được gửi thành công!',
      channels: { telegram: tgSent, discord: discordSent }
    });
  }

  // Nếu cả hai kênh đều chưa cấu hình
  return res.status(200).json({
    success: false,
    message: 'Chưa cấu hình biến môi trường Telegram hoặc Discord trên Vercel. Vui lòng chuyển hướng sang Zalo.'
  });
};
