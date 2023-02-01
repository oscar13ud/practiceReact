export const list = [
  {
    id: 1,
    nameList: "item 1",
    completed: false,
    description: "description 1",
  },
  {
    id: 2,
    nameList: "item 2",
    completed: true,
  },
  {
    id: 3,
    nameList: "item 3",
    completed: false,
    description: "description 3",
  },
];

export interface itemsInit {
  id: number;
  nameList: string;
  completed: boolean;
  description?: string;
}
