export default function Searchbar({ setFilters, filters }) {
  function handleSearchFilter(e) {
    e.preventDefault();

    setFilters((prev) => ({
      ...prev,
      searchTerm: e.target.value,
    }));
  }

  return (
    <div className="w-full md:w-auto">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="search"
          className="rounded-10 placeholder:text-preset-7 bg-neutral-0 w-full min-w-80 border border-neutral-300 px-10 py-2.5 ring-offset-2 transition-all duration-200 placeholder:opacity-70 focus:ring-2 focus:ring-neutral-900 active:border-neutral-900"
          placeholder="Search by name or ingredient..."
          name="search"
          value={filters.searchTerm}
          onChange={(e) => handleSearchFilter(e)}
        />
        <img
          src="/assets/images/icon-search.svg"
          alt="searchbar-icon"
          className="absolute top-3 left-3 text-neutral-900"
        />
      </div>
    </div>
  );
}
