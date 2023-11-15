<template>
  <!-- Back to Catalog button -->
  <button @click="router.push({ name: 'Catalog'})">
    <i class="fa-solid fa-arrow-left"></i> Back to Catalog
  </button>

  <!-- Single product details -->
  <div class="small-container single-product">
    <div class="row">
      <!-- Product Image -->
      <div class="col">
        <img :src="selectedProduct.thumbnail">
      </div>

      <!-- Product Information -->
      <div class="col">
        <!-- Breadcrumb -->
        <p>Home / {{ selectedProduct.category }}</p>

        <!-- Product Name and Premium Badge -->
        <h1>
          {{ selectedProduct.name }}<i v-if="selectedProduct.premium" class="fa-solid fa-crown" title="Premium item: Free shipping!"></i>
        </h1>

        <!-- Product Price -->
        <h4>${{ selectedProduct.price }}</h4>

        <h4 v-if="selectedProduct.stock == 0"><i class="fa-solid fa-box"></i> Out of Stock.</h4>

        <h4 v-if="selectedProduct.stock > 0"><i class="fa-solid fa-clock"></i> Hurry! Only {{ selectedProduct.stock }} left!</h4>

        <!-- Quantity and Size Input -->
        <h3 v-if="showQuantityError" class="error-message" style="color: #E74C3C;">
          {{ showQuantityError ? 'Please select a quantity.' : '' }}
        </h3>

        <h3 v-if="showSizeError" class="error-message" style="color: #E74C3C;">
          {{ showSizeError ? 'Please select a size.' : '' }}
        </h3>

        <h3 v-if="showStockError" class="error-message" style="color: #E74C3C;">
          {{ showStockError ? 'Not enough stock.' : '' }}
        </h3>
        
        <input class="input-addQuantity" type="number" id="quantity" v-model="quantity" min="1" max="99" step="1" required placeholder="Quantity">
        <select class="select-addSize" id="dropdown" v-model="selectedSize" required>
          <option value="" disabled selected>Size</option>
          <option v-for="size in selectedProduct.sizes" :key="size" :value="size">{{ size }}</option>
        </select>

        <!-- Add to Cart Button -->
        <button class="button-addToCart" @click="addToCartWithQuantity">
          <i class="fa-solid fa-cart-plus"></i> Add to cart
        </button>

        <!-- Product Details -->
        <h3>Product Details <i class="fa fa-indent"></i></h3>
        <br>
        <p>{{ selectedProduct.description }}</p>
      </div>
    </div>

    <!-- Tab Headers for Product Reviews and Submit Review -->
    <ul class="tab-headers">
      <button class="button-productReviews" @click="activeTab = 'productReviews'" :class="{ 'active-tab-button': activeTab === 'productReviews' }">Product Reviews</button>
      <button class="button-submitReview" @click="activeTab = 'submitReview'" :class="{ 'active-tab-button': activeTab === 'submitReview' }">Submit Review</button>
    </ul>

    <!-- Tab Content for Product Reviews -->
    <div class="tab-content" v-if="activeTab === 'productReviews'">
      <div class="product-reviews">
        <h2>Product Reviews</h2>
        <ul>
          <!-- Display Product Reviews -->
          <li v-for="(review, index) in selectedProduct.reviews" :key="index">
            <div class="star-rating">
              <font-awesome-icon v-for="i in 5" :key="i" :icon="getStarIcon(i, review.rating)" :style="{ color: getColorForRating(review.rating) }" />
            </div>
            <h4>{{ review.name }} says:</h4>
            <small>{{ review.review }}</small>
          </li>
        </ul>
      </div>
    </div>

    <!-- Tab Content for Submit Review -->
    <div class="tab-content" v-else-if="activeTab === 'submitReview'">
      <div class="review-form">
        <h3>Leave a Review!</h3>
        <!-- Review Submission Form -->
        <form @submit.prevent="submitReview">
          <input class="review-form-name" type="text" id="name" v-model="newReview.name" required placeholder="Name">
          <input class="review-form-rating" type="number" id="rating" v-model="newReview.rating" min="0.5" max="5" step="0.5" required placeholder="Rating">
          <textarea class="review-form-review" id="review" v-model="newReview.review" required placeholder="Write your review here"></textarea>
          <br>
          <button type="submit"><i class="fa-regular fa-square-check"></i> Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  // Import necessary components and libraries
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { defineComponent } from 'vue';

  // Define the component
  export default defineComponent({
    name: 'ProductDetails',
    data() {
      // Local data for managing the active tab
      return {
        activeTab: 'productReviews', // Set the default active tab to 'productReviews'
      };
    },
    methods: {
      // Method to toggle between tabs
      toggleTab(tabName) {
        this.activeTab = tabName; // Update the active tab when toggling
      },
    },
  });
</script>

<script setup>
  // Import necessary functions and libraries
  import { computed, ref, onMounted } from 'vue';
  import { productsStore } from '@/stores/products';
  import { useRoute, useRouter } from 'vue-router';
  import { EventBus } from '../event-bus';

  // Initialize variables and retrieve instances
  const store = productsStore();
  const route = useRoute();
  const router = useRouter();

  // Define refs for reactive data
  const quantity = ref();
  const selectedSize = ref('');

  const showQuantityError = ref(false);
  const showSizeError = ref(false);
  const showStockError = ref(false);

  const activeTab = ref('productReviews');

  // Set up event listener on component mount
  onMounted(() => {
    // Listen for the 'productClicked' event
    EventBus.$on('productClicked', (message) => {
      // Log the message to the console
      console.log(message);
    });
  });

 // Define function to add selected product to cart with specified quantity
