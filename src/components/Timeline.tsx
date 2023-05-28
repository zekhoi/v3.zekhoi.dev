import clsxm from "@/lib/clsxm";

import { TimelineItemType, TimelineType } from "@/types/timeline";

const TimelineItem = ({ data }: TimelineItemType) => {
  return (
    <li className="mb-10 ml-6">
      <div className="space-y-3">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-200 ring-8 ring-white dark:bg-primary-900 dark:ring-gray-900">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-primary-600 dark:text-primary-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <h3 className="flex items-center text-lg font-bold text-gray-900 dark:text-white">
          {data.role + " at " + data.company}
        </h3>
        {data.endTime.toLowerCase() === "now" && (
          <span className="rounded bg-primary-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-primary-200 dark:text-primary-800">
            Present
          </span>
        )}
        <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {data.startTime + " - " + data.endTime}
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {data.description}
        </p>
      </div>
    </li>
  );
};

const Timeline = ({ data }: TimelineType) => {
  return (
    <>
      <div
        className={clsxm("mx-2 flex", {
          ["justify-start"]: data.length > 0,
          ["justify-center"]: data.length < 1,
        })}
      >
        <ol
          className={clsxm("relative border-gray-200 dark:border-gray-700", {
            ["border-l"]: data.length > 0,
            ["hidden"]: data.length < 1,
          })}
        >
          {data.map((line) => (
            <TimelineItem key={line.startTime} data={line} />
          ))}
        </ol>
        {data.length < 1 && (
          <div className="text-center">
            <p>No Item</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Timeline;
