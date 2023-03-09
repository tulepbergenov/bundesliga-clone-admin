import { useGetClubs } from "@/api/hooks";
import { BinIcon, EditIcon, EyeIcon } from "@/assets/imgs/icons";
import {
  Heading,
  InputSearch,
  Link,
  Modal,
  ModalConfirmDelete,
  Spinner,
  TableControllers,
  Tooltip,
} from "@/components";
import { useCallback, useState } from "react";

export const Clubs = () => {
  const { data, isLoading } = useGetClubs();
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <Heading className="mb-[12px]">Clubs</Heading>
      <div className="mb-[24px] flex items-center justify-between">
        <InputSearch bg="white" placeholder="Search club" />
        <Link to="/clubs/add" apperience="button">
          Add Club
        </Link>
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <Spinner className="h-[50px] w-[50px] text-[#0EA5E9]" />
        </div>
      )}
      {data && data?.data.data.length > 0 && (
        <div className="w-full overflow-hidden rounded-[8px] bg-white text-[12px] text-sm shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <table className="w-full table-auto border-collapse border border-[#F1F5F9]">
            <thead className="border-b border-[#F1F5F9] bg-[#F8FAFC] text-[12px] font-extrabold leading-[16px]">
              <tr>
                <th className="py-[8px] px-[25px] text-center uppercase leading-[16px] text-[#64748B]">
                  ID
                </th>
                <th className="py-[8px] px-[25px] text-center uppercase leading-[16px] text-[#64748B]">
                  Name
                </th>
                <th className="p-[8px] text-center uppercase leading-[16px] text-[#64748B]">
                  Stadium
                </th>
                <th className="p-[8px] text-center uppercase leading-[16px] text-[#64748B]">
                  Color
                </th>
                <th className="p-[8px] text-center uppercase leading-[16px] text-[#64748B]">
                  Wins
                </th>
                <th className="p-[8px] text-center uppercase leading-[16px] text-[#64748B]">
                  Draw
                </th>
                <th className="p-[8px] text-center uppercase leading-[16px] text-[#64748B]">
                  Lose
                </th>
                <th className="p-[8px] px-[50px] text-center uppercase leading-[16px] text-[#64748B]"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.data.data.map((club) => (
                <tr key={club.id} className="border border-[#F1F5F9]">
                  <td className="py-[16px] px-[25px] text-center font-extrabold text-[#0EA5E9]">
                    {club.id}
                  </td>
                  <td className="py-[16px] px-[25px] text-center text-slate-500">
                    {club.name}
                  </td>
                  <td className="px-[8px] py-[16px] text-center text-slate-500">
                    {club.stadium}
                  </td>
                  <td className="px-[8px] py-[16px] text-center text-slate-500">
                    <span
                      style={{
                        backgroundColor: club.color,
                      }}
                      className="inline-block h-[15px] w-[15px] rounded-[44px]"
                    ></span>
                  </td>
                  <td className="px-[8px] py-[16px] text-center text-slate-500">
                    {club.win}
                  </td>
                  <td className="px-[8px] py-[16px] text-center text-slate-500">
                    {club.lose}
                  </td>
                  <td className="px-[8px] py-[16px] text-center text-slate-500">
                    {club.draw}
                  </td>
                  <td className="flex items-center justify-center px-[8px] py-[16px] text-center text-slate-500">
                    <div className="flex items-center gap-x-[16px] text-[#94A3B8]">
                      <Tooltip label="View">
                        <Link
                          to="#1view"
                          className="flex h-[24px] w-[24px] items-center justify-center transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                        >
                          <EyeIcon className="h-auto w-full" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Edit">
                        <Link
                          to="#1edit"
                          className="flex h-[24px] w-[24px] items-center justify-center transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                        >
                          <EditIcon className="h-auto w-full" />
                        </Link>
                      </Tooltip>
                      <Tooltip label="Delete">
                        <button
                          type="button"
                          onClick={handleOpenModal}
                          className="flex h-[24px] w-[24px] items-center justify-center transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                        >
                          <BinIcon className="h-auto w-full" />
                        </button>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <TableControllers />
        </div>
      )}
      <Modal open={isOpen} onClose={handleCloseModal}>
        <ModalConfirmDelete />
      </Modal>
    </>
  );
};
