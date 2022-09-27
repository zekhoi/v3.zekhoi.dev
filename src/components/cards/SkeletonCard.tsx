const Skeleton = () => {
  return (
    <article className="block w-full animate-pulse rounded-md bg-gray-200 p-0.5 shadow dark:bg-gray-600">
      <a className="relative flex h-full flex-col rounded-md bg-white p-6 dark:bg-gray-900 sm:p-8">
        <div className="flex h-full flex-col">
          <p className="h-3 w-32 rounded-lg bg-gray-200 text-xs dark:bg-gray-600"></p>
          <div className="mt-5 h-full flex-1 space-y-2">
            <div className="h-3 w-56 rounded-lg bg-gray-200 dark:bg-gray-600"></div>
            <div className="h-3 w-48 rounded-lg bg-gray-200 dark:bg-gray-600"></div>
            <div className="h-3 w-36 rounded-lg bg-gray-200 dark:bg-gray-600"></div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="h-3 w-24 rounded-full bg-gray-200 dark:bg-gray-600"></p>
            <ul className="flex gap-1">
              <li className="inline-block h-3 w-12 rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium dark:bg-gray-600 "></li>
            </ul>
          </div>
        </div>
      </a>
    </article>
  );
};

export default Skeleton;
