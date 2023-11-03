<template>
  <div class="products-list">
    <div class="product" v-for="product in store.products" :key="product.id" @click="goToProductPage(product.id)">
      <img :src="product.thumbnail" alt="" width="250">
      <h3>{{ product.name }}</h3>
      <p>{{ product.summary }}</p>
      <h4>Price: ${{ product.price }}</h4>
      <div class="star-rating">
        <font-awesome-icon
          v-for="i in 5"
          :key="i"
          :icon="getStarIcon(i, getProductAverageRating(product))"
          :style="{ color: getColorForRating(getProductAverageRating(product)) }" />
        <p class="total-reviews">{{ product.reviews.length }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  name: 'CatalogView',
  methods: {
    getProductAverageRating(product) {
      if (product.reviews && product.reviews.length > 0) {
        const totalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0);
        return (totalRating / product.reviews.length).toFixed(1); 
      }
      return 'N/A'; 
    },
  },
  components: {
    FontAwesomeIcon,
  },
})
</script>

<script setup>
import { onMounted } from 'vue';
import { productsStore } from "@/stores/products";
import { useRouter } from "vue-router";

const store = productsStore();
const router = useRouter();

const getStarIcon = (position, rating) => {
        if (position <= rating) {
            return 'fa-solid fa-star';
        } else if (position === Math.ceil(rating)) {
            return 'fa-solid fa-star-half-alt';
        } else {
            return 'fa-regular fa-star';
        }
      };

const goToProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id } });
};

const getProductAverageRating = (product) => {
  if (product.reviews && product.reviews.length > 0) {
    const totalRating = product.reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / product.reviews.length).toFixed(1);
  }
  return 'N/A';
};

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

onMounted(() => {
  store.fetchProductsFromDB();
});
</script>

<style scoped>
.products-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.product {
  flex-basis: 15%;
  margin: 8px;
  padding: 16px;
  cursor: pointer;
}

.product p, .product h3 {
  margin-top: 5px;
}

.product img {
  border-radius: 10px;
}

.product h4 {
  margin: 5px 0 5px 0;
}

.star-rating {
  display: flex;
  align-items: center; 
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

</style>