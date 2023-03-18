import { Footer, Header, Sidebar } from "@/components";
import { withAuth, withHome } from "@/hocs";
import { Outlet } from "react-router-dom";

export const AppLayout = withHome(
  withAuth(() => {
    return (
      <>
        <Header />
        <div className="container grid flex-auto grid-cols-[240px_1fr] grid-rows-[1fr_auto] gap-x-[50px]">
          <Sidebar />
          <main>
            <section>
              <Outlet />
            </section>
          </main>
          <Footer className="col-start-2 col-end-3" />
        </div>
      </>
    );
  })
);
