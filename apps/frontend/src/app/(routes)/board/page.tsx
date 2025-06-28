export default function Home() {
  return (
    <div className="mt-4 flex w-full flex-col items-center gap-8">
      <a
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2 mb-4 text-2xl text-slate-50 hover:bg-transparent hover:font-bold hover:text-slate-50 hover:underline"
        href="/create"
      >
        [start a new coin]
      </a>
      <div className="flex w-full md:justify-center">
        <form 
          className="w-full md:max-w-md grid grid-cols-[1fr_auto_auto] gap-2 relative z-[51]"
        >
          <div className="relative w-full">
            <input
              className="flex h-10 rounded-md ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 w-full border border-none border-gray-300 bg-green-300 p-2 text-[1rem] text-black focus:border-none active:border-none"
              id="search-token"
              placeholder="search for token"
              autoComplete="off"
              aria-label="Search for token"
              enterKeyHint="search"
              type="search"
              name="search-token"
            />
          </div>
          <button 
            className="flex w-20 items-center justify-center rounded bg-green-300 p-2 text-black hover:bg-green-500" 
            type="submit"
          >
            search
          </button>
        </form>
      </div>
    </div>
  );
}