import Checkbox from "../components/common/Form/CheckBox/CheckBox";
import Home from "../layouts/home";

// Top Menu Paths
export const TopMenusRoutes = [
  {
    path: "/",
    exact: true,
    element: <Home />
  },
  {
    path: "/cart",
    exact: true,
    element: <Checkbox />
  },
  {
    path: "/checkout",
    exact: true,
    element: <Checkbox />
  },
  {
    path: "/payment",
    exact: true,
    element: <Checkbox />
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