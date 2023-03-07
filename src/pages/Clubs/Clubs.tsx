import { useGetClubs } from "@/api/hooks";
import { BinIcon, EditIcon, EyeIcon } from "@/assets/imgs/icons";
import {
  Button,
  InputSearch,
  Modal,
  ModalConfirmDelete,
  Spinner,
  TableControllers,
} from "@/components";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

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
      <h1 className="mb-[12px] text-[24px] leading-[32px] text-[#64748B]">
        Clubs
      </h1>
      <div className="mb-[24px] flex items-center justify-between">
        <InputSearch bg="white" placeholder="Search club" />
        <Button type="button">Add Club</Button>
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <Spinner className="h-[50px] w-[50px] text-[#0EA5E9]" />
        </div>
      )}
      {data && data?.data.data.length > 0 && (
        <div className="w-full overflow-hidden rounded-[8px] bg-white text-[12px] text-sm shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <table className="w-full table-auto border-collapse border border-[#F1F5F9]">
            <thead className="border-b border-[#F1F5F9] bg-[#F8FAFC] font-extrabold">
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
                      <Link
                        to="#1view"
                        className="transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                      >
                        <EyeIcon className="h-auto w-[24px]" />
                      </Link>
                      <Link
                        to="#1edit"
                        className="transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                      >
                        <EditIcon className="h-auto w-[24px]" />
                      </Link>
                      <button
                        type="button"
                        onClick={handleOpenModal}
                        className="transition-colors duration-300 ease-in-out hover:text-[#0EA5E9]"
                      >
                        <BinIcon className="h-auto w-[24px]" />
                      </button>
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
