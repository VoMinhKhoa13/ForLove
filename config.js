const CONFIG = {
  // Tên của bạn gái để hiển thị lời chào cá nhân hóa
  girlfriendName: "Em yêu", 
  
  // Tiêu đề và lời nhắn tại trang chào mừng
  welcomeTitle: "Chào Công Chúa của anh! ❤️",
  welcomeSubtitle: "Anh có một vài món quà nhỏ dành tặng em. Hãy ngắm nghía và chọn chiếc lắc tay em thích nhất nhé!",


  // Danh sách chi tiết các sản phẩm từ sp1 đến sp4
  products: [
    {
      id: "sp1",
      name: "Frosted Aura LTJ4",
      fullName: "Lắc Tay Bạc Gắn Kim Cương Moissanite 7 Ly Xi Bạch Kim, Kiểm Định GRA \"Frosted Aura\" LTJ4",
      description: "Chiếc lắc tay mang tên \"Frosted Aura\" được thiết kế tinh xảo với viên đá chủ Moissanite 7 Ly (7.0mm) lấp lánh vượt trội, kết cấu xi bạch kim sang trọng và có chứng chỉ GRA đi kèm. Một món quà tôn lên vẻ đẹp kiêu sa và thanh lịch của nàng.",
      images: [
        "sp1/vn-11134207-7ra0g-m8lfc93wwviffc.webp",
        "sp1/vn-11134207-7ra0g-m8lfcnz5486m38.webp",
        "sp1/vn-11134207-7ra0g-m8lfo0ysly1367.webp",
        "sp1/vn-11134207-7ra0g-m8lfo0ysnclj12.webp",
        "sp1/vn-11134207-7ra0g-m8o521oxps3m59.webp",
        "sp1/vn-11134207-81ztc-mkdcdxxlbrbb1a.webp"
      ],
      specs: [
        "Chất liệu: Bạc cao cấp 925, xi bạch kim sáng bóng",
        "Đá chủ: Moissanite kích thước 7 Ly (1.2 Carat)",
        "Kiểm định: Chứng nhận kiểm định GRA quốc tế",
        "Thiết kế: Vòng tay bạc đính đá kết hợp ổ đá sang trọng"
      ]
    },
    {
      id: "sp2",
      name: "Sweet Gleam LTJ5",
      fullName: "Lắc Tay Bạc Kim Cương Moissanite 6 Ly Xi Bạch Kim, Kiểm Định GRA \"Sweet Gleam\" LTJ5",
      description: "Thiết kế ngọt ngào đúng như tên gọi \"Sweet Gleam\". Nổi bật với viên Moissanite 6 Ly tinh tuyển, kết hợp cùng dải đá phụ lấp lánh dọc thân lắc. Được chế tác từ bạc cao cấp xi bạch kim siêu bền màu, mang lại vẻ đẹp quý phái cho mỗi chuyển động của cổ tay cô gái bạn yêu.",
      images: [
        "sp2/vn-11134207-7ra0g-m8lfyrazburmc5.webp",
        "sp2/vn-11134207-7ra0g-m8lfzzt24l6s37.webp",
        "sp2/vn-11134207-7ra0g-m8lfzzt25zr8be.webp",
        "sp2/vn-11134207-7ra0g-m8lg0yw2s9ym5d.webp",
        "sp2/vn-11134207-7ra0g-m8lg16qjaxke14.webp",
        "sp2/vn-11134207-81ztc-mkc9qtz8ef426e.webp"
      ],
      specs: [
        "Chất liệu: Bạc 925 tinh khiết, xi bạch kim cao cấp",
        "Đá chủ: Moissanite kích thước 6 Ly (0.8 Carat)",
        "Kiểm định: Chứng nhận kiểm định GRA đi kèm",
        "Kiểu dáng: Trẻ trung, sang trọng và thanh mảnh"
      ]
    },
    {
      id: "sp3",
      name: "Callie Silver LT270",
      fullName: "LT270 - Lắc tay bạc Callie Silver đá moissanite xen kẽ hoa 3D xi bạch kim",
      description: "Mẫu lắc tay độc đáo với họa tiết hoa 3D xen kẽ những viên đá Moissanite lấp lánh. Sự kết hợp giữa nét cổ điển hoa văn nổi và sự hiện đại của đá quý Moissanite tạo nên điểm nhấn khó phai, rất thích hợp cho những cô nàng yêu thích sự dịu dàng và thơ mộng.",
      images: [
        "sp3/vn-11134207-7ra0g-m7ghkxxfoem4e4.webp",
        "sp3/vn-11134207-7ra0g-m7ghkxxfpt6k6e.webp",
        "sp3/vn-11134207-7ra0g-m7ghkxxfpt83b2.webp",
        "sp3/vn-11134207-7ra0g-m7ghkxxfr7sjb8.webp",
        "sp3/vn-11134207-7ra0g-m7gigzpb9ohff9.webp"
      ],
      specs: [
        "Chất liệu: Bạc Callie Silver chuẩn chất lượng, xi bạch kim",
        "Điểm nhấn: Thiết kế hoa 3D đính đá tinh xảo",
        "Đá đính: Đá Moissanite lấp lánh xen kẽ",
        "Mã sản phẩm: LT270"
      ]
    },
    {
      id: "sp4",
      name: "Moissanite Feather",
      fullName: "Lắc tay nữ lông vũ bạc 925 đính đá Moissanite 0.5 carat màu D có chứng chỉ GRA sang trọng tinh tế",
      description: "Lấy cảm hứng từ những chiếc lông vũ mềm mại, biểu tượng của sự tự do và thanh thoát. Lắc tay đính viên đá chủ Moissanite 0.5 carat màu D (độ sạch và màu sắc hoàn hảo nhất) cùng chứng nhận GRA. Thân lắc đính đá tấm chạy dọc theo cánh lông vũ uốn lượn, mềm mại tựa như tình yêu dịu êm.",
      images: [
        "sp4/sg-11134201-825zm-mlyg98j08kxx20.webp",
        "sp4/sg-11134201-825zo-mlyg98nuj66bcd.webp",
        "sp4/sg-11134201-825zq-mlyg98cb0wlh4c.webp",
        "sp4/sg-11134201-825zw-mlyg97xgwi6gd1.webp",
        "sp4/sg-11134201-82611-mlyg97rinhu710.webp"
      ],
      specs: [
        "Chất liệu: Bạc 925 cao cấp tiêu chuẩn xuất khẩu",
        "Đá chủ: Moissanite 0.5 Carat (Nước màu D cao cấp nhất)",
        "Thiết kế: Hình lông vũ uốn lượn mềm mại và nữ tính",
        "Kiểm định: Đầy đủ chứng chỉ GRA cho viên đá chủ"
      ]
    },
    {
      id: "sp5",
      name: "Yêu Kiều Heart",
      fullName: "Vòng Tay Kim Cương Moissanite Yêu Kiều Jewelry Bạc S925 Hình Trái Tim Có Khóa Gài Tăng Giảm (Có Kiểm Định GRA)",
      description: "Mẫu lắc tay mang phong cách yêu kiều ngọt ngào, kết hợp mặt lắc hình trái tim lãng mạn cùng viên đá chủ kim cương Moissanite lấp lánh xuất sắc. Điểm nhấn tinh tế là khóa gài tăng giảm kích thước giúp vừa vặn hoàn hảo trên cổ tay nàng.",
      images: [
        "sp5/vn-11134207-81ztc-moow8jzteayo05.webp",
        "sp5/vn-11134207-81ztc-mplpxe6tf5se32.webp",
        "sp5/vn-11134207-81ztc-mplpxe704rgs53.webp",
        "sp5/vn-11134207-81ztc-mplpxeewjcwfa9.webp"
      ],
      specs: [
        "Chất liệu: Bạc cao cấp S925 chuẩn chất lượng, chống xỉn màu",
        "Đá chủ: Kim cương Moissanite sáng lấp lánh",
        "Họa tiết: Thiết kế mặt hình trái tim lãng mạn",
        "Kiểm định: Có chứng nhận kiểm định GRA đi kèm",
        "Tính năng: Khóa gài tăng giảm kích cỡ linh hoạt"
      ]
    },
    {
      id: "sp6",
      name: "STYLE By PNJ XMXMW060271",
      fullName: "Lắc tay Bạc đính đá STYLE By PNJ XMXMW060271",
      description: "Lắc tay bạc đính đá đến từ bộ sưu tập STYLE By PNJ. Điểm nhấn là thiết kế hiện đại, cá tính với các ổ đá được đính tỉ mỉ, giúp nàng khẳng định phong cách thời trang trẻ trung, thu hút mọi ánh nhìn.",
      images: [
        "sp6/sg-11134201-7rd3l-m7txm1m4qht379.webp",
        "sp6/sg-11134201-7rd4h-m7txm0znlzpfdd.webp",
        "sp6/sg-11134201-7rd56-m7txm040w84421.webp",
        "sp6/vn-11134211-7ra0g-m81fqjc11gecd9.webp"
      ],
      specs: [
        "Thương hiệu: STYLE By PNJ chính hãng",
        "Chất liệu: Bạc Sterling Silver xi bạch kim cao cấp",
        "Đá đính: Đá tấm CZ trắng lấp lánh",
        "Mã sản phẩm: XMXMW060271"
      ]
    },
    {
      id: "sp7",
      name: "PNJSilver Heart XMXMW060242",
      fullName: "Lắc tay Bạc đính đá PNJSilver hình trái tim XMXMW060242",
      description: "Thiết kế lãng mạn với mặt lắc hình trái tim biểu trưng cho tình yêu bền chặt. Được chế tác từ chất liệu bạc PNJSilver cao cấp, điểm xuyết bằng những viên đá nhỏ lung linh mang đến vẻ đẹp dịu dàng và ngọt ngào.",
      images: [
        "sp7/sg-11134201-7rcbs-m65zibbkjzfb8d.webp",
        "sp7/sg-11134201-7rcd1-m65zicfiw2af5e.webp",
        "sp7/vn-11134211-7ras8-mbhngu9itly83b.webp"
      ],
      specs: [
        "Thương hiệu: PNJSilver chính hãng",
        "Chất liệu: Bạc Sterling cao cấp độc quyền PNJ",
        "Mặt lắc: Thiết kế hình trái tim đôi lãng mạn",
        "Mã sản phẩm: XMXMW060242"
      ]
    },
    {
      id: "sp8",
      name: "TNJ Heart LTNM0016",
      fullName: "Lắc tay Moissanite bạc nữ 4ly trái tim đôi tình yêu kiểm định GRA sang trọng LTNM0016 - Trang Sức TNJ",
      description: "Lắc tay đính đá Moissanite 4 Ly với mặt lắc họa tiết trái tim đôi đan xen ngọt ngào. Sản phẩm được làm bằng bạc ta nguyên chất đính kèm đá chủ Moissanite đạt độ sáng chói tối đa, đi kèm kiểm định GRA chuẩn quốc tế.",
      images: [
        "sp8/vn-11134207-7ras8-m2xmqjiz6qy8c3.webp",
        "sp8/vn-11134207-7ras8-m3uggm1l5dbc8b.webp",
        "sp8/vn-11134207-7ras8-m3ugh6ywiyt152.webp",
        "sp8/vn-11134207-7ras8-m3ugh6ywize0fd.webp",
        "sp8/vn-11134207-7ras8-m3ugh6ywkddhc2.webp",
        "sp8/vn-11134207-7ras8-m3ugh6ywkdyge0.webp"
      ],
      specs: [
        "Chất liệu: Bạc cao cấp 925 nguyên chất sáng bóng",
        "Đá chủ: Kim cương Moissanite 4 Ly (0.3 Carat)",
        "Kiểm định: Giấy kiểm định đá quý GRA quốc tế",
        "Ý nghĩa: Trái tim đôi biểu trưng tình yêu vĩnh cửu"
      ]
    },
    {
      id: "sp9",
      name: "TNJ Heart LTNM0013",
      fullName: "Lắc tay Moissanite bạc nữ 6ly hoạ tiết trái tim kiểm định GRA đi sự kiện sang trọng LTNM0013 - Trang Sức TNJ",
      description: "Mẫu lắc tay tiệc tùng sang trọng bậc nhất với viên đá chủ Moissanite 6 Ly. Dọc thân lắc là chuỗi xích bạc đan xen trái tim nhỏ đính đá tinh xảo, tạo điểm nhấn lấp lánh và nổi bật cho đôi tay của bạn gái tại mọi sự kiện.",
      images: [
        "sp9/vn-11134207-7ras8-m2x8ih5dnyre72.webp",
        "sp9/vn-11134207-7ras8-m2x8ih5nnk56e7.webp",
        "sp9/vn-11134207-7ras8-m2x8ih5noypm79.webp",
        "sp9/vn-11134207-7ras8-m2x8ih5noyyuf4.webp",
        "sp9/vn-11134207-7ras8-m2x8ih5nrs3q55.webp",
        "sp9/vn-11134207-7ras8-m2x8ih5nt6o6e7.webp",
        "sp9/vn-11134207-820l4-mgt89oxhiuj334.webp"
      ],
      specs: [
        "Chất liệu: Bạc cao cấp 925 chống xỉn màu",
        "Đá chủ: Kim cương Moissanite 6 Ly (0.8 Carat)",
        "Kiểm định: Kèm chứng thư kiểm định GRA",
        "Kiểu dáng: Dây xích đính đá chói lóa sang trọng"
      ]
    },
    {
      id: "sp10",
      name: "TNJ Luxury LTNM0013",
      fullName: "Lắc tay Moissanite bạc nữ 6ly hoạ tiết trái tim kiểm định GRA đi sự kiện sang trọng LTNM0013 - Trang Sức TNJ",
      description: "Phiên bản lắc tay với phong cách dây mảnh nữ tính kết hợp ổ đá chủ Moissanite 6 Ly nâng cao. Thiết kế ôm trọn cổ tay giúp làm tôn lên vẻ thon gọn, thanh nhã và sang quý của bạn gái yêu.",
      images: [
        "sp10/vn-11134207-7ras8-m2xmz2iy0cfk11.webp",
        "sp10/vn-11134207-7ras8-m2xmz2vff9iod6.webp",
        "sp10/vn-11134207-820l4-mhznoemnnbb7b0.webp",
        "sp10/vn-11134207-820l4-mhznoemob6ys2d.webp",
        "sp10/vn-11134207-820l4-mhznq2ilj75x5e.webp"
      ],
      specs: [
        "Chất liệu: Bạc cao cấp 925 chuẩn kiểm định",
        "Đá chủ: Kim cương Moissanite 6 Ly sáng ngọc",
        "Kiểm định: Chứng nhận GRA kèm mã số cạnh",
        "Mã sản phẩm: LTNM0013 (Luxury Edition)"
      ]
    },
    {
      id: "sp11",
      name: "TNJ Heart LTNM0008",
      fullName: "Lắc tay Moissanite bạc nữ 5ly hình trái tim kiểm định GRA sang trọng LTNM0008 - Trang Sức TNJ",
      description: "Viên đá chủ Moissanite 5 Ly được đặt khéo léo bên trong mặt vòng hình trái tim bạc. Sự đính kết hài hòa giúp chiếc lắc tay có hiệu ứng lấp lánh cao ở mọi góc nhìn, cực kỳ tôn da và dễ thương.",
      images: [
        "sp11/vn-11134207-7ras8-m2vv204jxqswdf.webp",
        "sp11/vn-11134207-7ras8-m2vv204k0jxs12.webp",
        "sp11/vn-11134207-7ras8-m2vv2rzb6bxsf8.webp",
        "sp11/vn-11134207-7ras8-m2vv47qrdzowe9.webp",
        "sp11/vn-11134207-7ras8-m2vvc3aor6cwf7.webp"
      ],
      specs: [
        "Chất liệu: Bạc 925 tiêu chuẩn đính đá tấm CZ",
        "Đá chủ: Moissanite 5 Ly (0.5 Carat)",
        "Kiểm định: Đầy đủ giấy chứng nhận GRA",
        "Thiết kế: Hốc trái tim ôm ổ đá quyến rũ"
      ]
    },
    {
      id: "sp12",
      name: "TNJ Round LTNM0019",
      fullName: "Lắc tay Moissanite bạc nữ 7ly mặt tròn đính đá kiểm định GRA đi dự tiệc sang trọng LTNM0019 - Trang Sức TNJ",
      description: "Mẫu lắc tay tiệc với viên Moissanite cực lớn 7 Ly được bọc bởi vòng tròn đính đá lấp lánh (hiệu ứng Halo). Đây là sự lựa chọn hoàn hảo cho những dịp đặc biệt, giúp bạn gái nổi bật rạng ngời giữa đám đông.",
      images: [
        "sp12/vn-11134207-7ras8-m2xnb0pwe7ly4d.webp",
        "sp12/vn-11134207-7ras8-m2xnb0pwflx66b.webp",
        "sp12/vn-11134207-7ras8-m2xnb0pwfm6e09.webp",
        "sp12/vn-11134207-7ras8-m2xnb0pwh0hm0b.webp",
        "sp12/vn-11134207-7ras8-m2xnd7axh2x2d9.webp"
      ],
      specs: [
        "Chất liệu: Bạc 925 xi bạch kim sang trọng",
        "Đá chủ: Moissanite 7 Ly nước màu D lấp lánh",
        "Kiểu viền: Thiết kế viền Halo đính đá lộng lẫy",
        "Kiểm định: Chứng thư GRA quốc tế"
      ]
    },
    {
      id: "sp13",
      name: "TNJ Crown LTNM0018",
      fullName: "Lắc tay Moissanite bạc nữ 7ly mặt tròn đính đá sang trọng kiểm định GRA LTNM0018 - Trang Sức TNJ",
      description: "Lấy cảm hứng từ chiếc vương miện hoàng gia, lắc tay đính đá Moissanite 7 Ly mang vẻ đẹp quyền quý, quý phái. Dây lắc tay dạng mảnh đan đá nhuyễn dọc thân tạo nên sức cuốn hút khó quyến rũ cho cổ tay của nàng.",
      images: [
        "sp13/vn-11134207-7ras8-m2xn6e66488q02.webp",
        "sp13/vn-11134207-7ras8-m2xn6e6q3f0ae4.webp",
        "sp13/vn-11134207-7ras8-m2xn6egzoe6214.webp",
        "sp13/vn-11134207-7ras8-m2xn6egzoefada.webp",
        "sp13/vn-11134207-7ras8-m2xn6yhkgqh26d.webp"
      ],
      specs: [
        "Chất liệu: Bạc Sterling 925 xi bạch kim",
        "Đá chủ: Kim cương Moissanite 7 Ly (1.2 Carat)",
        "Kiểm định: Đầy đủ giấy tờ và thẻ GRA kiểm định",
        "Thiết kế: Vương miện nâng ổ đá đài các"
      ]
    },
    {
      id: "sp14",
      name: "TNJ Heart LTN0302",
      fullName: "Lắc tay nữ bạc 925 hình trái tim đính đá LTN0302 - Trang Sức TNJ",
      description: "Chiếc lắc tay thanh thuần làm từ bạc ta nguyên chất 925, nổi bật với mặt trái tim rỗng đính đá nhuyễn lấp lánh. Mẫu dây mềm mại thích hợp cho những cô nàng yêu thích vẻ đẹp tự nhiên, thanh tú và giản đơn.",
      images: [
        "sp14/vn-11134207-23010-1rqf9eh0k4lv5f.webp",
        "sp14/vn-11134207-23010-fbnmiah0k4lv8f.webp",
        "sp14/vn-11134207-23010-vf6fyeh0k4lvf1.webp",
        "sp14/vn-11134207-23010-ws1kmbh0k4lvd9.webp"
      ],
      specs: [
        "Chất liệu: Bạc 925 cao cấp tốt cho sức khỏe",
        "Thiết kế: Trái tim đính đá nhỏ mảnh mai",
        "Mã sản phẩm: LTN0302",
        "Phong cách: Tối giản, thanh lịch, dễ thương"
      ]
    },
    {
      id: "sp15",
      name: "Lace Bloom LTJ6",
      fullName: "Lắc Tay Bạc Gắn Kim Cương Moissanite 7 Ly Xi Bạch Kim, Kiểm Định GRA. \"Lace Bloom \" LTJ6 . Vòng Tay Bạc Nữ Sang Trọng",
      description: "Mẫu lắc tay \"Lace Bloom\" tựa như một đóa hoa ren lộng lẫy nở rộ trên tay nàng. Viên kim cương Moissanite 7 Ly nằm chính giữa nhụy hoa, được ôm lấy bởi các cánh hoa đính đá tinh tế. Một món quà tuyệt vời tôn vinh trọn vẹn tình yêu lãng mạn.",
      images: [
        "sp15/vn-11134207-7ra0g-m8lgay9yv8nb79.webp",
        "sp15/vn-11134207-7ra0g-m8lgb6nama9zb6.webp",
        "sp15/vn-11134207-7ra0g-m8lgc398xr47fd.webp",
        "sp15/vn-11134207-7ra0g-m8lgc398z5on26.webp",
        "sp15/vn-11134207-7ra0g-m8o41lb489ri8e.webp",
        "sp15/vn-11134207-7ra0g-m8o41lb489s7d7.webp",
        "sp15/vn-11134207-7ra0g-m8o6yrl7gtbi23.webp",
        "sp15/vn-11134207-81ztc-mkdcj9okt4hyf1.webp"
      ],
      specs: [
        "Chất liệu: Bạc 925 cao cấp xi bạch kim siêu bền",
        "Đá chủ: Moissanite 7 Ly (1.2 Carat) sáng lấp lánh",
        "Kiểm định: Chứng thư GRA đi kèm",
        "Tạo hình: Đóa hoa nở rộ đính đá siêu tinh xảo"
      ]
    }
  ]
};
