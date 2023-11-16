import { PropsWithChildren } from "react";

const range = (max: number) => [...Array(max)].map((_, i) => i + 1);

export const message = (num: number): string => {
  let m: string = '';
  if (num % 3 === 0) {
    m += 'fizz';
  }
  if (num % 5 === 0) {
    m += 'buzz';
  }
  if (m === '') {
    m = num.toString();
  }
  return m;
};

export const ListItem = (props:PropsWithChildren) =>
  <li {...props}>{props.children}</li>

export const FizzBuzz = () => (
  <div className="prose">
    <h1>FizzBuzz</h1>
    <ul>
      {range(100).map(i => {
        return <ListItem key={i}>{message(i)}</ListItem>;
      })}
    </ul>
  </div>
);
