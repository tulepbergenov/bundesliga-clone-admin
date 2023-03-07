import { FootballIcon, NewsIcon, UsersIcon } from "@/assets/imgs/icons";

export const SIDEBAR_NAV_LINKS = [
  {
    path: "/clubs",
    name: "Clubs",
    icon: <FootballIcon className="h-auto w-full" />,
  },
  {
    path: "/footballers",
    name: "Footballers",
    icon: <UsersIcon className="h-auto w-full" />,
  },
  { path: "/news", name: "News", icon: <NewsIcon className="h-auto w-full" /> },
];
