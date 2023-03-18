import { FootballIcon, NewsIcon, UsersIcon } from "@/assets/imgs/icons";

export const NAV_LINKS = [
  {
    path: "/clubs",
    name: "Clubs",
    icon: (
      <FootballIcon className="h-auto w-full transition-colors duration-300 ease-in-out" />
    ),
  },
  {
    path: "/footballers",
    name: "Footballers",
    icon: (
      <UsersIcon className="h-auto w-full transition-colors duration-300 ease-in-out" />
    ),
  },
  {
    path: "/news",
    name: "News",
    icon: (
      <NewsIcon className="h-auto w-full transition-colors duration-300 ease-in-out" />
    ),
  },
];
