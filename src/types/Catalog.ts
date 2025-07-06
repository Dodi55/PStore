export type SubTitleItem = {
  text: string;
  href: string;
};

export type DataItem = {
  headTitle: string;
  icon: string;
  subTitle: SubTitleItem[];
};

export type CategoryItem = {
  id: number;
  title: string;
  icon: string;
  data: DataItem[];
};
