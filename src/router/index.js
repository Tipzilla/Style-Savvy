import { createRouter, createWebHistory } from 'vue-router';

// Import the Vue components
import Catalog from "@/views/Catalog.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Cart from "@/views/Cart.vue";

// Create the router instance
const router = createRouter({
  // Specify the history mode and base URL
  history: createWebHistory(import.meta.env.BASE_URL),
  // Define the routes
  routes: [
    {
      // Root path
      path: '/',
      // Name of the route
      name: 'Catalog',
      // Component to render when this route is matched
      component: Catalog
    },
    {
      // Dynamic route with a parameter (product ID)
      path: '/product/:id',
      // Name of the route
      name: 'ProductView',
      // Component to render when this route is matched
      component: ProductDetail
    },
    {
      // Cart view path
      path: '/cart',
      // Name of the route
      name: 'CartView',
      // Component to render when this route is matched
      component: Cart
    }
  ]
});

// Export the router instance
export default router;