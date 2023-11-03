<template>
  <button @click="router.push({ name: 'Catalog'})"><i class="fa-solid fa-arrow-left"></i> Back to Catalog</button>
  <div class="product">
    <img class="product-image" :src="selectedProduct.thumbnail" alt="">
    <div class="product-details">
      <h3>{{ selectedProduct.name }}</h3>
      <p>{{ selectedProduct.description }}</p>
      <h4>Price: ${{ selectedProduct.price }}</h4>
      <p v-if="showQuantityError" class="error-message" style="color: #E74C3C;">Please select a quantity.</p>
      <p v-if="showSizeError" class="error-message" style="color: #E74C3C;">Please select a size.</p>
      <input class="input-addQuantity" type="number" id="quantity" v-model="quantity" min="1" max="99" step="1" required placeholder="Quantity">
      <select class="select-addSize" id="dropdown" v-model="selectedSize" required>
        <option value="" disabled selected>Select Size</option>
        <option v-for="size in selectedProduct.sizes" :key="size" :value="size">{{ size }}</option>
      </select>
      <button class="button-addToCart" @click="addToCartWithQuantity">
        <i class="fa-solid fa-cart-plus"></i> Add to cart
      </button>
    <div class="tab-container">
      <ul class="tab-headers">
        <button class="button-productReviews" @click="activeTab = 'productReviews'" :class="{ 'active-tab-button': activeTab === 'productReviews' }">Product Reviews</button>
        <button class="button-submitReview" @click="activeTab = 'submitReview'" :class="{ 'active-tab-button': activeTab === 'submitReview' }">Submit Review</button>
      </ul>
      <div class="tab-content" v-if="activeTab === 'productReviews'">
        <div class="product-reviews">
          <h2>Product Reviews</h2>
          <ul>
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
    <div class="tab-content" v-else-if="activeTab === 'submitReview'">
      <div class="review-form">
        <h3>Leave a Review!</h3>
        <form @submit.prevent="submitReview">
          <input class="review-form-name" type="text" id="name" v-model="newReview.name" required placeholder="Name">
          <input class="review-form-rating" type="number" id="rating" v-model="newReview.rating" min="0.5" max="5" step="0.5" required placeholder="Rating (1-5)">
          <textarea class="review-form-review" id="review" v-model="newReview.review" required placeholder="Write your review here"></textarea>
          <br>
          <button type="submit"><i class="fa-regular fa-square-check"></i> Submit</button>
        </form>
      </div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ProductDetails',
    data() {
      return {
        activeTab: 'productReviews', // Set the default active tab
      };
    },
    methods: {
      toggleTab(tabName) {
        this.activeTab = tabName;
      },
    },
  });
</script>

<script setup>
import { computed, ref } from 'vue';
import { productsStore } from '@/stores/products';
import { useRoute, useRouter } from 'vue-router';

const store = productsStore();
const route = useRoute();
const router = useRouter();

const quantity = ref(); 
const selectedSize = ref(''); 

const showQuantityError = ref(false);
const showSizeError = ref(false);

const activeTab = ref('productReviews');

const addToCartWithQuantity = () => {
  const quantityValue = parseInt(quantity.value);
  const selectedSizeValue = selectedSize.value;

  if (!quantityValue || isNaN(quantityValue)) {
    showQuantityError.value = true;
  } else {
    showQuantityError.value = false;
  }

  if (!selectedSizeValue || selectedSizeValue === "") {
    showSizeError.value = true;
  } else {
    showSizeError.value = false;
  }

  if (quantityValue && selectedSizeValue !== "") {
    const cartItem = {
      ...selectedProduct.value,
      size: selectedSizeValue,
      quantity: quantityValue, 
      defaultProductId: selectedProduct.value.id, // Store the default ID
      id: selectedProduct.value.id + selectedSizeValue,
    };

    const existingCartItemIndex = store.cart.findIndex(
      (item) => item.id === cartItem.id
    );

    if (existingCartItemIndex !== -1) {
      store.cart[existingCartItemIndex].quantity += quantityValue; 
    } 
    else {
      for (let i = 0; i < quantityValue; i++) {
        store.addToCart(cartItem);
      }
    }
    
    router.push({ name: 'CartView' });
  }
};
    const getStarIcon = (position, rating) => {
        if (position <= rating) {
            return 'fa-solid fa-star';
        } else if (position === Math.ceil(rating)) {
            return 'fa-solid fa-star-half-alt';
        } else {
            return 'fa-regular fa-star';
        }
    };
    const selectedProduct = computed(() => {
        return store.products.find((item) => item.id === Number(route.params.id))
    });
    const newReview = ref({
        name: '',
        rating: '',
        review: ''
});

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

const submitReview = () => {
  if (newReview.value.name && newReview.value.rating && newReview.value.review) {
    const rating = parseFloat(newReview.value.rating);

    const review = {
      name: newReview.value.name,
      rating: rating, 
      review: newReview.value.review,
    };

    selectedProduct.value.reviews.push(review);

    newReview.value = {
      name: '',
      rating: '',
      review: '',
    };

    activeTab.value = 'productReviews';


  } else {
    // Handle form validation errors (e.g., display an error message)
  }
};

</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  padding: 16px;
  text-align: center; 
}

.product-image {
  width: 20%;
  cursor: pointer;
  border-radius: 15px;
  margin-bottom: 12px;
}

.product h4 {
  margin: 5px 0 5px 0;
}

.product-details {
  max-width: 20%;
}

.button-addToCart {
  width: 40%;
}

.input-addQuantity {
  border: 1px solid black;
  margin: 5px;
  padding: 8px;
  border-radius: 5px;
  width: 20%;
}

.select-addSize {
  border: 1px solid black;
  margin: 5px;
  padding: 8px;
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

.review-form {
  border: 1px solid black;
  margin: 5px;
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

textarea::placeholder {
  font-family: "Roboto", fallback-font, sans-serif; 
}

.review-form button {
  width: 40%;
}

</style>