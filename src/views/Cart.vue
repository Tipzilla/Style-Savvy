<template>
  <button class="button-backToCatalog" @click="router.push({ name: 'Catalog'})">
    <i class="fa-solid fa-arrow-left"></i> Back to Catalog
  </button>
  <div v-if="!store.cart.length" style="text-align: center;">
    <h1 class="empty-cart"></h1>
  </div>
  <div class="cart-items" v-else>
    <div class="cart-item" v-for="item in store.cart" :key="item.id">
      <div class="item-details">
        <img :src="item.thumbnail" alt="" @click="goToProductPage(item.defaultProductId)">
        <span class="item-name" @click="goToProductPage(item.defaultProductId)">{{ item.name }}</span>
        <label>Quantity: <input type="number" v-model="item.quantity" @input="updateQuantity(item)" min="1"></label>
        <span>Size: {{ item.size }}</span>
        <span>Price: ${{ item.price }}</span>
        <span>Shipping Cost: ${{ item.shippingCost }}</span>
        <button @click="removeFromCart(item.id)"><i class="fa-solid fa-x"></i> Remove</button>
      </div>
    </div>
  </div>
  <div class="total-cost" v-if="store.cart.length">
    <p>Cost: ${{ (store.totalCartCost - gstAmount).toFixed(2) }}</p>
    <p>Shipping Cost: ${{ totalShippingCost.toFixed(2) }}</p>
    <p>GST (15%): ${{ gstAmount }}</p>
    <p>Total Cost: ${{ (totalShippingCost + store.totalCartCost).toFixed(2) }}</p>
  </div>
</template>
  
<script>
export default {
  name: 'shopping-cart', 
}
</script>

<script setup>
  import { productsStore } from "../stores/products";
  import { useRouter } from "vue-router";
  import { computed } from 'vue';
  
  const router = useRouter();
  const store = productsStore();
  
  const goToProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id } });
};

  const gstAmount = computed(() => {
    const totalCost = store.totalCartCost + store.totalShippingCost;
    return (totalCost * 0.15).toFixed(2);
  });
  
  const removeFromCart = (id) => {
    store.removeFromCart(id);
  };
  
  const totalShippingCost = computed(() => {
    let shippingCost = 0;
  
    for (const item of store.cart) {
      shippingCost += item.shippingCost * item.quantity;
    }
  
    return shippingCost;
  });
  
  const updateQuantity = (item) => {
    if (item.quantity < 1) {
      item.quantity = 1;
    }
  };
</script>
  
<style scoped>

.empty-cart {
  padding: 10px;
}
.empty-cart::before {
  content: "Empty Cart ..."; 
  display: block; 
  transition: content 0.3s; 
}

.empty-cart:hover::before {
  content: ":^("; 
}

.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}
  
.item-details img {
  width: 15%;
  border-radius: 10px;
}
.item-name:hover {
  text-decoration: underline;
  cursor: pointer;
}

input[type="number"] {
  width: 50px;
}
  
button {
  width: 10%;
}
  
.total-cost {
  display: flex;
  justify-content: flex-end;
  flex-direction: column; 
  padding: 20px;
  border-top: 5px solid #FBEEC1;
  text-align: end;
}

input {
  border: 1px solid black;
  margin: 5px;
  padding: 8px;
  border-radius: 5px;
  width: 20%;
}

</style>