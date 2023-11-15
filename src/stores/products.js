// Import the 'defineStore' function from 'pinia'
import { defineStore } from 'pinia';

// Define a constant array 'sampleProducts' containing sample product data
const sampleProducts = [
  // Product 1
  {
    // Unique identifier for the product
    id: 1,
    // Name of the product
    name: 'Crimson Puma Emblem Tee',
    // Price of the product
    price: 49.99,
    // Amount of product in stock
    stock: 2,
    // Description providing details about the product
    description: "A bold and eye-catching red t-shirt that showcases the iconic Puma logo, adding a touch of sporty sophistication to your wardrobe. Crafted from comfortable and breathable materials, this tee is ideal for both casual and active wear, ensuring you stay both fashionable and comfortable throughout the day.",
    // Category to which the product belongs
    category: 'T-Shirt',
    // Path to the product thumbnail image
    thumbnail: "/assets/images/product-1.jpg",
    // Indicates if the product is premium
    premium: false,
    // Available sizes for the product
    sizes: ["XS", "S", "M", "L", "XL"],
    // Array of reviews for the product
    reviews: [
      {
        // Unique identifier for the review
        id: 1,
        // Rating given by the reviewer
        rating: 4.5,
        // Name of the reviewer
        name: 'SportsEnthusiast23',
        // Review text provided by the reviewer
        review: "I bought this Puma tee for my workouts, and it's fantastic! The fabric is breathable, and the fit is just right. The Puma logo adds a cool sporty vibe to it. I'm very satisfied with this purchase, and it's become my gym staple."
      },
      // ... (Other reviews for the product)
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
  // Other reviews follow the same structure
  {
    id: 2,
    name: 'Stealthy Ebony Kicks',
    price: 79.99,
    stock: 7,
    description: "Sleek and versatile black sneakers, designed for everyday comfort and style. Their minimalist design, featuring a mix of breathable materials and cushioned soles, make them perfect for urban adventures and casual outings. Whether you're hitting the streets or meeting friends, these sneakers offer a blend of fashion and function that effortlessly complements your outfit.",
    category: 'Footwear',
    thumbnail: "/assets/images/product-2.jpg",
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
    stock: 0,
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
    stock: 5,
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
    name: 'Elegance in Grey',
    price: 59.99,
    stock: 6,
    description: "These light grey shoes are a perfect blend of style and comfort. They are ideal for everyday wear, whether you're going to work or just taking a leisurely stroll. The light grey color adds a touch of elegance to your outfit, and the shoes are designed to provide all-day comfort.",
    category: 'Footwear',
    thumbnail: "/assets/images/product-5.jpg",
    premium: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
      id: 1,
      rating: 4.5,
      name: 'FashionForward123',
      review: "I recently purchased the 'Elegance in Grey' shoes, and I'm thrilled with my choice! These shoes are not only stylish but also incredibly comfortable. The light grey color adds a touch of sophistication to my outfits, making them suitable for both work and casual occasions. The design is sleek and modern, and I appreciate the attention to detail in the craftsmanship. The all-day comfort they provide is a game-changer. Highly recommended for those who want a perfect balance of style and comfort in their footwear."
      },
      {
      id: 2,
      rating: 3.0,
      name: 'OnTheGoMom',
      review: "I bought the 'Elegance in Grey' shoes for my daily errands, and while they are comfortable, I expected a bit more in terms of style. The light grey color is nice, but the design is somewhat plain. They serve their purpose for casual wear, but I was hoping for a bit more flair. On the positive side, the comfort is undeniable, and they are easy to slip on and off. If you prioritize comfort over bold style, these might be a good fit for you."
      },
    ]
  },
  {
    id: 6,
    name: 'Puma Sportswear Shirt',
    price: 39.99,
    stock: 3,
    description: 'The Puma Sportswear Shirt is the perfect addition to your sports and casual wear collection. It offers a stylish and comfortable design, making it suitable for workouts or everyday use. This black shirt features the iconic Puma logo, showcasing your passion for sports and fashion.',
    category: 'T-Shirt',
    thumbnail: "/assets/images/product-6.jpg",
    premium: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: 1,
        rating: 4.5,
        name: 'ActiveLifestyleFanatic',
        review: "I recently purchased the 'Puma Sportswear Shirt,' and it's become a staple in my wardrobe. The black shirt with the iconic Puma logo adds a touch of sporty flair to my casual and workout outfits. The material is comfortable and breathable, making it suitable for various activities. While it may not be a premium item, the quality is surprisingly good for the price. The fit is just right, and I appreciate the range of sizes available. If you're looking for an affordable yet stylish addition to your sportswear collection, this Puma shirt is a solid choice."
      },
    ]
  },
  {
    id: 7,
    name: 'HRX Sports Socks',
    price: 12.99,
    stock: 0,
    description: 'The HRX Sports Socks are designed to help you perform at your best during sports activities. These socks offer exceptional comfort and durability, making them a reliable choice for athletes and fitness enthusiasts. They provide the support and cushioning your feet need during workouts or sports events.',
    category: 'Socks',
    thumbnail: "/assets/images/product-7.jpg",
    premium: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: 1,
        rating: 4.5,
        name: 'RunningEnthusiast88',
        review: "The HRX Sports Socks are a game-changer for my runs! They provide excellent support and cushioning, reducing fatigue during long distances. The durability is impressive, and they've held up well even after multiple washes. The sizing is accurate, and they stay in place without slipping. If you're a serious runner or athlete, these socks are a must-have for your gear collection."
      },
      {
        id: 2,
        rating: 3.5,
        name: 'CasualAthlete',
        review: "The HRX Sports Socks are comfortable for everyday wear, but they lack a bit in terms of style. The functionality is there, offering good support, but they look a bit plain. If you prioritize performance over aesthetics, these socks are a solid choice. However, if you want socks that make a fashion statement, you might want to explore other options."
      },
      {
        id: 3,
        rating: 4.5,
        name: 'RunningEnthusiast88',
        review: "The HRX Sports Socks are a game-changer for my runs! They provide excellent support and cushioning, reducing fatigue during long distances. The durability is impressive, and they've held up well even after multiple washes. The sizing is accurate, and they stay in place without slipping. If you're a serious runner or athlete, these socks are a must-have for your gear collection."
      },
      {
        id: 4,
        rating: 4.0,
        name: 'BasketballPro',
        review: "As a basketball player, I need socks that can handle quick movements and provide ample support. The HRX Sports Socks deliver on both fronts. The cushioning is just right, and they don't bunch up during games. I appreciate the range of sizes available, ensuring a snug fit. These socks have become my go-to for on-court performance."
      },
      {
        id: 5,
        rating: 4.0,
        name: 'SoccerPlayer23',
        review: "I wear the HRX Sports Socks during my soccer matches, and they've proven to be reliable. The cushioning is sufficient for the quick sprints and sudden stops on the field. The socks stay in place and don't cause discomfort. While they may not be the flashiest socks out there, they get the job done for athletic activities. Affordable and functional."
      },
    ]
  },
  {
    id: 8,
    name: 'Fossil Premium Black Watch',
    price: 199.99,
    stock: 1,
    description: 'Experience timeless elegance and precision with the Fossil Premium Black Watch. This high-quality watch is designed to impress, featuring a sleek black finish that complements any outfit. With precise timekeeping and a durable build, this watch is the perfect accessory for those who appreciate both style and functionality.',
    category: 'Watches',
    thumbnail: "/assets/images/product-8.jpg",
    premium: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: 1,
        rating: 4.5,
        name: 'TimelessEleganceFan',
        review: "The Fossil Premium Black Watch is a true masterpiece! The sleek black finish adds an element of sophistication to any outfit, making it my go-to accessory for both formal and casual occasions. The build quality is exceptional, and you can feel the weight of the premium materials. The timekeeping is precise, and the design is timeless. While it comes with a premium price tag, the elegance and durability justify the cost. If you're looking for a watch that combines style and functionality, this Fossil watch is worth the investment."
      },
      {
        id: 2,
        rating: 4.5,
        name: 'FashionConnoisseur',
        review: "I recently added the Fossil Premium Black Watch to my collection, and it's quickly become a favorite. The black finish is sleek and versatile, matching well with a variety of outfits. The build quality is evident, and the watch feels sturdy on the wrist. The size options make it easy to find the perfect fit. While it's on the higher end in terms of price, the premium look and feel make it a worthwhile purchase for those who appreciate a quality timepiece."
      },
    ]
  },
  {
    id: 9,
    name: 'Black Beauty Wristwatch',
    price: 249.99,
    stock: 2,
    description: "The Black Beauty Wristwatch is the epitome of sophistication and precision. This exquisite timepiece features a striking all-black design that exudes elegance and versatility. Whether you're attending a formal event or looking for a daily accessory that elevates your style, this premium watch delivers on all fronts. With meticulous craftsmanship and top-notch materials, it's a symbol of your discerning taste and appreciation for high-quality horology.",
    category: 'Watches',
    thumbnail: "/assets/images/product-9.jpg",
    premium: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: 1,
        rating: 2.0,
        name: 'DisappointedBuyer87',
        review: "I had high expectations for the Black Beauty Wristwatch, but unfortunately, it fell short. The all-black design is indeed striking, but the quality doesn't match the premium price. After a short period of use, the strap started showing signs of wear, and the watch lost a few minutes every day. I expected meticulous craftsmanship and top-notch materials, but it seems like the aesthetic appeal outweighs the actual durability and functionality. Not recommended for those seeking a reliable and long-lasting timepiece."
      },
      {
        id: 2,
        rating: 1.5,
        name: 'RegretfulPurchase23',
        review: "I regret purchasing the Black Beauty Wristwatch. The initial allure of its striking design quickly faded as I encountered multiple issues. The watch's timekeeping is inconsistent, and I've had to readjust it frequently. The premium price tag doesn't align with the mediocre quality. Additionally, the strap is uncomfortable and causes irritation after prolonged wear. Save yourself the disappointment and invest in a watch with better craftsmanship and reliability."
      },
      {
        id: 3,
        rating: 1.0,
        name: 'UnsatisfiedCustomer99',
        review: "The Black Beauty Wristwatch is a complete letdown. I expected a premium experience, but the reality is far from it. The all-black design may be visually appealing, but the overall build feels cheap. The watch doesn't keep accurate time, and the materials used seem to be of subpar quality. For the hefty price, I anticipated a reliable and elegant timepiece, but this watch failed to meet even basic expectations. I strongly advise against wasting your money on this product."
      },
      {
        id: 4,
        rating: 2.0,
        name: 'QualityConsciousShopper',
        review: "As someone who values quality in their purchases, the Black Beauty Wristwatch was a disappointment. The aesthetics are attractive, but that's where the positives end. The watch feels flimsy, and the timekeeping is inconsistent. It's evident that the emphasis was placed on appearance rather than functionality. The premium price tag is not justified, considering the lackluster performance and build. I regret choosing this watch over other, more reliable options in the market."
      },
    ]
  },
  {
    id: 10,
    name: 'Red Zone Performance',
    price: 79.99,
    stock: 9,
    description: "Introducing the Red Zone Performance, where style meets functionality. These black and red sports shoes are designed to take your athletic performance to the next level. With a bold color combination, they not only look great but also provide the support and comfort you need for your active lifestyle. Whether you're running, training, or just going for a casual jog, these shoes have got you covered.",
    category: 'Footwear',
    thumbnail: "/assets/images/product-10.jpg",
    premium: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: 1,
        rating: 3.5,
        name: 'FitnessEnthusiast22',
        review: "The Red Zone Performance shoes offer a decent balance of style and functionality. The black and red color combination is eye-catching, and they do provide good support during workouts. However, I found the sizing to be a bit off, and they took some time to break in. The comfort level is average, and for the premium price, I expected a bit more. Overall, they're okay, but there are better options available in the market."
      },
      {
        id: 2,
        rating: 3.0,
        name: 'CasualRunner123',
        review: "I bought the Red Zone Performance shoes for my casual runs, and they are just average. The design is stylish, but the comfort level falls short of expectations. The support is decent, but I noticed some discomfort after longer runs. The price seems a bit high for what you get. If you prioritize looks over absolute performance, these might work for you, but there are better options in the same price range."
      },
      {
        id: 3,
        rating: 3.5,
        name: 'ActiveLifestyleMom',
        review: "As someone who leads an active lifestyle, I had high hopes for the Red Zone Performance shoes. While the color combination is vibrant and adds a fun touch to my workout gear, I can't ignore the average comfort and support. The shoes are suitable for light activities, but for intense workouts, they fall short. The premium price tag doesn't align with the overall performance. They're stylish, but I expected more in terms of functionality."
      },
      {
        id: 4,
        rating: 2.5,
        name: 'SkepticalShopper',
        review: "I was excited to try the Red Zone Performance shoes, but they didn't quite live up to the hype. The design is bold and attractive, but the comfort level is lacking. I experienced some discomfort in the arch area, and the overall support was not as expected. For the price, I expected a higher quality of materials and performance. Unfortunately, these shoes fell short of my expectations, and I would recommend exploring other options in the market."
      },
    ]
  },
  {
    id: 11,
    name: 'Light Grey Classic Sneakers',
    price: 49.99,
    stock: 5,
    description: "Elevate your everyday style with our Light Grey Classic Sneakers. These sneakers offer a perfect blend of comfort and versatility, making them the ideal choice for your casual footwear collection. The light grey color adds a touch of sophistication to your outfit, and the classic design ensures they go well with a variety of clothing. Whether you're out for a stroll or meeting friends, these sneakers provide all-day comfort.",
    category: 'Footwear',
    thumbnail: "/assets/images/product-11.jpg",
    premium: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: 1,
        rating: 4.5,
        name: 'Fashionista101',
        review: "I absolutely love the Light Grey Classic Sneakers! They've become my go-to for everyday wear. The light grey color is versatile and adds a touch of elegance to my casual outfits. The comfort level is outstanding, and I can wear them all day without any discomfort. The classic design ensures they pair well with various clothing styles. For the affordable price, these sneakers are a fantastic addition to my footwear collection. Highly recommended!"
      },
      {
        id: 2,
        rating: 4.5,
        name: 'CasualChicDiva',
        review: "These Light Grey Classic Sneakers are a must-have for anyone who values comfort and style. The color is perfect for easy pairing with different outfits, and the classic design makes them timeless. I was pleasantly surprised by the comfort level – they feel like walking on clouds! Considering the affordable price, these sneakers offer excellent value for money. I've received compliments on them, and I couldn't be happier with my purchase."
      },
      {
        id: 3,
        rating: 5.0,
        name: 'HappyFeet',
        review: "I can't express how satisfied I am with the Light Grey Classic Sneakers! They not only look great but also provide exceptional comfort. The light grey color is subtle yet stylish, making them suitable for various occasions. The sizing is accurate, and they're easy to slip on and off. These sneakers have become my daily choice for running errands and casual outings. If you're in search of affordable, stylish, and comfortable sneakers, look no further!"
      },
    ]
  },
  {
    id: 12,
    name: 'Nike Black Jogger Pants',
    price: 69.99,
    stock: 0,
    description: "Upgrade your athleisure wardrobe with the Nike Black Jogger Pants. These pants offer both comfort and style in a sleek black design. Whether you're hitting the gym, going for a run, or simply running errands, these joggers are the perfect choice. They provide a relaxed fit and are made with high-quality materials to ensure durability and long-lasting comfort.",
    category: 'Joggers',
    thumbnail: "/assets/images/product-12.jpg",
    premium: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    reviews: [
      {
        id: 1,
        rating: 3.0,
        name: 'FitnessFashionista',
        review: "I had high hopes for the Nike Black Jogger Pants, but they have both positives and negatives. On the bright side, the sleek black design is stylish and versatile, making them suitable for various activities. The relaxed fit is comfortable, especially during workouts. However, I noticed some issues with the durability of the material. After a few washes, I observed signs of wear and tear, which was disappointing given the premium price. While they offer comfort and style, I expected better longevity from a brand like Nike. It's a decent choice, but be mindful of the potential durability concerns."
      },
    ]
  },
];

