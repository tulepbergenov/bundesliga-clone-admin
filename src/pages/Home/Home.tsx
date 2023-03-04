import { withAuth } from "@/hocs";

const Home = () => {
  return (
    <section>
      <h1>Home Page</h1>
    </section>
  );
};

export default withAuth(Home);
