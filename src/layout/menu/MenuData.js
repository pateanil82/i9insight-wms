const menu = [
  {
    icon: "home",
    text: "Dashboard",
    link: "/",
  },
  {
    icon: "home-alt",
    text: "Warehouse",
    link: "/warehouse",
  },
  {
    icon: "truck",
    text: "Transaction",
    active: false,
    subMenu: [
      {
        text: "Inward",
        link: "/transaction/inward",
      },
      {
        text: "Outward",
        link: "/transaction/outward",
      },
    ],
  },
];
export default menu;
