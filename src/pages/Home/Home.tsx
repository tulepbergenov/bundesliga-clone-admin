import { useGetArticles, useGetClubs, useGetFootballers } from "@/api/hooks";
import { FootballIcon, NewsIcon, UsersIcon } from "@/assets/imgs/icons";
import { Spinner } from "@/components";
import { Link } from "react-router-dom";

export const Home = () => {
  const { data: clubs } = useGetClubs();
  const { data: articles } = useGetArticles();
  const { data: footballers } = useGetFootballers();

  return (
    <section>
      <h1 className="sr-only">Bundesliga Admin</h1>
      <ul className="grid auto-rows-[minmax(auto,_160px)] grid-cols-3 gap-[24px]">
        <li className="relative rounded-[8px] bg-white px-[24px] pt-[16px] pb-[28px] transition-shadow duration-300 ease-in-out hover:shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <p className="mb-[18px] text-[14px] font-extrabold leading-[19px] text-[#64748B]">
            Current Clubs
          </p>
          <div className="flex items-center gap-x-[16px]">
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[8px] bg-[#22C55E] text-white">
              <FootballIcon className="h-auto w-[24px]" />
            </div>
            <div className="text-[36px] leading-[48px] text-[#64748B]">
              {clubs ? (
                clubs.data.data.length
              ) : (
                <Spinner className="h-[20px] w-[20px] text-[#64748B]" />
              )}
            </div>
          </div>
          <Link
            to="/clubs"
            className="absolute top-0 left-0 z-10 h-full w-full"
          ></Link>
        </li>
        <li className="relative rounded-[8px] bg-white px-[24px] pt-[16px] pb-[28px] transition-shadow duration-300 ease-in-out hover:shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <p className="mb-[18px] text-[14px] font-extrabold leading-[19px] text-[#64748B]">
            Current Footballers
          </p>
          <div className="flex items-center gap-x-[16px]">
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[8px] bg-[#0EA5E9] text-white">
              <UsersIcon className="h-auto w-[24px]" />
            </div>
            <div className="text-[36px] leading-[48px] text-[#64748B]">
              {footballers ? (
                footballers.data.data.length
              ) : (
                <Spinner className="h-[20px] w-[20px] text-[#64748B]" />
              )}
            </div>
          </div>
          <Link
            to="/footballers"
            className="absolute top-0 left-0 z-10 h-full w-full"
          ></Link>
        </li>
        <li className="relative rounded-[8px] bg-white px-[24px] pt-[16px] pb-[28px] transition-shadow duration-300 ease-in-out hover:shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <p className="mb-[18px] text-[14px] font-extrabold leading-[19px] text-[#64748B]">
            Current News
          </p>
          <div className="flex items-center gap-x-[16px]">
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[8px] bg-orange-400 text-white">
              <NewsIcon className="h-auto w-[24px]" />
            </div>
            <div className="text-[36px] leading-[48px] text-[#64748B]">
              {articles ? (
                articles.data.data.length
              ) : (
                <Spinner className="h-[20px] w-[20px] text-[#64748B]" />
              )}
            </div>
          </div>
          <Link
            to="/news"
            className="absolute top-0 left-0 z-10 h-full w-full"
          ></Link>
        </li>
      </ul>
    </section>
  );
};
