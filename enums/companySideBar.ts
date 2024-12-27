import { sideBarInterFace } from "~/interfaces/global";
const CompanyItems:sideBarInterFace[] = [
  {
    name: "home",
    id: 1,
    path: "/panel/factory/dashboard",
    title: "داشبورد",
    icon: "mdi-chart-bar ",

  },
  {
    name: "orders",
    id: 2,
    path: "/panel/factory/orders",
    title: "اعلام بار ",
    icon: "mdi-truck ",
  },
  {
    name: "remittance",
    id: 2,
    path: "/panel/factory/remittance",
    title: "حواله های جاری",
    icon: "mdi-file",
  },
  {
    name: "waybills",
    id: 3,
    path: "/panel/factory/waybills",
    title: "لیست درخواست بارنامه",
    icon: "mdi-file",
  },
  {
    name: "allOrderSystem",
    id: 2,
    path: "/panel/factory/orders/allOrderSystem",
    title: "سالن اعلام بار",
    icon: "mdi-file",
  },
  {
    name: "tracking",
    id: 2,
    path: "/panel/factory/tracking",
    title: "ردیابی ناوگان",
    icon: "mdi-file",
  },
  {
    name: "carslist",
    id: 6,
    path: "/panel/factory/carslist",
    title: "لیست ناوگان",
    icon: "mdi-file",
  },
];
export { CompanyItems };
