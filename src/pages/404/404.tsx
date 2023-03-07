import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(redirect);
  }, []);

  return (
    <>
      <h1 className="mb-[30px] text-center text-[36px] font-semibold leading-[48px] text-black">
        You {"musn't"} be here!
      </h1>
      <div className="relative min-h-[415px] w-full rounded-[5px] bg-[#B7DFFF] before:absolute before:top-2/4 before:left-2/4 before:h-[400px] before:w-[500px] before:-translate-y-2/4 before:-translate-x-2/4 before:bg-404 before:bg-contain before:bg-center before:bg-no-repeat before:content-['']"></div>
    </>
  );
};
