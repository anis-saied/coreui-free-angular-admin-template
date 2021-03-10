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
    title: true,
    name: "Administration",
  },
  {
    name: "Paiements",
    url: "/payments",
    icon: "cil-dollar",
  },
  {
    name: "Enseignants",
    url: "/teachers",
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
