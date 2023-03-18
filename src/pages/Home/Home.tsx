import { useGetArticles, useGetClubs, useGetFootballers } from "@/api/hooks";
import { FootballIcon, NewsIcon, UsersIcon } from "@/assets/imgs/icons";
import { Heading, Spinner } from "@/components";
import { Link } from "react-router-dom";

export const Home = () => {
  const { data: clubData, isLoading: isLoadingClubs } = useGetClubs();
  const { data: footballerData, isLoading: isLoadingFootballers } =
    useGetFootballers();
  const { data: articleData, isLoading: isLoadingArticles } = useGetArticles();

  return (
    <>
      <Heading className="mb-[12px]">Home</Heading>
      <ul className="grid grid-cols-3 gap-[24px]">
        <li>
          <Link
            to="/clubs"
            className="inline-block w-full rounded-[8px] bg-white px-[24px] pt-[16px] pb-[28px] text-[#64748B] transition-shadow duration-300 ease-in-out hover:shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:bg-[#1E293B] dark:text-[#94A3B8]"
          >
            <h2 className="mb-[18px] text-[14px] font-extrabold capitalize leading-[19px]">
              Current Clubs
            </h2>
            <div className="flex items-center gap-x-[16px]">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[8px] bg-[#0EA5E9] text-white">
                <FootballIcon className="h-auto w-[24px]" />
              </div>
              <p className="text-[36px] leading-[48px]">
                {isLoadingClubs && <Spinner className="h-auto w-[36px]" />}
                {clubData && clubData.data.data.length}
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/footballers"
            className="inline-block w-full rounded-[8px] bg-white px-[24px] pt-[16px] pb-[28px] text-[#64748B] transition-shadow duration-300 ease-in-out hover:shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:bg-[#1E293B] dark:text-[#94A3B8]"
          >
            <h2 className="mb-[18px] text-[14px] font-extrabold capitalize leading-[19px]">
              Current Footballers
            </h2>
            <div className="flex items-center gap-x-[16px]">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[8px] bg-[#22C55E] text-white">
                <UsersIcon className="h-auto w-[24px]" />
              </div>
              <p className="text-[36px] leading-[48px]">
                {isLoadingFootballers && (
                  <Spinner className="h-auto w-[36px]" />
                )}
                {footballerData && footballerData.data.data.length}
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="/news"
            className="inline-block w-full rounded-[8px] bg-white px-[24px] pt-[16px] pb-[28px] text-[#64748B] transition-shadow duration-300 ease-in-out hover:shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] dark:bg-[#1E293B] dark:text-[#94A3B8]"
          >
            <h2 className="mb-[18px] text-[14px] font-extrabold capitalize leading-[19px]">
              Current News
            </h2>
            <div className="flex items-center gap-x-[16px]">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[8px] bg-orange-400 text-white">
                <NewsIcon className="h-auto w-[24px]" />
              </div>
              <p className="text-[36px] leading-[48px]">
                {isLoadingArticles && <Spinner className="h-auto w-[36px]" />}
                {articleData && articleData.data.data.length}
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};
