import gs_logo from "./gs_logo.jpg"
import happy_store from "./happy_store.webp"
import upload_area from "./upload_area.svg"
import hero_model_img from "./hero_model_img.png"
import hero_product_img1 from "./hero_product_img1.png"
import hero_product_img2 from "./hero_product_img2.png"
import product_img1 from "./product_img1.png"
import product_img2 from "./product_img2.png"
import product_img3 from "./product_img3.png"
import product_img4 from "./product_img4.png"
import product_img5 from "./product_img5.png"
import product_img6 from "./product_img6.png"
import product_img7 from "./product_img7.png"
import product_img8 from "./product_img8.png"
import product_img9 from "./product_img9.png"
import product_img10 from "./product_img10.png"
import product_img11 from "./product_img11.png"
import product_img12 from "./product_img12.png"
import { ClockFadingIcon, HeadsetIcon, SendIcon } from "lucide-react";
import profile_pic1 from "./profile_pic1.jpg"
import profile_pic2 from "./profile_pic2.jpg"
import profile_pic3 from "./profile_pic3.jpg"

export const assets = {
  upload_area, hero_model_img,
  hero_product_img1, hero_product_img2, gs_logo,
  product_img1, product_img2, product_img3, product_img4, product_img5, product_img6,
  product_img7, product_img8, product_img9, product_img10, product_img11, product_img12,
}

export const categories = ["Fones de Ouvido", "Caixas de Som", "Relógio", "Fones Sem Fio", "Mouse", "Decoração"];

