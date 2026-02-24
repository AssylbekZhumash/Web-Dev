import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  {id: 1, name: 'Smartphones'},
  {id: 2, name: 'Laptops'},
  {id: 3, name: 'TVs'},
  {id: 4, name: 'Headphones'},
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    categoryId: 1,
    name: 'Samsung Galaxy A55 5G 8 GB/128 GB darkblue',
    description: 'Samsung has unveiled a new mid-budget A–series smartphone, the Galaxy A55, ' +
      'and today it is the top model of the line, which has received significant improvements ' +
      'in both performance and software, including a powerful processor with graphics from AMD. ' +
      'Right now, this is the only Samsung smartphone with seamless upgrade technology – you no ' +
      'longer have to wait for Android to update. The A55 offers an affordable price, an ' +
      'interesting design with a harmony of glass and metal, and almost flagship features, ' +
      'which are more common among Chinese competitors.',
    price: 269999,
    rating: 5.0,
    image: 'https://via.placeholder.com/300x200?text=Samsung+Galaxy+A55',
    images: [
      'https://via.placeholder.com/300x200?text=Samsung+Galaxy+A55+1',
      'https://via.placeholder.com/300x200?text=Samsung+Galaxy+A55+2',
      'https://via.placeholder.com/300x200?text=Samsung+Galaxy+A55+3',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-temno-sinii-117420239/?c=750000000',
    likes: 0,
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Apple iPhone 17 Pro Max 256Gb silver',
    description: 'The Apple iPhone 17 Pro Max 256Gb is the epitome of innovation and ' +
      'uncompromising quality in the smartphone world. The powerful A19 Pro processor and ' +
      'advanced camera system open up new horizons for creativity and productivity. ' +
      'This smartphone is ideal for professionals and enthusiasts of mobile photography, ' +
      'as well as for those who appreciate premium design and the highest performance.',
    price: 868359,
    rating: 5.0,
    image: 'https://via.placeholder.com/300x200?text=iPhone+17+Pro+Max',
    images: [
      'https://via.placeholder.com/300x200?text=iPhone+17+Pro+Max+1',
      'https://via.placeholder.com/300x200?text=iPhone+17+Pro+Max+2',
      'https://via.placeholder.com/300x200?text=iPhone+17+Pro+Max+3',
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-serebristyi-145468150/?c=750000000',
    likes: 0,
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Smartphone POCO F7 Pro 12 GB/512 GB black',
    description: 'Poco F7 Pro is a powerful smartphone with advanced technology, designed for those who do not accept ' +
      'compromises! Exceptional performance and stunning display open up new horizons in gaming and multimedia. ' +
      'The Poco F7 Pro is ideal for gamers, mobile photography enthusiasts, and those who appreciate high-speed operation ' +
      'and cutting-edge technology. Don\'t miss the opportunity to become the owner of this flagship device!',
    price: 329990,
    rating: 4.9,
    image: 'https://via.placeholder.com/300x200?text=POCO+F7+Pro',
    images: [
      'https://via.placeholder.com/300x200?text=POCO+F7+Pro+1',
      'https://via.placeholder.com/300x200?text=POCO+F7+Pro+2',
      'https://via.placeholder.com/300x200?text=POCO+F7+Pro+3',
    ],
    link: 'https://kaspi.kz/shop/p/poco-f7-pro-12-gb-512-gb-chernyi-136997508/?c=750000000',
    likes: 0,
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Smartphone Xiaomi Redmi 9C 3 GB/64 GB Purple',
    description: 'The large immersive 6.53-inch display provides a feeling of total immersion in the virtual world. ' +
      'Special technology protects the eyes from blue radiation, which reduces the strain on them. Save all the most ' +
      'important and vivid moments of your life with the camera and AI. Take memorable and beautiful pictures with the ' +
      'main 13 megapixel camera. A powerful 5,000 mAh battery is capable of a lot. The battery is designed for 1000 ' +
      'charging cycles, which means that you can use your smartphone for 2.5 years without noticeable loss of capacity.',
    price: 49800,
    rating: 4.8,
    image: 'https://via.placeholder.com/300x200?text=Xiaomi+Redmi+9C',
    images: [
      'https://via.placeholder.com/300x200?text=Xiaomi+Redmi+9C+1',
      'https://via.placeholder.com/300x200?text=Xiaomi+Redmi+9C+2',
      'https://via.placeholder.com/300x200?text=Xiaomi+Redmi+9C+3',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-9c-3-gb-64-gb-fioletovyi-104946727/?c=750000000',
    likes: 0,
  },
  {
    id: 5,
    categoryId: 1,
    name: 'Smartphone ZTE Nubia Neo 3 5G 8 GB/256 GB black',
    description: 'The ZTE Nubia Neo 3 5G is a powerful smartphone with a bright display and long battery life designed ' +
      'for active users. The smartphone is ideal for those who appreciate high performance in games and applications, ' +
      'as well as stylish design and modern technology. Included is a protective case and a film for the safety of your ' +
      'device.',
    price: 139980,
    rating: 4.9,
    image: 'https://via.placeholder.com/300x200?text=ZTE+Nubia+Neo+3',
    images: [
      'https://via.placeholder.com/300x200?text=ZTE+Nubia+Neo+3+1',
      'https://via.placeholder.com/300x200?text=ZTE+Nubia+Neo+3+2',
      'https://via.placeholder.com/300x200?text=ZTE+Nubia+Neo+3+3',
    ],
    link: 'https://kaspi.kz/shop/p/zte-nubia-neo-3-5g-8-gb-256-gb-chernyi-149327685/?c=750000000',
    likes: 0,
  },
  {
    id: 6,
    categoryId: 2,
    name: 'Laptop Apple MacBook Air 13 2025 / 16 GB / SSD 256 GB / macOS / MW123RU/A',
    description: 'Introducing the Apple MacBook Air 13 2025, an ultrabook that combines high performance, ' +
      'sleek design, and durability. With an Apple M4 processor and 16 GB of RAM, it\'s perfect for work ' +
      'and entertainment. This laptop is ideal for students, professionals, and anyone who appreciates ' +
      'high technology and comfort in everyday life, whether it\'s working in an office or studying.',
    price: 599987,
    rating: 5.0,
    image: 'https://via.placeholder.com/300x200?text=MacBook+Air+13',
    images: [
      'https://via.placeholder.com/300x200?text=MacBook+Air+13+1',
      'https://via.placeholder.com/300x200?text=MacBook+Air+13+2',
      'https://via.placeholder.com/300x200?text=MacBook+Air+13+3',
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123ru-a-138153472/?c=750000000',
    likes: 0,
  },
  {
    id: 7,
    categoryId: 2,
    name: 'Laptop ASUS TUF Gaming F16 16" / 16 GB / SSD 512 GB / DOC / FX607VJ-RL049 / 90NR0MZ6-M002P0',
    description: 'The ASUS TUF Gaming F16 is a powerful gaming laptop with a 16—inch display and high performance ' +
      'for the most demanding games and tasks. Perfect for gamers, streamers, and those who work with graphics. ' +
      'The backlit keyboard will allow you to play comfortably even in the dark, and the anti-glare screen coating ' +
      'will reduce eye strain during long gaming sessions.',
    price: 459960,
    rating: 4.9,
    image: 'https://via.placeholder.com/300x200?text=ASUS+TUF+Gaming+F16',
    images: [
      'https://via.placeholder.com/300x200?text=ASUS+TUF+Gaming+F16+1',
      'https://via.placeholder.com/300x200?text=ASUS+TUF+Gaming+F16+2',
      'https://via.placeholder.com/300x200?text=ASUS+TUF+Gaming+F16+3',
    ],
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f16-16-16-gb-ssd-512-gb-bez-os-fx607vj-rl049-90nr0mz6-m002p0-142322855/?c=750000000',
    likes: 0,
  },
  {
    id: 8,
    categoryId: 2,
    name: 'Laptop Lenovo IdeaPad 3 15.6" / 8 GB / SSD 256 GB / DOS / 15IGL05 / 81WQ00ERRK',
    description: 'The IdeaPad 3 laptop is quieter and generates less heat due to the use of an optimized mechanical ' +
      'airflow distribution system and intelligent ventilation that prevents mixing of cold and warm air flows. The ' +
      'cooling is controlled by the Q Control system, which offers three fan rotation modes depending on the required ' +
      'performance. Forget about eye fatigue and don\'t be distracted by external stimuli during an important phone call. ' +
      'IdeaPad 3 laptop. Intelligent Eye Care function for studying reduces blue radiation harmful to the eyes, and the ' +
      'noise reduction function reliably blocks extraneous noise. That\'s why a laptop is an ideal solution for ' +
      'entertainment and study.',
    price: 169990,
    rating: 4.9,
    image: 'https://via.placeholder.com/300x200?text=Lenovo+IdeaPad+3',
    images: [
      'https://via.placeholder.com/300x200?text=Lenovo+IdeaPad+3+1',
      'https://via.placeholder.com/300x200?text=Lenovo+IdeaPad+3+2',
      'https://via.placeholder.com/300x200?text=Lenovo+IdeaPad+3+3',
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
    likes: 0,
  },
  {
    id: 9,
    categoryId: 2,
    name: 'Laptop HP ENVY x360 13.3" / 16 GB / SSD 512 GB / Win 11 / 13-bf0026ci / 809P4EA',
    description: 'HP ENVY x360 13.The 3" is a versatile transformer for work, study, and entertainment, combining a ' +
      'powerful 12th—generation Intel Core i7 processor, a bright OLED display, and a compact design. It is ideal for ' +
      'students, professionals and anyone who appreciates mobility and versatility in work and daily life. It is ' +
      'recommended to use it for creating presentations, editing photos and videos, as well as for comfortable watching ' +
      'movies and TV series.',
    price: 999999,
    rating: 5.0,
    image: 'https://via.placeholder.com/300x200?text=HP+ENVY+x360',
    images: [
      'https://via.placeholder.com/300x200?text=HP+ENVY+x360+1',
      'https://via.placeholder.com/300x200?text=HP+ENVY+x360+2',
      'https://via.placeholder.com/300x200?text=HP+ENVY+x360+3',
    ],
    link: 'https://kaspi.kz/shop/p/hp-envy-x360-13-3-16-gb-ssd-512-gb-win-11-13-bf0026ci-809p4ea-114483216/?c=750000000',
    likes: 0,
  },
  {
    id: 10,
    categoryId: 2,
    name: 'Laptop Acer Nitro 5 15.6" / 16 GB / SSD 512 GB / DOS / AN515-58-74XD / NH.QFMER.00D',
    description: 'Acer Nitro 5 15.6" is a powerful gaming laptop with a bright display and high performance for ' +
      'exciting gaming sessions and comfortable work. This laptop is a great choice for gamers, streamers, and those ' +
      'who value high performance and convenience in work and entertainment. We recommend using it with a gaming mouse ' +
      'and headphones for maximum immersion in the virtual world.',
    price: 812121,
    rating: 4.9,
    image: 'https://via.placeholder.com/300x200?text=Acer+Nitro+5',
    images: [
      'https://via.placeholder.com/300x200?text=Acer+Nitro+5+1',
      'https://via.placeholder.com/300x200?text=Acer+Nitro+5+2',
      'https://via.placeholder.com/300x200?text=Acer+Nitro+5+3',
    ],
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-15-6-16-gb-ssd-512-gb-bez-os-an515-58-74xd-nh-qfmer-00d-106607259/?c=750000000',
    likes: 0,
  },
  {
    id: 11,
    categoryId: 3,
    name: 'Yandex Basic TV with Alice YNDX-00076 140 cm black',
    description: 'Introducing the Yandex Basik with Alice YNDX-00076 — your perfect companion for ' +
      'home entertainment! This 140 cm LED TV with 4K UHD resolution provides high-quality images ' +
      'and surround sound with Dolby Audio. Perfect for family nights, movies, and gaming, this TV is ' +
      'the center of your home entertainment.',
    price: 238819,
    rating: 5.0,
    image: 'https://via.placeholder.com/300x200?text=Yandex+Basic+TV',
    images: [
      'https://via.placeholder.com/300x200?text=Yandex+Basic+TV+1',
      'https://via.placeholder.com/300x200?text=Yandex+Basic+TV+2',
      'https://via.placeholder.com/300x200?text=Yandex+Basic+TV+3',
    ],
    link: 'https://kaspi.kz/shop/p/jandeks-beisik-s-alisoi-yndx-00076-140-sm-chernyi-133033164/?c=750000000',
    likes: 0,
  },
  {
    id: 12,
    categoryId: 3,
    name: 'LG 43LM5772PLA TV 109 cm black',
    description: 'LG HD TVs allow you to enjoy higher-quality images thanks to their high resolution and vibrant colors. ' +
      'LG HD TVs are designed to surprise you with excellent image quality — several times better than SD. Thanks to ' +
      'Dynamic Color and Active HDR technologies, all your favorite content will be more realistic and stunning. An ' +
      'advanced image processor adjusts the colors, making the image richer and more natural. Enjoy the beauty of the ' +
      'natural colors of nature on your TV screen. The LG HD TV provides precise details and vibrant colors thanks to ' +
      'Active HDR technology. Enjoy your favorite movies in original quality thanks to multiple HDR formats, including ' +
      'HDR10 and HLG.The slim frame and elegant body of the TV will harmoniously fit into your interior, enhancing the ' +
      'pleasant viewing experience.',
    price: 174988,
    rating: 4.9,
    image: 'https://via.placeholder.com/300x200?text=LG+43LM5772PLA',
    images: [
      'https://via.placeholder.com/300x200?text=LG+43LM5772PLA+1',
      'https://via.placeholder.com/300x200?text=LG+43LM5772PLA+2',
      'https://via.placeholder.com/300x200?text=LG+43LM5772PLA+3',
    ],
    link: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000',
    likes: 0,
  },
  {
    id: 13,
    categoryId: 3,
    name: 'Samsung UE75AU7100UXCE TV 191 cm Black',
    description: 'Intelligent upscaling to 4K, allows you to watch your favorite lower-resolution content in ultra-sharp ' +
      '4K resolution. In addition, thanks to the improved color processing technology, you will enjoy realistic color ' +
      'reproduction. The 4K UHD TV screen contains 4 times more pixels than the FHD TV screen, so you see an exceptionally ' +
      'clear image with excellent transmission of the smallest details. Now you will be able to distinguish the smallest ' +
      'details in each scene.',
    price: 1800000,
    rating: 4.8,
    image: 'https://via.placeholder.com/300x200?text=Samsung+UE75AU7100UXCE',
    images: [
      'https://via.placeholder.com/300x200?text=Samsung+UE75AU7100UXCE+1',
      'https://via.placeholder.com/300x200?text=Samsung+UE75AU7100UXCE+2',
      'https://via.placeholder.com/300x200?text=Samsung+UE75AU7100UXCE+3',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-ue75au7100uxce-191-sm-chernyi-101496170/?c=750000000',
    likes: 0,
  },
  {
    id: 14,
    categoryId: 3,
    name: 'SMART TV 45G7000 109 cm black',
    description: 'Good budget TV for home 👀',
    price: 70823,
    rating: 4.8,
    image: 'https://via.placeholder.com/300x200?text=SMART+TV+45G7000',
    images: [
      'https://via.placeholder.com/300x200?text=SMART+TV+45G7000+1',
      'https://via.placeholder.com/300x200?text=SMART+TV+45G7000+2',
      'https://via.placeholder.com/300x200?text=SMART+TV+45G7000+3',
    ],
    link: 'https://kaspi.kz/shop/p/smart-45g7000-109-sm-chernyi-109729478/?c=750000000',
    likes: 0,
  },
  {
    id: 15,
    categoryId: 3,
    name: 'Xiaomi A 2026 L43MB-AURU TV 109 cm Black',
    description: 'Xiaomi A 2026 L43MB-AURU is a modern 109 cm (43 in) LCD TV that will give you incredible image quality ' +
      'and ample entertainment options. This TV is perfect for watching movies at home, family evenings and games. ' +
      'Thanks to the possibility of mounting on the wall, you can optimally organize the space in the room.',
    price: 129990,
    rating: 4.9,
    image: 'https://via.placeholder.com/300x200?text=Xiaomi+A+2026',
    images: [
      'https://via.placeholder.com/300x200?text=Xiaomi+A+2026+1',
      'https://via.placeholder.com/300x200?text=Xiaomi+A+2026+2',
      'https://via.placeholder.com/300x200?text=Xiaomi+A+2026+3',
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-a-2026-l43mb-auru-109-sm-chernyi-146846620/?c=750000000',
    likes: 0,
  },
  {
    id: 16,
    categoryId: 4,
    name: 'Headphones HyperX Cloud III S black&red',
    description: 'HyperX Cloud III S Wireless Gaming Headphones are the perfect choice for gamers ' +
      'who value quality, comfort and freedom of movement!\n' +
      'Main advantages: Low–latency wireless connection - complete freedom of movement. ' +
      'The comfortable design and soft ear pads are ideal for long gaming sessions. ' +
      'A noise–canceling microphone provides clear communication with the team. Compatible ' +
      'with PCs, consoles, and mobile devices. Long battery life – fewer pauses, more play.',
    price: 86194,
    rating: 4.5,
    image: 'https://via.placeholder.com/300x200?text=HyperX+Cloud+III+S',
    images: [
      'https://via.placeholder.com/300x200?text=HyperX+Cloud+III+S+1',
      'https://via.placeholder.com/300x200?text=HyperX+Cloud+III+S+2',
      'https://via.placeholder.com/300x200?text=HyperX+Cloud+III+S+3',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-hyperx-cloud-iii-s-cherno-krasnyi-145496598/?c=750000000',
    likes: 0,
  },
  {
    id: 17,
    categoryId: 4,
    name: 'Apple AirPods 4 Headphones White',
    description: 'The updated Apple AirPods 4 wireless headphones with personalized spatial audio and adaptive equalizer ' +
      'will make music an integral part of your life. The dynamic tracking function accurately reacts to every head ' +
      'movement and creates a three-dimensional live sound comparable to playing in a real concert hall. Updated touch ' +
      'control algorithms make it possible to adjust the volume as precisely as possible. A more powerful battery allows ' +
      'you to listen to music for up to 5 hours without recharging, and you can recharge up to 5 more times from the ' +
      'charging case.',
    price: 59975,
    rating: 4.9,
    image: 'https://via.placeholder.com/300x200?text=AirPods+4',
    images: [
      'https://via.placeholder.com/300x200?text=AirPods+4+1',
      'https://via.placeholder.com/300x200?text=AirPods+4+2',
      'https://via.placeholder.com/300x200?text=AirPods+4+3',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
    likes: 0,
  },
  {
    id: 18,
    categoryId: 4,
    name: 'JBL Tune 510BT Headphones Pink',
    description: 'The JBL Tune 510BT headphones allow you to enjoy powerful bass thanks to JBL Pure Bass technology ' +
      'wirelessly. These easy-to-use headphones last up to 40 hours on a single battery charge, and by plugging a USB-C ' +
      'charging cable into the mains for just five minutes, you\'ll get 2 more hours of playback. If you receive a call ' +
      'while you are watching a video on another device, the JBL Tune 510BT will automatically switch to your mobile ' +
      'device. Designed for complete comfort, the JBL Tune 510BT headphones are equipped with Bluetooth 5.0 and allow you ' +
      'to connect to Siri or Google without using a mobile device.',
    price: 12676,
    rating: 5.0,
    image: 'https://via.placeholder.com/300x200?text=JBL+Tune+510BT',
    images: [
      'https://via.placeholder.com/300x200?text=JBL+Tune+510BT+1',
      'https://via.placeholder.com/300x200?text=JBL+Tune+510BT+2',
      'https://via.placeholder.com/300x200?text=JBL+Tune+510BT+3',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-rozovyi-101407423/?c=750000000',
    likes: 0,
  },
  {
    id: 19,
    categoryId: 4,
    name: 'Logitech G Pro X2 Lightspeed Headphones Pink',
    description: 'Logitech G Pro X 2 Lightspeed is a high—quality wireless gaming headset equipped with 50mm graphene ' +
      'drivers that provide clear and rich sound with minimal distortion. LIGHTSPEED wireless technology provides a stable ' +
      'connection with low latency and a range of up to 30 meters, and the battery provides up to 50 hours of operation ' +
      'without recharging. The headset\'s design combines the strength of an aluminum and steel frame with the comfort ' +
      'of memory foam ear pads upholstered in imitation leather or velour. Removable 6 mm cardioid microphone with Blue VO ' +
      'technology!CE provides clear voice transmission, and support for multiple connectivity options — wireless LIGHTSPEED, ' +
      'Bluetooth, and wired via a 3.5mm audio cable - ensures compatibility with a variety of devices, including PCs and ' +
      'consoles.',
    price: 104940,
    rating: 5.0,
    image: 'https://via.placeholder.com/300x200?text=Logitech+G+Pro+X2',
    images: [
      'https://via.placeholder.com/300x200?text=Logitech+G+Pro+X2+1',
      'https://via.placeholder.com/300x200?text=Logitech+G+Pro+X2+2',
      'https://via.placeholder.com/300x200?text=Logitech+G+Pro+X2+3',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-logitech-g-pro-x2-lightspeed-rozovyi-115918436/?c=750000000',
    likes: 0,
  },
  {
    id: 20,
    categoryId: 4,
    name: 'Razer Blackshark V2 X Headphones White',
    description: 'Fight your enemies in a lightweight esports headset that reveals its advantages under pressure. ' +
      'Introducing the Razer BlackShark V2 X, a triple threat due to its amazing sound, excellent microphone purity, ' +
      'and high-quality sound insulation, proven by pro players. From the noisy crowd to the noise of your installation, ' +
      'turn off extraneous sounds and enjoy continuous concentration with the help of special closed headphones that ' +
      'completely cover your ears, and thanks to the soft ear pads that form the perfect seal for greater sound insulation.',
    price: 18998,
    rating: 4.8,
    image: 'https://via.placeholder.com/300x200?text=Razer+Blackshark+V2+X',
    images: [
      'https://via.placeholder.com/300x200?text=Razer+Blackshark+V2+X+1',
      'https://via.placeholder.com/300x200?text=Razer+Blackshark+V2+X+2',
      'https://via.placeholder.com/300x200?text=Razer+Blackshark+V2+X+3',
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-razer-blackshark-v2-x-belyi-104669405/?c=750000000',
    likes: 0,
  },
];