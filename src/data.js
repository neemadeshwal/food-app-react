const MenuData = [
  {
    id: 1,
    img:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Teriyaki-Meatballs_EXPS_FT21_13380_F_1119_1-15.jpg?fit=700,700",
    name: "Teriyaki Pineapple Meatballs",
    Calories: 200,
    price: 12,
    type: "Appetizers",

    isSpicy: true,
    HasGlutan: false,
    isBestSeller: true,
    hasDiscount: 5
  },
  {
    id: 2,
    img:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Fruit-Charcuterie-Board_EXPS_JMZ18_224813_C03_07_8b-16.jpg?fit=700,700",
    name: "Fruit Charcuterie Board",
    Calories: 80,

    price: 10,
    type: "Appetizers",
    isSpicy: false,
    HasGlutan: false,
    isBestSeller: false,
    hasDiscount: 20
  },
  {
    id: 3,
    img:
      "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/cheesecake-phpiHRUZJ",

    name: "Cheesecake",
    Calories: 150,
    price: 8,
    type: "Desserts",
    isSpicy: false,
    HasGlutan: true,
    isBestSeller: true,
    hasDiscount: 18
  },
  {
    id: 4,
    img:
      "https://anoumanzer.com/upload/tmp/2023-01/10/2-691edd4a3942b8aa4a373155c86cdab3.jpg",
    name: "Veggie Pizza",
    Calories: 100,
    price: 13,
    type: "Pizza",
    isSpicy: true,
    HasGlutan: true,
    isBestSeller: false,
    hasDiscount: 8.5
  },

  {
    id: 5,
    img:
      "https://assets.epicurious.com/photos/60d1e9fbd62cfdf9e277542e/1:1/w_1600%2Cc_limit/ChickenMushroomBurger_RECIPE_061721_18256.jpg",
    name: "Double-stack  Burgers",
    Calories: 150,
    price: 22,
    type: "Main Course",
    isSpicy: true,
    HasGlutan: false,
    isBestSeller: true,
    hasDiscount: 6
  },
  {
    id: 6,
    img:
      "https://publish.purewow.net/wp-content/uploads/sites/2/2021/01/types-of-soup-split-pea.jpg?fit=728%2C921",
    name: "Split Pea Soup",
    Calories: 80,

    price: 10,
    type: "Soups",
    isSpicy: true,
    HasGlutan: false,
    isBestSeller: false,
    hasDiscount: 15
  },
  {
    id: 7,
    img:
      "https://anoumanzer.com/upload/tmp/2023-01/10/2-b0b25eb6705a1a8b32906514985d1bc6.jpg",
    name: "Chicken Barbeque Pizza",
    Calories: 250,
    price: 14,
    type: "Pizza",
    isSpicy: true,
    HasGlutan: true,
    isBestSeller: true,
    hasDiscount: 3
  },
  {
    id: 8,
    img:
      "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/brownies-phpEnntGg",
    name: "Brownies",
    Calories: 120,
    price: 7,
    type: "Desserts",
    isSpicy: false,
    HasGlutan: false,
    isBestSeller: true,
    hasDiscount: 13
  },
  {
    id: 9,
    img:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Parmesan-Slider-Bake_EXPS_MTCBBZ17_204498_D03_01_3b-4.jpg?fit=700,700",
    name: "Chicken Parmasean Baked",
    Calories: 300,
    price: 30,
    type: "Main Course",
    isSpicy: false,
    HasGlutan: true,
    isBestSeller: false,
    hasDiscount: 10
  },
  {
    id: 10,
    img:
      "https://assets.epicurious.com/photos/5f2333d0841506e1b11da70b/1:1/w_1600%2Cc_limit/ShrimpSkewers_RECIPE_072920_10116.jpg",
    name: "Habanaro BBQ shrimp",
    Calories: 350,
    price: 35,
    type: "Main Course",
    isSpicy: true,
    HasGlutan: false,
    isBestSeller: true,
    hasDiscount: 12
  },
  {
    id: 11,
    img:
      "https://assets.epicurious.com/photos/60d0c81097e02607b7ace32d/1:1/w_1600%2Cc_limit/RamenChickenSalad_RECIPE_061721_18166.jpg",
    name: "Garlic Instant Ramen Noodles",
    Calories: 220,
    price: 11,
    type: "Appetizers",
    isSpicy: true,
    HasGlutan: true,
    isBestSeller: false,
    hasDiscount: 10
  },
  {
    id: 12,
    img:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Fried-Prosciutto-Tortellini_EXPS_THN16_196633_C06_16_1b-5.jpg?fit=700,700",
    name: "Fried prosicutor tortellini",
    Calories: 190,
    price: 41,
    type: "Main Course",
    isSpicy: true,
    HasGlutan: false,
    isBestSeller: true,
    hasDiscount: 11
  },
  {
    id: 13,
    img:
      "https://publish.purewow.net/wp-content/uploads/sites/2/2021/01/types-of-soup-italian-wedding.jpg?fit=728%2C921",
    name: "Italian wedding soup",
    Calories: 50,

    price: 17,
    type: "Soups",
    isSpicy: true,
    HasGlutan: false,
    isBestSeller: false,
    hasDiscount: 25
  },
  {
    id: 14,
    img:
      "https://assets.epicurious.com/photos/5e459ce19066ff0008317a58/1:1/w_1600%2Cc_limit/cauliflower-bolognese-recipe-BA-021320.jpg",
    name: "Cauliflower Turotize",
    Calories: 260,
    price: 19,
    type: "Appetizers",
    isSpicy: true,
    HasGlutan: false,
    isBestSeller: false,
    hasDiscount: 20
  },

  {
    id: 15,
    img:
      "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/mousse-php8KgsQt",
    name: "Chocolate Mousee",
    Calories: 190,
    price: 11,
    type: "Desserts",
    isSpicy: false,
    HasGlutan: false,
    isBestSeller: false,
    hasDiscount: 23
  }
];
export default MenuData;
