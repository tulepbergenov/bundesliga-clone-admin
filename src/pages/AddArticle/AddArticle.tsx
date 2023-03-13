import { Button, Heading } from "@/components";
import { Link } from "react-router-dom";

export const AddArticle = () => {
  return (
    <>
      <Heading as="h1" className="mb-[12px]">
        Add News
      </Heading>
      <form>
        <fieldset className="mb-[24px] min-h-[400px] rounded-[8px] bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <fieldset className="grid grid-cols-[236x_1fr] gap-x-[20px]">
            <label className="text-[14px] font-normal leading-[19px] text-[#64748B]">
              Title
            </label>
          </fieldset>
        </fieldset>
        <div className="flex items-center justify-end gap-x-[24px]">
          <Link to="/news">Cancel</Link>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </>
  );
};
