import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useSearch = (items: any[] = [], searchKey?: string) => {
  const [searchValue, setSearchValue] = useState("");

  const debSearchValue = useDebounce(searchValue, 500);

  const foundItems = items.filter((item) => {
    return debSearchValue.toLocaleLowerCase() === ""
      ? item
      : item[searchKey || "name"].toLocaleLowerCase().includes(debSearchValue);
  });

  const onSeachValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e) {
      setSearchValue(e.target.value);
    }
  }, []);

  const value = useMemo(() => {
    return { debSearchValue, onSeachValue, foundItems };
  }, [debSearchValue, foundItems, onSeachValue]);

  return value;
};