// Define a store named 'products' using Pinia
export const productsStore = defineStore('products', {
  // Define the state of the store
  state: () => ({
    // Array to store product data
    products: [],
    // Array to store products added to the cart
    cart: [],
    // Total shipping cost for items in the cart
    totalShippingCost: 0,
  }),

  // Define getters to compute derived state
  getters: {
    // Compute the total cost of items in the cart
    totalCartCost() {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },

  // Define actions to perform asynchronous operations or mutations
  actions: {
    // Action to fetch products from a database or API
    fetchProductsFromDB() {
      this.products = sampleProducts; // Assuming 'sampleProducts' is defined in the same scope
    },

    // Action to add a product to the cart
    addToCart(product) {
      // Check if the product is out of stock
      if (product.stock === 0) {
        console.log("Sorry, this product is out of stock.");
        return; // Exit the function if the product is out of stock
      }
      // Calculate the shipping cost based on whether the product is premium or not
      const shippingCost = product.premium ? 0 : 2.99;
      product.shippingCost = shippingCost;

      // Check if the product is already in the cart
      const existingItemIndex = this.cart.findIndex((item) => item.id === product.id);

      // Update quantity if the product is already in the cart, otherwise, add it to the cart
      if (existingItemIndex !== -1) {
        this.cart[existingItemIndex].quantity += 1;
      } else {
        this.cart.push({
          ...product,
          quantity: 1,
        });
      }

      // Update the total shipping cost
      this.totalShippingCost += shippingCost;
    },

    // Action to remove a product from the cart
    removeFromCart(id) {
      // Find the product to be removed from the cart
      const removedProduct = this.cart.find((item) => item.id === id);

      // If the product is found, update the total shipping cost and remove it from the cart
      if (removedProduct) {
        this.totalShippingCost -= removedProduct.shippingCost;
        this.cart = this.cart.filter((item) => item.id !== id);
      }
    },

    // Action to add a review to a product
    addReviewToProduct({ productId, review }) {
      // Find the product by ID
      const product = this.products.find((item) => item.id === productId);

      // If the product is found, add the review to its reviews array
      if (product) {
        product.reviews.push(review);
      }
    },
  },
});