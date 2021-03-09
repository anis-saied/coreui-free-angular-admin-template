import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    name: "Tableau de bord",
    url: "/dashboard",
    icon: "icon-speedometer",
  },
  {
    title: true,
    name: "Elèves",
  },
  {
    name: "Nouveau",
    url: "/students/new",
    icon: "cil-user-plus",
  },
  {
    name: "Rechercher",
    url: "/students/list",
    icon: "cil-search",
  },
  {
    name: "Paiements",
    url: "/icons/coreui-icons",
    icon: "cil-dollar",
  },
  {
    title: true,
    name: "Administration",
  },
  {
    name: "Enseignants",
    url: "/base",
    icon: "icon-puzzle",
  },
  {
    name: "Cours",
    url: "/buttons",
    icon: "icon-cursor",
  },

  {
    divider: true,
  },
  {
    title: true,
    name: "Application",
  },
  {
    name: "Réglages",
    url: "/settings",
    icon: "icon-settings",
  },
];
