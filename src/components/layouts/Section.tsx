import clsxm from "@/lib/clsxm";

import { SectionProps } from "@/types/layout";

const Section = ({ label, center, children, className }: SectionProps) => {
  return (
    <div
      className={clsxm(
        "container-custom space-y-3 bg-white dark:bg-gray-900",
        className
      )}
    >
      <div
        className={clsxm({ ["text-center"]: center, ["text-left"]: !center })}
      >
        {label && <h2 className="text-2xl font-bold">{label}</h2>}
      </div>
      {children}
    </div>
  );
};

export default Section;
