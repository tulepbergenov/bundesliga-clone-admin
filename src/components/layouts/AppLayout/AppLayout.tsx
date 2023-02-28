import { PropsWithChildren } from "react";
import { Footer, Header, Sidebar } from "../../ui";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container grid flex-auto grid-cols-[240px_1fr] grid-rows-[auto_1fr_auto] gap-[32px_48px]">
      <Header className="col-span-2" />
      <Sidebar />
      <main>{children}</main>
      <Footer className="col-start-2 col-end-3" />
    </div>
  );
};
