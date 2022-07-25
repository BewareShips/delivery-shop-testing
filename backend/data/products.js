const products =  [
  {
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    "name": "Пепперони Фреш с перцем",
    "price": 803,
    "category": "Pizza-Trone",
  },
  {
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
    "name": "Сырная",
    "price": 245,
    "category": "Pizza-Trone",
  },
  {
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
    "name": "Цыпленок барбекю",
    "price": 295,
    "category": "Pizza-Trone",
  },
  {
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
    "name": "Кисло-сладкий цыпленок",
    "price": 275,
    "category": "Pizza-Trone",
  },
  {
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    "name": "Чизбургер-пицца",
    "price": 415,
    "category": "Pizza-Trone",
  },
  {
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
    "name": "Крэйзи пепперони",
    "price": 580,
    "category": "Pizza-Trone",
  },
  {
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
    "name": "Пепперони",
    "price": 675,
    "category": "Pizza-Trone",
  },
  {
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
    "name": "Маргарита",
    "price": 450,
    "category": "Pizza-Trone",
  },
  {
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
    "name": "Четыре сезона",
    "price": 395,
    "category": "Pizza-Trone",
  },
  {
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
    "name": "Овощи и грибы 🌱",
    "price": 285,
    "category": "Pizza-Trone",
  },
  {
    "imageUrl": "https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/hero/Sdwch_McChicken_Bacon.png?$Product_Desktop$",
    "name": "МакЧікен Бекон",
    "price": 100,
    "category": "mcDonalds",
  },
  {
    "imageUrl": "https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/hero/thumb.Sdwch_BigMac.png?$Product_Desktop$",
    "name": "Біг Мак",
    "price": 150,
    "category": "mcDonalds",
  },
  {
    "imageUrl": "https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/hero/Sdwch_McChicken_Bacon.png?$Product_Desktop$",
    "name": "Біг Тейсті",
    "price": 175,
    "category": "mcDonalds",
  },
  {
    "imageUrl": "https://www.mcdonalds.com/is/image/content/dam/ua/nutrition/nfl-product/product/hero/Dbl_Royal_Cheese.png?$Product_Desktop$",
    "name": "Дабл Роял Чізбургер",
    "price": 180,
    "category": "mcDonalds",
  },
  {
    "imageUrl": "https://i2.wp.com/big-burger.ua/wp-content/uploads/2021/12/burger_z_svininou_na_sayt.jpg?resize=300%2C300&ssl=1",
    "name": "Бургер со Свининной",
    "price": 110,
    "category": "bigBurger",
  },
  {
    "imageUrl": "https://i1.wp.com/big-burger.ua/wp-content/uploads/2021/02/Burger5_sRGB.jpg?fit=1080%2C1080&ssl=1",
    "name": "Гриль бургер",
    "price": 115,
    "category": "bigBurger",
  },
  {
    "imageUrl": "https://i1.wp.com/big-burger.ua/wp-content/uploads/2021/02/Burger4_sRGB.jpg?fit=1080%2C1080&ssl=1",
    "name": "Филе бургер",
    "price": 125,
    "category": "bigBurger",
  },
  {
    "imageUrl": "https://i0.wp.com/big-burger.ua/wp-content/uploads/2021/02/Burger2_sRGB.jpg?fit=1080%2C1080&ssl=1",
    "name": "Чиз бургер",
    "price": 145,
    "category": "bigBurger",
  },
  {
    "imageUrl": "https://contrabanda.kiev.ua/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/c/h/chi.jpg",
    "name": "Бургер Чикаго",
    "price": 199,
    "category": "contrabanda",
  },
  {
    "imageUrl": "https://contrabanda.kiev.ua/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/b/a/baconator.jpg",
    "name": "Беканатор",
    "price": 209,
    "category": "contrabanda",
  },
  {
    "imageUrl": "https://contrabanda.kiev.ua/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/k/c/kcl.jpg",
    "name": "Бургер с креветками",
    "price": 204,
    "category": "contrabanda",
  },
  {
    "imageUrl": "https://contrabanda.kiev.ua/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/r/o/rock.jpg",
    "name": "Бургер Рокки",
    "price": 213,
    "category": "contrabanda",
  },
  {
    "imageUrl": "https://mistercat.com.ua/_next/image?url=https%3A%2F%2Fimg.postershop.me%2F10900%2FProducts%2F2954537_1652278834.4752_original.png&w=600&q=75",
    "name": "Піца Гаваї",
    "price": 129,
    "category": "misterCat",
  },
  {
    "imageUrl": "https://mistercat.com.ua/_next/image?url=https%3A%2F%2Fimg.postershop.me%2F10900%2FProducts%2F2954538_1650580859.499_original.png&w=600&q=75",
    "name": "Піца Діавола",
    "price": 139,
    "category": "misterCat",
  },
  {
    "imageUrl": "https://mistercat.com.ua/_next/image?url=https%3A%2F%2Fimg.postershop.me%2F10900%2FProducts%2F2954554_1650580857.0244_original.png&w=600&q=75",
    "name": "Піца Овочі та гриби",
    "price": 145,
    "category": "misterCat",
  },
  {
    "imageUrl": "https://mistercat.com.ua/_next/image?url=https%3A%2F%2Fimg.postershop.me%2F10900%2FProducts%2F2954560_1650580856.2325_original.png&w=600&q=75",
    "name": "Піца Чізбургер",
    "price": 125,
    "category": "misterCat",
  },
  {
    "imageUrl": "https://gamabc.com.ua/upload/000/u1/9/8/982b5e15.png",
    "name": "Black Бургер ",
    "price": 144,
    "category": "gamabc",
  },
  {
    "imageUrl": "https://gamabc.com.ua/upload/000/u1/c/5/hamburher-z-kotletoyu-photo-big.png",
    "name": "Гамбургер с котлетой",
    "price": 112,
    "category": "gamabc",
  },
  {
    "imageUrl": "https://gamabc.com.ua/upload/000/u1/6/c/hamburher-z-shynkoyu-photo-big.png",
    "name": "Гамбургер с ветчиной",
    "price": 125,
    "category": "gamabc",
  },
  {
    "imageUrl": "https://gamabc.com.ua/upload/000/u1/d/b/hamburher-z-kurkoyu-photo-big.png",
    "name": "Гамбургер с курицей",
    "price": 122,
    "category": "gamabc",
  },
]

module.exports = products;

