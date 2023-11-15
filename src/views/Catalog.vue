<template>
  <!-- Container for the catalog section -->
  <div class="small-container">
    <!-- Title for the catalog section -->
    <h2 class="title">Catalog</h2>

    <!-- Row to display products -->
    <div class="row">
      <!-- Iterating over each product in the store -->
      <div class="col" v-for="product in store.products" :key="product.id" @click="goToProductPage(product.id)">
        <!-- Product thumbnail -->
        <img :src="product.thumbnail">

        <!-- Product name -->
        <h4>{{ product.name }}</h4>

        <!-- Star rating for the product -->
        <div class="star-rating">
          <!-- Iterating to display star icons based on the average rating -->
          <font-awesome-icon v-for="i in 5" :key="i" :icon="getStarIcon(i, getProductAverageRating(product))" :style="{ color: getColorForRating(getProductAverageRating(product)) }" />
          
          <!-- Displaying the total number of reviews -->
          <p class="total-reviews">{{ product.reviews.length }}</p>
        </div>

        <!-- Product price -->
        <p>${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  // Component name
  name: 'CatalogView',

  // Method to calculate the average rating of a product
  methods: {
    getProductAverageRating(product) {
      // Check if there are reviews for the product
      if (product.reviews && product.reviews.length > 0) {
        // Calculate the total rating by summing up individual ratings
        const totalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0);
        
        // Calculate and return the average rating rounded to one decimal place
        return (totalRating / product.reviews.length).toFixed(1);
      }
      
      // Return 'N/A' if there are no reviews for the product
      return 'N/A';
    },
  },

  // Components used in the template
  components: {
    FontAwesomeIcon,
  },
})
</script>

<script setup>
import { onMounted } from 'vue';
import { productsStore } from "@/stores/products";
import { useRouter } from "vue-router";
import { EventBus } from '../event-bus'; // Import EventBus

// Access the products store and router
const store = productsStore();
const router = useRouter();

// Function to get the appropriate star icon based on position and rating
const getStarIcon = (position, rating) => {
  if (position <= rating) {
    return 'fa-solid fa-star';
  } else if (position === Math.ceil(rating)) {
    return 'fa-solid fa-star-half-alt';
  } else {
    return 'fa-regular fa-star';
  }
};

// Function to navigate to the product page and emit an event
const goToProductPage = (id) => {
  // Emit an event with a message
  EventBus.$emit('productClicked', `Product ${id} was clicked`);

  // Navigate to the product page
  router.push({ name: 'ProductView', params: { id } });
};

// Function to calculate the average rating of a product
const getProductAverageRating = (product) => {
  if (product.reviews && product.reviews.length > 0) {
    const totalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / product.reviews.length).toFixed(1);
  }
  return 'N/A';
};

// Function to get color based on rating for styling
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

// Fetch products from the database on component mount
onMounted(() => {
  store.fetchProductsFromDB();
});
</script>

<style scoped>

img {
  border-radius: 15px;
}

.star-rating {
  display: flex;
  align-items: center; 
  margin-bottom: 5px;
}

.total-reviews {
  font-size: 12px; 
  margin-left: 4px; 
}

.star-rating font-awesome-icon {
  font-size: 1.2rem; 
  color: #ffd700; 
  margin-right: 2px; 
}

.small-container {
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}

.title {
    text-align: center;
    margin: 0 auto 80px;
    position: relative;
    line-height: 60px;
}

.title::after {
    content: '';
    background: #FBEEC1;
    width: 80px;
    height: 5px;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.col {
    flex-basis: 25%;
    padding: 10px;
    min-width: 200px;
    margin-bottom: 50px;
    transition: transform 0.5s;
}
.col img {
    width: 100%;
}

</style>