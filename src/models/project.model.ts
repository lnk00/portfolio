export interface ITech {
  icon: string;
  label: string;
}

export interface IRow {
  image: string;
  title: string;
  subtitle: string;
  link: string;
  button: string;
  description: string;
}

export interface IProject {
  title: string;
  description: string;
  link: string;
  background: string;
  stack: ITech[];
  rows: IRow[];
}
