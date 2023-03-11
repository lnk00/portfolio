export interface ITech {
  icon: string;
  label: string;
}

export interface IProject {
  title: string;
  icon: string;
  github: string;
  background: string;
  stack: ITech[];
  color: string;
  hoverColor: string;
  ringColor: string;
}
