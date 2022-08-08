interface Props {
  search: string;
  setSearch: (e: any) => void;
}

export function Field({ search, setSearch }: Props) {
  return (
    <form className="flex items-center mb-7">
      <label htmlFor="simple-search" className="sr-only">
        Search...
      </label>
      <div className="relative w-full">
        <div className="flex absolute top-3 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-800 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-green-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
      </div>
    </form>
  );
}
