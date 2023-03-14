import { Link, useLoaderData } from "react-router-dom";

export const Club = () => {
  const data: any = useLoaderData();

  return (
    <>
      <div className="mb-[12px]">
        <p className="text-[24px] leading-[32px] text-[#64748B]">Clubs</p>
        <h1 className="font-extrabold text-[#0EA5E9]">{data.data.data.name}</h1>
      </div>
      <div className="mb-[32px] min-h-[400px] rounded-[8px] bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <div className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
          <p className="text-[14px] leading-[19px] text-[#64748B]">Stadium</p>
          <p className="inline-block rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]">
            {data.data.data.stadium}
          </p>
        </div>
        <div className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
          <p className="text-[14px] leading-[19px] text-[#64748B]">
            Short name
          </p>
          <p className="inline-block rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]">
            {data.data.data.short_name}
          </p>
        </div>
        <div className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
          <p className="text-[14px] leading-[19px] text-[#64748B]">Color</p>
          <p
            className="inline-block min-h-[37px] w-[37px] rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]"
            style={{ backgroundColor: data.data.data.color }}
          ></p>
        </div>
        <div className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
          <p className="text-[14px] leading-[19px] text-[#64748B]">Win</p>
          <p className="inline-block rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]">
            {data.data.data.win}
          </p>
        </div>
        <div className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
          <p className="text-[14px] leading-[19px] text-[#64748B]">Draw</p>
          <p className="inline-block rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]">
            {data.data.data.draw}
          </p>
        </div>
        <div className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
          <p className="text-[14px] leading-[19px] text-[#64748B]">Lose</p>
          <p className="inline-block rounded-[4px] border border-[#CBD5E1] py-[8px] px-[12px] text-[#64748B]">
            {data.data.data.lose}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Link
          to="/clubs"
          className="inline-block text-[14px] font-extrabold leading-[19px] text-[#94A3B8]"
        >
          Back
        </Link>
      </div>
    </>
  );
};