export const dummyRatingsData = [
  { id: "rat_1", rating: 4.2, review: "Eu estava um pouco cético no início, mas este produto acabou sendo ainda melhor do que eu imaginava. A qualidade parece premium, é fácil de usar e entrega exatamente o que foi prometido. Já recomendei para amigos e com certeza comprarei novamente no futuro.", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_1", createdAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', updatedAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', product: { name: 'Caixa de Som Bluetooth', category: 'Eletrônicos', id: 'prod_1' } },
  { id: "rat_2", rating: 5.0, review: "Este produto é ótimo. Eu amei! Vocês deixaram tudo tão simples. Meu novo site é muito mais rápido e fácil de usar do que o antigo.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_2", createdAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', updatedAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', product: { name: 'Caixa de Som Bluetooth', category: 'Eletrônicos', id: 'prod_1' } },
  { id: "rat_3", rating: 4.1, review: "Este produto é incrível. Eu adorei! Vocês deixaram tudo muito simples. Meu novo site é muito mais rápido e fácil de usar do que o antigo.", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_3", createdAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', updatedAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', product: { name: 'Caixa de Som Bluetooth', category: 'Eletrônicos', id: 'prod_1' } },
  { id: "rat_4", rating: 5.0, review: "Este produto é ótimo. Eu amei! Vocês deixaram tudo tão simples. Meu novo site é muito mais rápido e fácil de usar do que o antigo.", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_4", createdAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', updatedAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', product: { name: 'Caixa de Som Bluetooth', category: 'Eletrônicos', id: 'prod_1' } },
  { id: "rat_5", rating: 4.3, review: "No geral, estou muito satisfeito com esta compra. Funciona conforme descrito e parece durável. A única razão pela qual não dei cinco estrelas foi por um pequeno detalhe (como a configuração ter demorado um pouco mais do que o esperado, ou a embalagem estar levemente danificada). Ainda assim, recomendo bastante para quem busca uma opção confiável.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_5", createdAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', updatedAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', product: { name: 'Caixa de Som Bluetooth', category: 'Eletrônicos', id: 'prod_1' } },
  { id: "rat_6", rating: 5.0, review: "Este produto é ótimo. Eu amei! Vocês deixaram tudo tão simples. Meu novo site é muito mais rápido e fácil de usar do que o antigo.", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_6", createdAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', updatedAt: 'Sáb Jul 19 2025 14:51:25 GMT+0530 (Horário Padrão da Índia)', product: { name: 'Caixa de Som Bluetooth', category: 'Eletrônicos', id: 'prod_1' } },
]

export const dummyStoreData = {
  id: "store_1",
  userId: "user_1",
  name: "Loja Feliz",
  description: "Na Loja Feliz, acreditamos que comprar deve ser simples, inteligente e satisfatório. Seja procurando pelas últimas tendências da moda, eletrônicos de ponta, itens essenciais para o lar ou produtos de estilo de vida únicos — temos tudo isso em um só lugar digital.",
  username: "lojafeliz",
  address: "3º Andar, Loja Feliz, Novo Prédio, Rua 123, Setor C, NY, EUA",
  status: "aprovada",
  isActive: true,
  logo: happy_store,
  email: "lojafeliz@example.com",
  contact: "+0 1234567890",
  createdAt: "2025-09-04T09:04:16.189Z",
  updatedAt: "2025-09-04T09:04:44.273Z",
  user: {
    id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
    name: "Great Stack",
    email: "user.greatstack@gmail.com",
    image: gs_logo,
  }
}

export const productDummyData = [
  {
    id: "prod_1",
    name: "Abajur de mesa moderno",
    description: "Abajur de mesa moderno com design elegante. É perfeito para qualquer ambiente. Feito com materiais de alta qualidade e vem com garantia vitalícia. Melhore sua experiência de áudio com estes fones sem fio. Mergulhe em um mundo de som puro com 50 horas de reprodução ininterrupta. Equipado com a avançada tecnologia Zen Mode Tech ENC e BoomX Tech, prepare-se para ser envolvido por uma sinfonia de melodias cristalinas.",
    mrp: 40,
    price: 29,
    images: [product_img1, product_img2, product_img3, product_img4],
    category: "Decoração",
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    rating: dummyRatingsData,
    createdAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 29 2025 14:51:25 GMT+0530 (India Standard Time)',
  },
  {
    id: "prod_2",
    name: "Caixa de som inteligente cinza",
    description: "Caixa de som inteligente com design elegante. É perfeita para qualquer ambiente. Feita com materiais de alta qualidade e vem com garantia vitalícia.",
    mrp: 50,
    price: 29,
    images: [product_img2],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    category: "Caixas de Som",
    rating: dummyRatingsData,
    createdAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 28 2025 14:51:25 GMT+0530 (India Standard Time)',
  },
  {
    id: "prod_3",
    name: "Relógio inteligente branco",
    description: "Relógio inteligente com design elegante. É perfeito para qualquer ambiente. Feito com materiais de alta qualidade e vem com garantia vitalícia.",
    mrp: 60,
    price: 29,
    images: [product_img3],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    category: "Relógio",
    rating: dummyRatingsData,
    createdAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 27 2025 14:51:25 GMT+0530 (India Standard Time)',
  },
  {
    id: "prod_4",
    name: "Fones de ouvido sem fio",
    description: "Fones de ouvido sem fio com design elegante. É perfeito para qualquer ambiente. Feito com materiais de alta qualidade e vem com garantia vitalícia.",
    mrp: 70,
    price: 29,
    images: [product_img4],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    category: "Fones de Ouvido",
    rating: dummyRatingsData,
    createdAt: 'Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 26 2025 14:51:25 GMT+0530 (India Standard Time)',
  },
  {
    id: "prod_5",
    name: "Relógio inteligente preto",
    description: "Relógio inteligente com design elegante. É perfeito para qualquer ambiente. Feito com materiais de alta qualidade e vem com garantia vitalícia.",
    mrp: 49,
    price: 29,
    images: [product_img5],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    category: "Relógio",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
  },
  {
    id: "prod_6",
    name: "Câmera de segurança",
    description: "Câmera de segurança com design elegante. É perfeita para qualquer ambiente. Feita com materiais de alta qualidade e vem com garantia vitalícia.",
    mrp: 59,
    price: 29,
    images: [product_img6],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    category: "Câmera",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 25 2025 14:51:25 GMT+0530 (India Standard Time)',
  },
  {
    id: "prod_7",
    name: "Caneta inteligente para iPad",
    description: "Caneta inteligente para iPad com design elegante. É perfeita para qualquer ambiente. Feita com materiais de alta qualidade e vem com garantia vitalícia.",
    mrp: 89,
    price: 29,
    images: [product_img7],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    category: "Caneta",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: 'Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 24 2025 14:51:25 GMT+0530 (India Standard Time)',
  },
  {
    id: "prod_8",
    name: "Home Theater",
    description: "Home Theater com design elegante. É perfeito para qualquer ambiente. Feito com materiais de alta qualidade e vem com garantia vitalícia.",
    mrp: 99,
    price: 29,
    images: [product_img8],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    category: "Teatro",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: 'Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 23 2025 14:51:25 GMT+0530 (India Standard Time)',
  },
  {
    id: "prod_9",
    name: "Fones sem fio Apple",
    description: "Fones sem fio Apple com design elegante. É perfeito para qualquer ambiente. Feito com materiais de alta qualidade e vem com garantia vitalícia.",
    mrp: 89,
    price: 29,
    images: [product_img9],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    category: "Fones Sem Fio",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: 'Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 22 2025 14:51:25 GMT+0530 (India Standard Time)',
  },
  {
    id: "prod_10",
    name: "Apple Smart Watch",
    description: "Apple Smart Watch com design elegante. É perfeito para qualquer ambiente. Feito com materiais de alta qualidade e vem com garantia vitalícia.",
    mrp: 179,
    price: 29,
    images: [product_img10],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    category: "Relógio",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: 'Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 21 2025 14:51:25 GMT+0530 (India Standard Time)',
  },
  {
    id: "prod_11",
    name: "Mouse gamer RGB",
    description: "Mouse gamer RGB com design elegante. É perfeito para qualquer ambiente. Feito com materiais de alta qualidade e vem com garantia vitalícia.",
    mrp: 39,
    price: 29,
    images: [product_img11],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    category: "Mouse",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: 'Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+0530 (India Standard Time)',
  },
  {
    id: "prod_12",
    name: "Aspirador inteligente",
    description: "Aspirador inteligente com design elegante. É perfeito para qualquer ambiente. Feito com materiais de alta qualidade e vem com garantia vitalícia.",
    mrp: 199,
    price: 29,
    images: [product_img12],
    storeId: "seller_1",
    inStock: true,
    store: dummyStoreData,
    category: "Limpeza",
    rating: [...dummyRatingsData, ...dummyRatingsData],
    createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
    updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
  }
];

export const addressDummyData = {
  id: "addr_1",
  userId: "user_1",
  name: "John Doe",
  email: "johndoe@example.com",
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
  country: "USA",
  phone: "1234567890",
  createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)',
}

export const dummyUserData = {
  id: "user_31dQbH27HVtovbs13X2cmqefddM",
  name: "GreatStack",
  email: "greatstack@example.com",
  image: gs_logo,
  cart: {}
}

export const couponDummyData = [
  { code: "NEW20", description: "20% de desconto para novos usuários", discount: 20, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:31.183Z" },
  { code: "NEW10", description: "10% de desconto para novos usuários", discount: 10, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:50.653Z" },
  { code: "OFF20", description: "20% de desconto para todos os usuários", discount: 20, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:00.811Z" },
  { code: "OFF10", description: "10% de desconto para todos os usuários", discount: 10, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:21.279Z" },
  { code: "PLUS10", description: "10% de desconto para membros", discount: 10, forNewUser: false, forMember: true, isPublic: false, expiresAt: "2027-03-06T00:00:00.000Z", createdAt: "2025-08-22T11:38:20.194Z" }
]

export const orderDummyData = [
  {
    id: "cmemm75h5001jtat89016h1p3",
    total: 214.2,
    status: "DELIVERED",
    userId: "user_31dQbH27HVtovbs13X2cmqefddM",
    storeId: "cmemkqnzm000htat8u7n8cpte",
    addressId: "cmemm6g95001ftat8omv9b883",
    isPaid: false,
    paymentMethod: "COD",
    createdAt: "2025-08-22T09:15:03.929Z",
    updatedAt: "2025-08-22T09:15:50.723Z",
    isCouponUsed: true,
    coupon: dummyRatingsData[2],
    orderItems: [
      { orderId: "cmemm75h5001jtat89016h1p3", productId: "cmemlydnx0017tat8h3rg92hz", quantity: 1, price: 89, product: productDummyData[0], },
      { orderId: "cmemm75h5001jtat89016h1p3", productId: "cmemlxgnk0015tat84qm8si5v", quantity: 1, price: 149, product: productDummyData[1], }
    ],
    address: addressDummyData,
    user: dummyUserData
  },
  {
    id: "cmemm6jv7001htat8vmm3gxaf",
    total: 421.6,
    status: "DELIVERED",
    userId: "user_31dQbH27HVtovbs13X2cmqefddM",
    storeId: "cmemkqnzm000htat8u7n8cpte",
    addressId: "cmemm6g95001ftat8omv9b883",
    isPaid: false,
    paymentMethod: "COD",
    createdAt: "2025-08-22T09:14:35.923Z",
    updatedAt: "2025-08-22T09:15:52.535Z",
    isCouponUsed: true,
    coupon: couponDummyData[0],
    orderItems: [
      { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemm1f3y001dtat8liccisar", quantity: 1, price: 229, product: productDummyData[2], },
      { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemm0nh2001btat8glfvhry1", quantity: 1, price: 99, product: productDummyData[3], },
      { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemlz8640019tat8kz7emqca", quantity: 1, price: 199, product: productDummyData[4], }
    ],
    address: addressDummyData,
    user: dummyUserData
  }
]

export const ourSpecsData = [
  { title: "Frete Grátis", description: "Aproveite entrega rápida e gratuita em todos os pedidos, sem condições, direto na sua porta.", icon: SendIcon, accent: '#05DF72' },
  { title: "7 Dias para Devolução Fácil", description: "Mudou de ideia? Sem problemas. Devolva qualquer item em até 7 dias.", icon: ClockFadingIcon, accent: '#FF8904' },
  { title: "Suporte ao Cliente 24/7", description: "Estamos aqui para você. Obtenha ajuda especializada com nosso suporte ao cliente.", icon: HeadsetIcon, accent: '#A684FF' }
]

export const storesDummyData = [
  {
    id: "cmemkb98v0001tat8r1hiyxhn",
    userId: "user_31dOriXqC4TATvc0brIhlYbwwc5",
    name: "GreatStack",
    description: "GreatStack é o marketplace de educação onde você pode comprar itens relacionados a programação e tecnologia.",
    username: "greatstack",
    address: "123 Maplewood Drive Springfield, IL 62704 EUA",
    status: "approved",
    isActive: true,
    logo: gs_logo,
    email: "greatstack@example.com",
    contact: "+0 1234567890",
    createdAt: "2025-08-22T08:22:16.189Z",
    updatedAt: "2025-08-22T08:22:44.273Z",
    user: dummyUserData,
  },
  {
    id: "cmemkqnzm000htat8u7n8cpte",
    userId: "user_31dQbH27HVtovbs13X2cmqefddM",
    name: "Loja Feliz",
    description: "Na Loja Feliz, acreditamos que comprar deve ser simples, inteligente e satisfatório. Seja buscando as últimas tendências da moda, eletrônicos de ponta, itens essenciais para casa ou produtos de estilo de vida únicos — temos tudo em um só espaço digital.",
    username: "happyshop",
    address: "3º Andar, Loja Feliz, Novo Prédio, Rua 123, Setor C, NY, EUA",
    status: "approved",
    isActive: true,
    logo: happy_store,
    email: "happyshop@example.com",
    contact: "+0 123456789",
    createdAt: "2025-08-22T08:34:15.155Z",
    updatedAt: "2025-08-22T08:34:47.162Z",
    user: dummyUserData,
  }
]

export const dummyAdminDashboardData = {
  "orders": 6,
  "stores": 2,
  "products": 12,
  "revenue": "959.10",
  "allOrders": [
    { "createdAt": "2025-08-20T08:46:58.239Z", "total": 145.6 },
    { "createdAt": "2025-08-22T08:46:21.818Z", "total": 97.2 },
    { "createdAt": "2025-08-22T08:45:59.587Z", "total": 54.4 },
    { "createdAt": "2025-08-23T09:15:03.929Z", "total": 214.2 },
    { "createdAt": "2025-08-23T09:14:35.923Z", "total": 421.6 },
    { "createdAt": "2025-08-23T11:44:29.713Z", "total": 26.1 },
    { "createdAt": "2025-08-24T09:15:03.929Z", "total": 214.2 },
    { "createdAt": "2025-08-24T09:14:35.923Z", "total": 421.6 },
    { "createdAt": "2025-08-24T11:44:29.713Z", "total": 26.1 },
    { "createdAt": "2025-08-24T11:56:29.713Z", "total": 36.1 },
    { "createdAt": "2025-08-25T11:44:29.713Z", "total": 26.1 },
    { "createdAt": "2025-08-25T09:15:03.929Z", "total": 214.2 },
    { "createdAt": "2025-08-25T09:14:35.923Z", "total": 421.6 },
    { "createdAt": "2025-08-25T11:44:29.713Z", "total": 26.1 },
    { "createdAt": "2025-08-25T11:56:29.713Z", "total": 36.1 },
    { "createdAt": "2025-08-25T11:30:29.713Z", "total": 110.1 }
  ]
}

export const dummyStoreDashboardData = {
  "ratings": dummyRatingsData,
  "totalOrders": 2,
  "totalEarnings": 636,
  "totalProducts": 5
}