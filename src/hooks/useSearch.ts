import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useSearch = (data: any) => {
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState<any[]>([]);

  const deb = useDebounce(searchValue, 500);

  useEffect(() => {
    if (data) {
      if (searchValue === "") {
        setItems(data.data.data);
      }
    }
  }, [searchValue, data]);

  const handleSearchValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e) {
        const results = items.filter((item) => {
          if (e.target.value === "") return items;

          return item.name.toLowerCase().includes(deb.toLowerCase());
        });

        setSearchValue(e.target.value);
        setItems(results);
      }
    },
    [items, deb]
  );

  const value = useMemo(() => {
    return { searchValue, handleSearchValue, items };
  }, [searchValue, items, handleSearchValue]);

  return value;
};
