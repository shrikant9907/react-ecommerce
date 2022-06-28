import CategoryPage from "../layouts/CategoryPage";
import CheckoutPage from "../layouts/CheckoutPage";
import HomePage from "../layouts/HomePage";
import PageNotFound from "../layouts/PageNotFound";
import ShopPage from "../layouts/ShopPage";

// Top Menu Paths
export const TopMenusRoutes = [
  {
    path: "/cart",
    exact: true,
    element: <CheckoutPage />
  },
  {
    path: "/checkout",
    exact: true,
    element: <CheckoutPage />
  },
  {
    path: "/payment",
    exact: true,
    element: <CheckoutPage />
  },
  {
    path: "/shop",
    exact: true,
    element: <ShopPage />
  },
  {
    path: "/category/:category/:subcategory",
    exact: true,
    element: <CategoryPage />
  },
  {
    path: "/category/:category/",
    exact: true,
    element: <CategoryPage />
  },
  {
    path: "/",
    exact: true,
    element: <HomePage />
  },
  {
    path: "*",
    element: <PageNotFound />
  },
]

// Top Menu Links 
export const TopMenusLinks = [
  {
    name: 'Home',
    to: '/',
    show: true
  },
  {
    name: 'Checkout',
    to: '/checkout',
    show: true
  },
  {
    name: 'Cart',
    to: '/cart',
    show: true
  },
  {
    name: 'Payment',
    to: '/payment',
    show: true
  },
]