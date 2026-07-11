# Hướng dẫn cài đặt & Deploy Web Chọn Quà Trang Sức 💖

Chào bạn! Dưới đây là hướng dẫn chi tiết từng bước để tùy chỉnh, chạy thử nghiệm cục bộ và đưa trang web chọn quà trang sức lãng mạn này lên mạng thông qua dịch vụ **Vercel** miễn phí.

---

## 1. Tùy chỉnh thông tin cá nhân của bạn

Trước khi chạy hay deploy, bạn hãy mở file [config.js](file:///c:/Users/KHOA/Desktop/webtrangsuc/config.js) để cập nhật thông tin cá nhân:
* `girlfriendName`: Tên thân mật của bạn gái (Ví dụ: "Công chúa", "Vợ yêu",...).
* `welcomeTitle` & `welcomeSubtitle`: Lời chào và lời nhắn hiển thị trên trang bìa.

---

## 2. Kiểm tra giao diện cục bộ (Local Testing)

Vì trang web được viết bằng HTML/CSS/JS thuần, bạn hoàn toàn có thể chạy thử trực tiếp trên máy tính:
1. Nhấp đúp chuột vào file [index.html](file:///c:/Users/KHOA/Desktop/webtrangsuc/index.html) để mở bằng bất kỳ trình duyệt nào (Chrome, Edge, Safari...).
2. Bấm vào nút "Mở Hộp Quà Bí Mật ✨", ngắm nghía các sản phẩm và nhấn "Xem chi tiết".
3. Thử viết lời nhắn và bấm nút "Chọn Món Quà Này 💖".
   * *Lưu ý:* Khi chạy trực tiếp bằng file (`file:///...`), tính năng gửi tin nhắn ẩn qua Telegram/Discord sẽ không hoạt động (vì thiếu máy chủ). Bạn cần deploy dự án lên Vercel và cấu hình biến môi trường thì bot mới có thể gửi tin nhắn tự động về điện thoại của bạn.

---

## 3. Cách cấu hình Thông báo tự động (Telegram / Discord)

Để nhận được thông báo âm thầm trực tiếp vào điện thoại mà bạn gái không cần thao tác dán tin nhắn thủ công, bạn hãy cấu hình 1 trong 2 hoặc cả 2 kênh dưới đây:

### Cách A: Nhận thông báo qua Telegram Bot (Khuyên dùng)
1. **Tạo Bot Telegram:**
   * Mở ứng dụng Telegram, tìm kiếm tài khoản `@BotFather`.
   * Gửi tin nhắn `/newbot` và đặt tên cho Bot của bạn theo hướng dẫn.
   * `@BotFather` sẽ gửi lại cho bạn một đoạn **Token** (dạng như: `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`). Đây chính là `TELEGRAM_BOT_TOKEN`.
   * Hãy bấm vào link dẫn đến bot vừa tạo và nhấn nút **START** để kích hoạt bot.
2. **Lấy Chat ID của bạn:**
   * Tìm kiếm tài khoản `@userinfobot` trên Telegram.
   * Nhấn **START** hoặc gửi tin nhắn bất kỳ cho bot này. Nó sẽ trả về thông tin tài khoản của bạn, bao gồm mục **Id** (dạng một dãy số như `987654321`). Đây chính là `TELEGRAM_CHAT_ID`.

### Cách B: Nhận thông báo qua Discord Webhook
1. Mở Discord trên máy tính, đi tới Máy chủ của bạn (hoặc tạo một Máy chủ cá nhân mới chỉ có bạn).
2. Tạo hoặc chọn một Kênh chat -> Click vào **Bánh răng cài đặt kênh** (Edit Channel).
3. Chọn mục **Integrations** (Liên kết) -> Chọn **Webhooks** -> Nhấp vào **Create Webhook** (Tạo Webhook).
4. Đặt tên hiển thị tùy thích và copy đoạn **Webhook URL** vừa tạo. Đây chính là `DISCORD_WEBHOOK_URL`.

---

## 4. Deploy lên Vercel chỉ với vài bước đơn giản

Để đưa trang web lên Internet và kích hoạt API Serverless ẩn, bạn hãy deploy dự án lên Vercel thông qua GitHub:

### Bước 1: Đưa thư mục code lên GitHub
1. Truy cập [github.com](https://github.com) và tạo một Repository (kho chứa) mới dạng **Private** (Riêng tư) để giữ bí mật thông tin của bạn.
2. Tải toàn bộ thư mục `webtrangsuc` này lên Repository vừa tạo (gồm các file `index.html`, `style.css`, `app.js`, `config.js`, `vercel.json` và toàn bộ các thư mục ảnh `sp1` đến `sp18`).

### Bước 2: Liên kết và Deploy trên Vercel
1. Truy cập trang chủ [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub của bạn.
2. Chọn **Add New** -> **Project** -> Chọn Repository chứa web trang sức bạn vừa tải lên và nhấn **Import**.
3. **Cấu hình Environment Variables (Biến môi trường) trước khi Deploy:**
   * Tại mục **Environment Variables** ngay trước khi nhấn nút Deploy, bạn hãy thêm các khóa sau tương ứng với cấu hình của bạn:
     * Tên biến: `TELEGRAM_BOT_TOKEN` | Giá trị: *Điền Token của bạn*
     * Tên biến: `TELEGRAM_CHAT_ID` | Giá trị: *Điền ID chat của bạn*
     * Tên biến (nếu dùng Discord): `DISCORD_WEBHOOK_URL` | Giá trị: *Điền URL Webhook của bạn*
4. Nhấn nút **Deploy** và đợi khoảng 30 giây. Vercel sẽ cấp cho bạn một tên miền miễn phí (dạng `tên-dự-án.vercel.app`).
5. Gửi đường link đó cho bạn gái của bạn và chờ đón thông báo quà tặng gửi thẳng về điện thoại! 💝
