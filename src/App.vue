<template>
    <!-- Header -->
    <header class="header">
      <div class="container">
        <div class="navbar">
          <div class="logo">
            <!-- Logo with a link to the Catalog page -->
            <img src="../assets/images/logo.png" width="200" @click="router.push({ name: 'Catalog'})">
          </div>
          <nav>
            <!-- Navigation menu -->
            <ul id="MenuItems">
              <li @click="router.push({ name: 'Catalog'})"><a href="">Home</a></li>
              <li><a href="">Products</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Account</a></li>
            </ul>
          </nav>
          <!-- Shopping cart icon with the total cart quantity -->
          <i class="fa fa-shopping-cart" @click="router.push({ name: 'CartView' })"></i>{{ totalCartQuantity }}
        </div>
      </div>
    </header>
  
    <!-- Main Content -->
    <Main>
      <RouterView />
    </Main>
  
    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download the App for Android and IOS mobile phone.</p>
            <div class="app-logo">
              <!-- App store logos -->
              <img src="../assets/images/play-store.png">
              <img src="../assets/images/app-store.png">
            </div>
          </div>
          <div class="footer-col-2">
            <!-- Logo with a link to the Catalog page -->
            <img src="../assets/images/logo.png" width="200" @click="router.push({ name: 'Catalog'})">
          </div>
          <div class="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <!-- List of useful links -->
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div class="footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <!-- Social media links -->
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <hr>
        <p class="copyright">
          <!-- Copyright information -->
          <i class="fa-regular fa-copyright"></i> <span id="copyright-year"></span> Style Supreme. All Rights Reserved.
        </p>
      </div>
    </footer>
 </template>

<script setup>
  import { computed } from 'vue'; 
  import { useRouter } from 'vue-router';
  import { productsStore } from "@/stores/products";

  const router = useRouter();
  const store = productsStore();

  // Compute the total quantity of items in the cart
  const totalCartQuantity = computed(() => {
    return store.cart.reduce((total, item) => total + item.quantity, 0);
  });
</script>

<style scoped>
header i {
  font-size: 20px;
  margin-right: 5px;
  cursor: pointer;
}

.navbar {
    display: flex;
    align-items: center;
    padding: 20px;
}

nav {
    flex: 1;
    text-align: right;
}

nav ul {
    display: inline-block;
    list-style-type: none;
}

nav ul li {
    display: inline-block;
    margin-right: 20px;
}

a {
    text-decoration: none;
    color: #555;
}

p {
    color: #555;
}

.container {
    max-width: 1300px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
}

.row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}

.footer {
    background: #FBEEC1;
    color: black;
    font-size: 14px;
    padding: 60px 0 20px;
}

.footer p {
    color: black;
}

.footer h3 {
    color: black;
    margin-bottom: 20px;
}

.footer-col-1, .footer-col-2, .footer-col-3, .footer-col-4 {
    min-width: 250px;
    margin-bottom: 20px;
}

.footer-col-1 {
    flex-basis: 30%;
}

.footer-col-2 {
    flex: 1;
    text-align: center;
}

.footer-col-2 img {
    width: 180px;
    margin-bottom: 20px;
}

.footer-col-3, .footer-col-4 {
    flex-basis: 12%;
    text-align: center;
}

ul {
    list-style-type: none;
}

.app-logo {
    margin-top: 20px;
}

.app-logo img {
    width: 140px;
}

.footer hr {
    border: none;
    background: black;
    height: 1px;
    margin: 20px 0;
}

.copyright {
    text-align: center;
}

</style>