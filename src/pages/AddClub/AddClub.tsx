import { Button, Heading, Link } from "@/components";

export const AddClub = () => {
  return (
    <>
      <Heading className="mb-[12px]">Add Club</Heading>
      <form className="flex flex-col gap-y-[24px]">
        <fieldset className="min-h-[400px] rounded-[8px] bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <div className="boder-[#F1F5F9] grid grid-cols-[240px_1fr] items-center gap-x-[20px] border-b px-[24px] py-[20px] last:border-none">
            <label className="text-[14px] font-normal leading-[19px] text-[#64748B] after:ml-[3px] after:text-[#EF4444] after:content-['*']">
              Title
            </label>
            <input
              type="text"
              placeholder="Club name"
              className="inline-block rounded-[4px] border border-[#CBD5E1] bg-white px-[12px] py-[8px] text-[14px] font-normal leading-[19px] text-[#64748B]"
            />
          </div>
        </fieldset>
        <div className="flex items-center gap-x-[24px] self-end">
          <Link
            to="/clubs"
            className="inline-block text-[14px] font-extrabold leading-[19px] text-[#94A3B8]"
          >
            Cancel
          </Link>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </>
  );
};
