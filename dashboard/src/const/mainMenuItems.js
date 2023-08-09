import MainMenuHome from "../assets/img/main-menu-home.svg";
import MainMenuActivity from "../assets/img/main-menu-activity.svg";
import MainMenuActivityActive from "../assets/img/main-menu-activity-active.svg";
import MainMenuHomeActive from "../assets/img/main-menu-home-active.svg";
import MainMenuOrders from "../assets/img/main-menu-orders.svg";
import MainMenuOrdersActive from "../assets/img/main-menu-orders-active.svg";

export const mainMenuItems = [
  {
    icon: MainMenuHome,
    activeIcon: MainMenuHomeActive,
    text: "Dashboard",
    link: "/main/dashboard",
  },
  {
    icon: MainMenuOrders,
    activeIcon: MainMenuOrdersActive,
    text: "Orders",
    link: "/main/orders",
  },
  {
    icon: MainMenuActivity,
    activeIcon: MainMenuActivityActive,
    text: "Activity",
    link: "/main/activity",
  },
];
