export const paginate = (
  items: any[] | undefined = [],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;

  if (items.length > 0) {
    return [...items].splice(startIndex, pageSize);
  }

  return items;
};
