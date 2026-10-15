import Image from "next/image";
import { handleSearch } from "./actions";

export default async function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left h-full">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Search for products below
          </h1>
          <form action={handleSearch} className="flex w-full gap-2">
            <label className="sr-only" htmlFor="product-search">
              Search products
            </label>
            <input
              className="min-w-0 flex-1 rounded-md border border-zinc-400 bg-white px-4 py-3 text-black placeholder:text-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:border-zinc-600 dark:bg-black dark:text-white dark:focus-visible:outline-white"
              id="product-search"
              name="query"
              type="search"
              placeholder="Search products..."
              required
            />
            <button
              className="rounded-md bg-black px-5 py-3 font-medium text-white hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:bg-white dark:text-black dark:hover:bg-zinc-200 dark:focus-visible:outline-white"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
