import { useChats } from "@context";
import { Search } from "@ui";
import { FC } from "react"

const TopCustomers: FC = () => {
  const { search, setSearch, setPage } = useChats();

  const handleSearch = (text: string) => {
    setSearch(text)
    setPage(1);
  };

  return (
    <div className='w-full flex flex-col gap-3 items-center select-none border-slate-300 px-4 py-4'>
      <Search
        value={search}
        setValue={(text: string) => handleSearch(text)}
        placeholder='Поиск'
        loading={false}
        className="w-full rounded-lg border border-slate-200 dark:border-white text-black dark:text-white text-sm pl-3"
      />
      <div className="w-full border border-slate-200"/>
    </div>
  );
};

export default TopCustomers;
