export type TimelineItemType = {
  data: TimelineItemProps;
};
export type TimelineItemProps = {
  startTime: string;
  endTime: string;
  role: string;
  company: string;
  description: string;
};

export type TimelineType = {
  data: TimelineItemProps[];
};
