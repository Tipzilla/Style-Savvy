<template>
<header>
    <img src="../public/assets/images/logo.png" width="200" @click="router.push({ name: 'Catalog'})">
    <div class="cart">
      <i class="fa fa-shopping-cart" @click="router.push({ name: 'CartView' })"></i> {{ totalCartQuantity }}
    </div>
</header>
  <Main>
    <RouterView />
  </Main>
  <footer>
    <div class="footer">
        <p><i class="fa-regular fa-copyright"></i> 2023 Style Supreme. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
  import { computed } from 'vue'; 
  import { useRouter } from 'vue-router';
  import { productsStore } from "@/stores/products";

  const router = useRouter();
  const store = productsStore();

  const totalCartQuantity = computed(() => {
    return store.cart.reduce((total, item) => total + item.quantity, 0);
  });
</script>

<style scoped>
header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .cart {
  text-align: end;
  font-weight: bold;
  font-size: 48px;
  background-color: #FBEEC1;
}

.fa {
  cursor: pointer;
}

.footer {
  text-align: center;
  padding: 10px;
}
</style>