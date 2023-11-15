<template>
  <!-- Cart heading with the total quantity of items in the cart -->
  <h1 style="text-align: center;">Cart ({{ totalCartQuantity }})</h1>

  <!-- Displayed when the cart is empty -->
  <div v-if="!store.cart.length" style="text-align: center;">
    <!-- Empty cart message -->
    <h2>Your Shopping Cart is currently empty</h2>
    
    <!-- Instructions to add products to the cart -->
    <h3>To add products to your cart, simply browse for a product and click the add to cart button</h3>

    <!-- Button to navigate back to the catalog -->
    <button class="button-backToCatalog" @click="router.push({ name: 'Catalog'})">
      <!-- Icon and text for navigation back to the catalog -->
      <i class="fa-solid fa-arrow-left"></i> Back to Catalog
    </button>
  </div>

  <div class="small-container cart-page">
  <!-- Cart table header, displayed only if there are items in the cart -->
  <table>
    <tr v-if="store.cart.length">
      <!-- Table header columns -->
      <th>Product</th>
      <th>Quantity</th>
      <th>Size</th>
      <th>Shipping</th>
      <th>Premium?</th>
      <th>Subtotal</th>
    </tr>

    <!-- Table rows for each item in the cart -->
    <tr v-for="item in store.cart" :key="item.id">
      <td>
        <!-- Cart item details -->
        <div class="cart-info">
          <!-- Product image, clickable to go to the product page -->
          <img :src="item.thumbnail" alt="" @click="goToProductPage(item.defaultProductId)">
          <div>
            <!-- Product name, clickable to go to the product page -->
            <p class="item-name" @click="goToProductPage(item.defaultProductId)">{{ item.name }}</p>
            <!-- Price and remove link -->
            <p>Price: ${{ item.price }}</p>
            <a @click="removeFromCart(item.id)"><i class="fa-solid fa-x"></i> Remove</a>
          </div>
        </div>
      </td>

      <!-- Quantity input -->
      <td><input type="number" v-model="item.quantity" @input="updateQuantity(item)" min="1"></td>

      <!-- Displayed product information -->
      <td>{{ item.size }}</td>
      <td>{{ item.premium ? 'Free' : '$2.99' }}</td>
      <td>{{ item.premium ? 'Yes' : 'No' }}</td>

      <!-- Subtotal for the item -->
      <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
    </tr>
  </table>

  <!-- Total price section, displayed only if there are items in the cart -->
  <div class="total-price" v-if="store.cart.length">
    <!-- Table for displaying subtotal, shipping, GST, and total -->
    <table>
      <tr>
        <td>Subtotal</td>
        <td>${{ (store.totalCartCost - gstAmount).toFixed(2) }}</td>
      </tr>
      <tr>
        <td>Shipping</td>
        <td>${{ totalShippingCost.toFixed(2) }}</td>
      </tr>
      <tr>
        <td>GST (15%)</td>
        <td>${{ gstAmount }}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>${{ (totalShippingCost + store.totalCartCost).toFixed(2) }}</td>
      </tr>
    </table>
  </div>
</div>

</template>
  
<script>
// Exporting the component with the name 'shopping-cart'
export default {
  name: 'shopping-cart', 
}
</script>

<script setup>
  // Importing necessary dependencies
  import { productsStore } from "../stores/products";
  import { useRouter } from "vue-router";
  import { computed } from 'vue';
  
  // Initializing the router and store using Vue Composition API
  const router = useRouter();
  const store = productsStore();
  
  // Function to navigate to the product page with a given ID
  const goToProductPage = (id) => {
    router.push({ name: 'ProductView', params: { id } });
  };

  // Computed property to calculate the GST amount based on the total cost
  const gstAmount = computed(() => {
    const totalCost = store.totalCartCost + store.totalShippingCost;
    return (totalCost * 0.15).toFixed(2);
  });
  
  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    store.removeFromCart(id);
  };
  
  // Computed property to calculate the total shipping cost for all items in the cart
  const totalShippingCost = computed(() => {
    let shippingCost = 0;
  
    // Iterating through each item in the cart and calculating the total shipping cost
    for (const item of store.cart) {
      shippingCost += item.shippingCost * item.quantity;
    }
  
    return shippingCost;
  });
  
  // Function to update the quantity of an item, ensuring it is at least 1
  const updateQuantity = (item) => {
    if (item.quantity < 1) {
      item.quantity = 1;
    }
  };

  // Computed property to calculate the total quantity of items in the cart
  const totalCartQuantity = computed(() => {
    return store.cart.reduce((total, item) => total + item.quantity, 0);
  });
</script>

  
<style scoped>

.item-name:hover {
  text-decoration: underline;
  cursor: pointer;
}

input {
  border: 1px solid black;
  margin: 5px;
  padding: 8px;
  border-radius: 5px;
  width: 20%;
}

.small-container {
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
    margin-top: 5px;
}

.cart-info a {
  cursor: pointer;
}

table {
    width: 100%;
    border-collapse: collapse;
}

.cart-info {
    display: flex;
    flex-wrap: wrap;
}

th {
    text-align: left;
    padding: 5px;
    color: black;
    background: #FBEEC1;
}

td {
    padding: 10px 5px;
}

td input {
    width: 40px;
    height: 30px;
    padding: 5px;
}

td a {
    color: #FBEEC1;
    font-size: 12px;
}

td img {
    width: 100px;
    margin-right: 10px;
}

.total-price {
    display: flex;
    justify-content: flex-end;
}

.total-price table {
    border-top: 3px solid #FBEEC1;
    width: 100%;
    max-width: 400px;
}

td:last-child {
    text-align: right;
}

th:last-child {
    text-align: right;
}

</style>