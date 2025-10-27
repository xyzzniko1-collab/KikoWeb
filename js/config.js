const CONFIG = {
nama: "KikoStore", // Nama Store
profil: "https://files.catbox.moe/x00jjf.jpg", // Url Profil
banner: "https://files.catbox.moe/ipyp65.jpg", // Url Banner 
tentang: "KikoStore adalah toko online terpercaya yang telah melayani beberapa pelanggan sejak 2024. Kami menyediakan berbagai produk untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
alamat: "Jl.tamansari, Jakarta, Indonesia",
sosial_media: {
  email: "cihe@Kiko.cloud", // Email
  youtube: "@Nikogan", // YouTube Username 
  tiktok: "xyzz.niko", // Tiktok Username 
  whatsapp: "6282211029198", // WhatsApp Number 
  telegram: "" // Telegram Username
},
payment: {
  dana: "0", // Payment Dana
  gopay: "082211029198", // Payment Gopay 
  ovo: "0", // Payment Ovo 
  qris: "https://linkqr.kamu.mom" // Url Qris
},
telegram_api: {
  bot: "8433897230:AAGLVRv8rxtleG-OazkLuKxZCOiBCHvqrKc", // Token bot father
  chatid: "8433897230" // ID telegram
},
}

// Produk
const productsData = {
            "PRODUK KIKO": [
              {
                "id": 1,
                "name": "GTA RP",
                "icon": "fas fa-server",
                "description": "GTA RP TERBAIK",
                "variants": [
                  { "name": "GTA RP V1", "price": 35000 },
                  { "name": "GTA RP V2", "price": 40000 },
                  { "name": "GTA RP V3", "price": 45000 },
                ]
              },
              {
                "id": 2,
                "name": "SAMP GTA R5",
                "icon": "fas fa-microchip",
                "description": "GTA R5 TERBAIK",
                "variants": [
                  { "name": "GTA R5 V1", "price": 30000 },
                  { "name": "GTA R5 V2", "price": 40000 }
                ]
              },
              {
                "id": 3,
                "name": "BUILD BOT DISCORD",
                "icon": "fas fa-hdd",
                "description": "Kamu ingin mendapatkan hosting dengan performa lancar tetapi dengan harga yang murah? Kamu ada di tempat yang tepat!!",
                "variants": [
                  { "name": "BUILD BOT DISCORD", "price": TERGANTUNG SUSAH APA GA},
                ]
              },
              {
                "id": 4,
                "name": "JASA MAP GUNUNG",
                "icon": "fas fa-database",
                "description": "jasa map gunung hard/low.",
                "variants": [
                  { "name": "cp5/10", "price": 100 },
                  { "name": "cp10/15", "price": 200 }
                ]
              },
              {
                "id": 5,
                "name": "COMINGSOON",
                "icon": "fas fa-globe",
                "description": "COMINGSOON.",
                "variants": [
                  { "name": "COMINGSOON", "price": COMINGSOON },
                  { "name": "COMINGSOON", "price": COMINGSOON },
                  { "name": "COMINGSOON", "price": COMINGSOON }
                ]
              }
            ],
            "PRODUK WANZY": [
                {
                    id: 6,
                    name: "JASA SAMP",
                    icon: "fas fa-pen-nib",
                    description: "Jasa samp dengan berbagai fitur yang gg. Cocok untuk server, dll.",
                    variants: [
                        { name: "Jasa Setup Server", price: 10.000-20.000 },
                        { name: "Jasa Setup Bot Ucp", price: 5.000-15.000 },
                        { name: "Jasa TextDraw", price: 15.000-50.000 },
                        { name: "Jasa Fix Databse", price: 20.000-40.000 },
                        { name: "Jasa Fix Gamemode", price: 15.000-70.000 },
                    ]
                },
                {
                    id: 7,
                    name: "GameMode",
                    icon: "fas fa-scroll",
                    description: "Sell Gamemode Ugrp, Lrp, Tcw.",
                    variants: [
                        { name: "Lrp/Ugrp", price: 150.000 },
                        { name: "Tcw", price: 30.000 }
                    ]
                },
                {
                    id: 8,
                    name: "Hosting Budget",
                    icon: "fas fa-laptop-code",
                    description: "Hostingan Spesifikasi Murah Bukan Berarti Spec Murahan",
                    variants: [
                        { name: "20 Slot Player", price: 5.000 },
                        { name: "35 Slot Player", price: 15.000 },
                        { name: "50 Slot Player", price: 25.000 },
                        { name: "100 Slot Player", price: 40.000 }
                    ]
                },
                {
                    id: 9,
                    name: "Hosting Premium",
                    icon: "fas fa-id-card",
                    description: "Hostingan Spesifikasi Aman Lancar, No Ddos.",
                    variants: [
                        { name: "20 Slot Player", price: 15.000 },
                        { name: "35 Slot Player", price: 25.000 },
                        { name: "50 Slot Player", price: 40.000 },
                        { name: "100 Slot Player", price: 70.000 }
                    ]
                },
                {
                    id: 10,
                    name: "TextDraw",
                    icon: "fas fa-id-card",
                    description: "TextDraw Terbaik, Di Buat Secara Realistis.",
                    variants: [
                        { name: "TD NAMA SERVER", price: 10.000 },
                        { name: "TD SPEEDOO, INVENTORY DLL", price: 15.000-100.000 },
                        { name: "TD SIM ALL DOCUMENT", price: 30.000 },
                        { name: "TD RADIAL ACTION/FACTION", price: 30.000 }
                    ]
                }
            ],
            "Produk Digital": [
                {
                    id: 11,
                    name: "E-Book",
                    icon: "fas fa-book",
                    description: "Koleksi e-book digital dengan berbagai topik menarik, mulai dari bisnis, programming, hingga hobi.",
                    variants: [
                        { name: "ComingSoon", price: 0 },
                        { name: "ComingSoon", price: 0 },
                        { name: "ComingSoon", price: 0 }
                    ]
                },
                {
                    id: 12,
                    name: "Software & Tools",
                    icon: "fas fa-cogs",
                    description: "Software dan tools digital untuk menunjang pekerjaan maupun kebutuhan kreatif.",
                    variants: [
                        { name: "ComingSoon", price: 0 },
                        { name: "ComingSoon", price: 0 },
                        { name: "ComingSoon", price: 0 }
                    ]
                },
                {
                    id: 13,
                    name: "Lisensi & Key",
                    icon: "fas fa-key",
                    description: "Produk lisensi resmi dan serial key untuk software pilihan.",
                    variants: [
                        { name: "ComingSoon", price: 0 },
                        { name: "ComingSoon", price: 0 },
                        { name: "ComingSoon", price: 0 }
                    ]
                },
                {
                    id: 14,
                    name: "Template Digital",
                    icon: "fas fa-file-alt",
                    description: "Template digital untuk desain, presentasi, website, dan media sosial.",
                    variants: [
                        { name: "ComingSoon", price: 0 },
                        { name: "ComingSoon", price: 0 },
                        { name: "ComingSoon", price: 0 }
                    ]
                },
                {
                    id: 15,
                    name: "Akun Premium",
                    icon: "fas fa-user-circle",
                    description: "Berbagai akun premium dengan harga terjangkau, cocok untuk hiburan dan produktivitas.",
                    variants: [
                        { name: "ComingSoon", price: 0 },
                        { name: "ComingSoon", price: 0 },
                        { name: "ComingSoon", price: 0 }
                    ]
                }
            ]
        };
