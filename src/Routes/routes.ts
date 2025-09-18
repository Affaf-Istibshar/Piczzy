// src/navigation/routes.ts

import CartScreen from "../Pages/Cart/cartView";
import FavoriteScreen from "../Pages/Favorites/favoriteScreen";
import HomeScreen from "../Pages/Home/homeScreen";
import ProfileScreen from "../Pages/Profile/profileScreen";
import SearchScreen from "../Pages/Search/exploreScreen";



export const ROUTES = {
    HOME: "Home",
    CART: "Cart",
    FAVORITE: "Favorite",
    PROFILE: "Profile",
    SEARCH: "Search",
};

export const TabRoutes = [
    {
        name: ROUTES.HOME,
        component: HomeScreen,
        icon: { active: "home", inactive: "home-outline" },
    },
    {
        name: ROUTES.CART,
        component: CartScreen,
        icon: { active: "cart", inactive: "cart-outline" },
    },
    {
        name: ROUTES.FAVORITE,
        component: FavoriteScreen,
        icon: { active: "heart", inactive: "heart-outline" },
    },
    {
        name: ROUTES.SEARCH,
        component: SearchScreen,
        icon: { active: "search", inactive: "search-outline" },
    },
    {
        name: ROUTES.PROFILE,
        component: ProfileScreen,
        icon: { active: "person", inactive: "person-outline" },
    },
];
