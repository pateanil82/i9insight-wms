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
        link: "/transactions/inward",
      },
      {
        text: "Pick list",
        link: "/transactions/pick-list",
      },
    ],
  },
  {
    icon: "report",
    text: "Report",
    link: "/report",
  },
];
export default menu;
