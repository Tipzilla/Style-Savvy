import { defineStore } from 'pinia';

const sampleProducts = [
  {
    id: 1,
    name: 'Crimson Puma Emblem Tee',
    price: 49.99,
    summary: 'A vibrant red t-shirt featuring the iconic Puma logo, a perfect choice for a sporty and stylish look.',
    description: "A bold and eye-catching red t-shirt that showcases the iconic Puma logo, adding a touch of sporty sophistication to your wardrobe. Crafted from comfortable and breathable materials, this tee is ideal for both casual and active wear, ensuring you stay both fashionable and comfortable throughout the day.",
    category: 'T-Shirt',
    thumbnail: "/assets/images/product-1.jpg",
    premium: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: 1,
        rating: 4.8,
        name: 'SportsEnthusiast23',
        review: "I bought this Puma tee for my workouts, and it's fantastic! The fabric is breathable, and the fit is just right. The Puma logo adds a cool sporty vibe to it. I'm very satisfied with this purchase, and it's become my gym staple."
      },
      {
        id: 2,
        rating: 4.5,
        name: 'TrendyFashionista',
        review: "This Puma t-shirt is a must-have for any fashion-forward individual. It's stylish and comfortable. The 'Puma' logo is a subtle yet eye-catching detail. I've received compliments every time I wear it. It's a great addition to my wardrobe."
      },
      {
        id: 3,
        rating: 4.2,
        name: 'ActiveLifestyleGuy',
        review: "I wear this tee for my outdoor activities, and it performs well. It's durable, and the fabric can handle some rough use. The Puma logo is a symbol of quality. I would recommend it to anyone who loves an active lifestyle."
      },
    ],
  },  
  {
    id: 2,
    name: 'Stealthy Ebony Kicks',
    price: 79.99,
    summary: 'Classic black sneakers that combine timeless style with everyday comfort.',
    description: "Sleek and versatile black sneakers, designed for everyday comfort and style. Their minimalist design, featuring a mix of breathable materials and cushioned soles, make them perfect for urban adventures and casual outings. Whether you're hitting the streets or meeting friends, these sneakers offer a blend of fashion and function that effortlessly complements your outfit.",
    category: 'Footwear',
    thumbnail: "../assets/images/product-2.jpg",
    premium: true,
    sizes: ["XS","S","M","L","XL"],
    reviews: [
      {
        id: 1,
        rating: 4.7,
        name: 'UrbanExplorer21',
        review: "These black sneakers are a game-changer for my urban adventures. They look super stylish and are incredibly comfortable. I've walked miles in them, and my feet never felt tired. The cushioned soles provide excellent support. These kicks have become my go-to choice for exploring the city. I highly recommend them!"
      },
      {
        id: 2,
        rating: 4.5,
        name: 'FashionForward123',
        review: "I'm all about style, and these ebony kicks fit the bill perfectly. The minimalist design is chic and goes well with a variety of outfits. They're not just good-looking; they're also comfortable to wear. I've received compliments from friends every time I sport these. If you're looking for versatile and fashionable sneakers, these are a great choice."
      },
    ],
  },  
  {
    id: 3,
    name: 'Charcoal Comfort Joggers',
    price: 59.99,
    summary: 'A stylish and cozy choice for your everyday wardrobe, offering a versatile and comfortable option for both casual outings and relaxed activities.',
    description: "The perfect combination of style and relaxation, designed to keep you cozy and on-trend. Crafted from soft and breathable materials, these charcoal-colored joggers offer a versatile addition to your wardrobe, suitable for lounging, exercising, or running errands. With a comfortable fit and a modern aesthetic, they effortlessly complement your everyday look.",
    category: 'Joggers',
    thumbnail: "/assets/images/product-3.jpg",
    premium: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: 1,
        rating: 4.2,
        name: 'ActiveLifestyleGuy',
        review: "These joggers are a great addition to my active lifestyle. They're comfortable and allow for easy movement during workouts. The charcoal color is stylish, and the fit is just right. Highly recommended for those who love staying active."
      },
      {
        id: 2,
        rating: 3.0,
        name: 'CasualShopper45',
        review: "The joggers are decent, nothing exceptional. They're comfortable for casual wear, but the style is pretty basic. They serve the purpose, but I expected a bit more in terms of design."
      },
      {
        id: 3,
        rating: 2.5,
        name: 'FashionCritic101',
        review: "I was disappointed with these joggers. They looked much better in the pictures. The fit is a bit off, and they don't look as stylish as I hoped. I wouldn't buy them again."
      },
      {
        id: 4,
        rating: 1.8,
        name: 'DisappointedCustomer',
        review: "I regret buying these joggers. They are not comfortable, and the quality is below average. After just a few wears, they started showing signs of wear and tear. I wouldn't recommend these to anyone."
      },
    ],
  },  
  {
    id: 4,
    name: 'Royal Blue Puma Polo',
    price: 54.99,
    summary: "A stylish and comfortable addition to your wardrobe, offering a classic and sporty look.",
    description: "A striking and sporty polo shirt designed for a dynamic and fashionable look. Crafted with high-quality materials, this polo offers a comfortable and breathable experience. Its vibrant royal blue color is eye-catching and versatile, making it a great choice for both casual and active wear. Whether you're headed to the golf course, a social gathering, or just want a touch of athletic style, this Puma polo has you covered.",
    category: 'Polo',
    thumbnail: "/assets/images/product-4.jpg",
    premium: true,
    sizes: ["XS","S","M","L","XL"],
    reviews: [
      {
        id: 1,
        rating: 4.8,
        name: 'SportsEnthusiast23',
        review: "I love this Puma polo! It's not only stylish but also very comfortable. The royal blue color is vibrant and makes a statement. The quality of the material is top-notch, and it's perfect for my golf outings. I've received compliments every time I wear it. Highly recommended for those who appreciate both fashion and sporty style."
      },
      {
        id: 2,
        rating: 3.5,
        name: 'CasualChic',
        review: "The Puma polo is a decent addition to my wardrobe. It's comfortable and versatile, suitable for casual occasions. The design is nice, but it's not exceptionally unique. It serves its purpose as a classic polo shirt."
      },
    ],
  },  
  {
    id: 5,
    name: 'Elegance in Grey - Comfort Shoes',
    price: 59.99,
    summary: 'Stylish and comfortable light grey shoes for everyday wear.',
    description: "These light grey shoes are a perfect blend of style and comfort. They are ideal for everyday wear, whether you're going to work or just taking a leisurely stroll. The light grey color adds a touch of elegance to your outfit, and the shoes are designed to provide all-day comfort.",
    category: 'Footwear',
    thumbnail: "/assets/images/product-5.jpg",
    premium: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: false,
  },
  {
    id: 6,
    name: 'Puma Sportswear Shirt',
    price: 39.99,
    summary: 'Stay stylish and comfortable with this black Puma shirt for sports and casual wear.',
    description: 'The Puma Sportswear Shirt is the perfect addition to your sports and casual wear collection. It offers a stylish and comfortable design, making it suitable for workouts or everyday use. This black shirt features the iconic Puma logo, showcasing your passion for sports and fashion.',
    category: 'T-Shirt',
    thumbnail: "/assets/images/product-6.jpg",
    premium: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: false,
  },
  {
    id: 7,
    name: 'HRX Sports Performance Socks',
    price: 12.99,
    summary: 'Enhance your sports performance with these comfortable and durable HRX sports socks.',
    description: 'The HRX Sports Performance Socks are designed to help you perform at your best during sports activities. These socks offer exceptional comfort and durability, making them a reliable choice for athletes and fitness enthusiasts. They provide the support and cushioning your feet need during workouts or sports events.',
    category: 'Socks',
    thumbnail: "/assets/images/product-7.jpg",
    premium: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: false,
  },
  {
    id: 8,
    name: 'Fossil Premium Black Watch',
    price: 199.99,
    summary: 'Experience the epitome of elegance and precision with the Fossil Premium Black Watch, a timeless accessory that complements any style.',
    description: 'Experience timeless elegance and precision with the Fossil Premium Black Watch. This high-quality watch is designed to impress, featuring a sleek black finish that complements any outfit. With precise timekeeping and a durable build, this watch is the perfect accessory for those who appreciate both style and functionality.',
    category: 'Watches',
    thumbnail: "/assets/images/product-8.jpg",
    premium: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: false,
  },
  {
    id: 9,
    name: 'Black Beauty - Premium Wristwatch',
    price: 249.99,
    summary: 'Experience sophistication and precision with the Black Beauty, a premium black wristwatch that defines timeless style.',
    description: "The Black Beauty - Premium Wristwatch is the epitome of sophistication and precision. This exquisite timepiece features a striking all-black design that exudes elegance and versatility. Whether you're attending a formal event or looking for a daily accessory that elevates your style, this premium watch delivers on all fronts. With meticulous craftsmanship and top-notch materials, it's a symbol of your discerning taste and appreciation for high-quality horology.",
    category: 'Watches',
    thumbnail: "/assets/images/product-9.jpg",
    premium: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: false, 
  },
  {
    id: 10,
    name: 'Red Zone Performance Sports Shoes',
    price: 79.99,
    summary: 'Elevate your sports performance with Red Zone Performance Sports Shoes - a dynamic fusion of style and functionality.',
    description: "Introducing the Red Zone Performance Sports Shoes, where style meets functionality. These black and red sports shoes are designed to take your athletic performance to the next level. With a bold color combination, they not only look great but also provide the support and comfort you need for your active lifestyle. Whether you're running, training, or just going for a casual jog, these shoes have got you covered.",
    category: 'Footwear',
    thumbnail: "/assets/images/product-10.jpg",
    premium: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: false, 
  },
  {
    id: 11,
    name: 'Light Grey Classic Sneakers',
    price: 49.99,
    summary: 'Step up your style with these comfortable and versatile light grey sneakers.',
    description: "Elevate your everyday style with our Light Grey Classic Sneakers. These sneakers offer a perfect blend of comfort and versatility, making them the ideal choice for your casual footwear collection. The light grey color adds a touch of sophistication to your outfit, and the classic design ensures they go well with a variety of clothing. Whether you're out for a stroll or meeting friends, these sneakers provide all-day comfort.",
    category: 'Footwear',
    thumbnail: "/assets/images/product-11.jpg",
    premium: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: false, 
  },
  {
    id: 12,
    name: 'Nike Black Jogger Pants',
    price: 69.99,
    summary: 'Stay comfortable and stylish with these versatile Nike Black Jogger Pants.',
    description: "Upgrade your athleisure wardrobe with the Nike Black Jogger Pants. These pants offer both comfort and style in a sleek black design. Whether you're hitting the gym, going for a run, or simply running errands, these joggers are the perfect choice. They provide a relaxed fit and are made with high-quality materials to ensure durability and long-lasting comfort.",
    category: 'Joggers',
    thumbnail: "/assets/images/product-12.jpg",
    premium: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: false, 
  },
];

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: [],
    totalShippingCost: 0, 
  }),
  getters: {
    totalCartCost() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  actions: {
    fetchProductsFromDB() {
      this.products = sampleProducts;
    },
    addToCart(product) {
      const shippingCost = product.premium ? 0 : 2.99;
      product.shippingCost = shippingCost;

      const existingItemIndex = this.cart.findIndex((item) => item.id === product.id);

      if (existingItemIndex !== -1) {
        this.cart[existingItemIndex].quantity += 1;
      } else {
        this.cart.push({
          ...product,
          quantity: 1,
        });
      }
      this.totalShippingCost += shippingCost; 
    },
    removeFromCart(id) {
      const removedProduct = this.cart.find((item) => item.id === id);
      if (removedProduct) {
        this.totalShippingCost -= removedProduct.shippingCost;

        this.cart = this.cart.filter((item) => item.id !== id);
      }
    },
    addReviewToProduct({ productId, review }) {
      const product = this.products.find((item) => item.id === productId);
      if (product) {
        product.reviews.push(review);
      }
    },
  }
});