const addToCartWithQuantity = () => {
  // Extract quantity, selected size, and stock values
  const quantityValue = parseInt(quantity.value);
  const selectedSizeValue = selectedSize.value;
  const availableStock = selectedProduct.value.stock;

  // Validate quantity and size values
  showQuantityError.value = !quantityValue || isNaN(quantityValue);
  showSizeError.value = !selectedSizeValue || selectedSizeValue === '';

  // Check if the requested quantity exceeds the available stock
  showStockError.value = quantityValue > availableStock;

  // If there are errors, exit the function
  if (showQuantityError.value || showSizeError.value || showStockError.value) {
    return;
  }

  // Clear the stock error flag if the quantity is within the available stock
  showStockError.value = false;

  const cartItem = {
    ...selectedProduct.value,
    size: selectedSizeValue,
    quantity: quantityValue,
    defaultProductId: selectedProduct.value.id, // Store the default ID
    id: selectedProduct.value.id + selectedSizeValue,
  };

  const existingCartItemIndex = store.cart.findIndex((item) => item.id === cartItem.id);

  if (existingCartItemIndex !== -1) {
    store.cart[existingCartItemIndex].quantity += quantityValue;
  } else {
    for (let i = 0; i < quantityValue; i++) {
      store.addToCart(cartItem);
    }
  }

  // Navigate to the cart view
  router.push({ name: 'CartView' });
};

  // Define function to get star icon based on position and rating
  const getStarIcon = (position, rating) => {
    if (position <= rating) {
      return 'fa-solid fa-star';
    } else if (position === Math.ceil(rating)) {
      return 'fa-solid fa-star-half-alt';
    } else {
      return 'fa-regular fa-star';
    }
  };

  // Define computed property for the selected product based on route parameters
  const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === Number(route.params.id));
  });

  // Define ref for storing new review data
  const newReview = ref({
    name: '',
    rating: '',
    review: '',
  });

  // Define function to get color for rating
  const getColorForRating = (rating) => {
    if (rating <= 2) {
      return 'red';
    } else if (rating <= 3) {
      return 'orange';
    } else if (rating <= 5) {
      return 'gold';
    } else {
      return 'gray';
    }
  };

  // Define function to submit a new review
  const submitReview = () => {
    if (newReview.value.name && newReview.value.rating && newReview.value.review) {
      const rating = parseFloat(newReview.value.rating);

      const review = {
        name: newReview.value.name,
        rating: rating,
        review: newReview.value.review,
      };

      // Add the new review to the selected product's reviews array
      selectedProduct.value.reviews.push(review);

      // Reset the new review data
      newReview.value = {
        name: '',
        rating: '',
        review: '',
      };

      // Switch to the 'productReviews' tab after submitting the review
      activeTab.value = 'productReviews';
    } else {
      // Handle form validation errors (e.g., display an error message)
    }
  };
</script>

<style scoped>

.tab-content, .tab-headers {
  display: flex; 
  align-items: center; 
  justify-content: center;
  text-align: center;
}

.fa-crown {
  color: #ffd700;
  font-size: 25px;
  vertical-align: top;
  position: relative;
  cursor: pointer;
}

.button-addToCart {
  width: 40%;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.input-addQuantity {
  border: 1px solid black;
  border-radius: 5px;
  width: 20%;
}

.select-addSize {
  border: 1px solid black;
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 5px;
  width: 35%;
}

.product-reviews ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.product-reviews li {
  margin-bottom: 10px;
}

.product-reviews {
  max-width: 500px;
  margin: 20px;
}

.review-form {
  border: 1px solid black;
  margin: 20px;
  padding: 8px;
  border-radius: 5px;
  background-color: #FBEEC1
}

.review-form h3 {
  color: black;
}

.button-productReviews, .button-submitReview {
  margin: 0;
  background-color: white;
  color: #BC986A;
  margin-bottom: 5px;
}

.button-productReviews:hover, .button-submitReview:hover {
  background-color: #BC986A;
  color: white;
}

.active-tab-button {
  background-color: #BC986A; 
  color: white; 
}

.review-form input {
  border: 1px solid black;
  margin: 5px;
  padding: 8px;
  border-radius: 5px;
}

.review-form-name, .review-form-rating {
  width: 50%;
}

.review-form-review {
  width: 80%;
  height: 150px; 
  vertical-align: top; 
  margin-top: 5px;
}

.review-form button {
  width: 40%;
}

.row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.col {
    flex-basis: 50%;
    min-width: 300px;
}

.col img {
  width: 80%;
  cursor: pointer;
  border-radius: 15px;
  margin-bottom: 12px;
}

.col h1 {
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
}

.small-container {
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}

.single-product {
    margin-top: 80px;
}

.single-product .col {
    padding: 20px;
}

.single-product h4{
    margin: 20px 0;
    font-size: 22px;
    font-weight: bold;
}

.single-product input {
    width: 100px;
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
    margin-right: 10px;
    border: 1px solid #BC986A;
}

.single-product select {
    width: 100px;
    height: 40px;
    padding-left: 10px;
    font-size: 20px;
    margin-right: 10px;
    border: 1px solid #BC986A;
}

</style>