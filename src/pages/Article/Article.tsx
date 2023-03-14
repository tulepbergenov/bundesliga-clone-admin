import { IArticle } from "@/interfaces";
import { Link, useLoaderData } from "react-router-dom";

export const Article = () => {
  const data: any = useLoaderData();
  const article: IArticle = data.data.data;

  return (
    <>
      <div className="mb-[12px]">
        <p className="text-[24px] leading-[32px] text-[#64748B]">News</p>
        <h1 className="font-extrabold text-[#0EA5E9]">{article.title}</h1>
      </div>
      <fieldset className="mb-[32px] min-h-[400px] rounded-[8px] bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <fieldset className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
          <p className="text-[14px] leading-[19px] text-[#64748B]">Cover</p>
          <div className="h-[100px] w-[100px] overflow-hidden rounded-full">
            <img
              alt={article.title}
              className="h-full w-full bg-[#64748B] bg-cover"
            />
          </div>
        </fieldset>
        <fieldset className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
          <p className="text-[14px] leading-[19px] text-[#64748B]">Title</p>
          <p className="inline-block rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]">
            {article.title}
          </p>
        </fieldset>
        <fieldset className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
          <p className="translate-y-[9px] text-[14px] leading-[19px] text-[#64748B]">
            Description
          </p>
          <p className="inline-block rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]">
            {article.short_description}
          </p>
        </fieldset>
        <fieldset className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
          <p className="translate-y-[9px] text-[14px] leading-[19px] text-[#64748B]">
            Body
          </p>
          <p className="inline-block rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]">
            {article.long_description}
          </p>
        </fieldset>
      </fieldset>
      <div className="flex items-center justify-end">
        <Link
          to="/news"
          className="inline-block text-[14px] font-extrabold leading-[19px] text-[#94A3B8]"
        >
          Back
        </Link>
      </div>
    </>
  );
};
