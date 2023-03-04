import { Footer, Header, Sidebar } from "@/components";
import { withGetUser } from "@/hocs";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="container grid flex-auto grid-cols-[240px_1fr] grid-rows-[auto_1fr_auto] gap-[32px_48px]">
      <Header className="col-span-2" />
      <Sidebar className="col-start-1 col-end-2" />
      <main className="col-start-2 col-end-3">
        <Outlet />
      </main>
      <Footer className="col-start-2 col-end-3" />
    </div>
  );
};

export default withGetUser(AppLayout);
