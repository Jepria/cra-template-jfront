export interface Todo {
  id: number;
  /** 内容 */
  text: string;
  /** 完成状态 */
  completed: boolean;
}

let id = 100000;

export function fakeFetchRemoteData(time: number) {
  const nth1 = id++;
  const nth2 = id++;
  const data: Todo[] = [
    {
      id: nth1,
      text: `Demo-data-${nth1}`,
      completed: true
    },
    {
      id: nth2,
      text: `Demo-data-${nth2}`,
      completed: true
    }
  ];
  return new Promise<typeof data>(resolve => {
    setTimeout(resolve, time, data);
  });
}
