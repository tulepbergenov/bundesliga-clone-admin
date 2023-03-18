import { PropsWithChildren } from "react";

export const Table = ({ children }: PropsWithChildren) => {
  return (
    <table className="w-full table-auto border-collapse">{children}</table>
  );
};
