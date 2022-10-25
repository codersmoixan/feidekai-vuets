type Styles<T> = {
  [K in keyof T]: T[K];
};

export function makeStyles(stylesCreator: () => Record<string, object>) {
  const styles = stylesCreator();
  const style = styles as Styles<typeof styles>;
  console.log(style);
  return styles;
}

const classes = makeStyles(() => ({
  root: {
    width: 200,
    height: 200,
  },
  content: {
    backgroundColor: "red",
  },
  footer: {
    height: 49,
  },
}));

console.log(classes);

const classs = () => ({
  root: {
    width: 200,
    height: 200,
  },
  content: {
    backgroundColor: "red",
  },
  footer: {
    height: 49,
  },
});

type P = ReturnType<typeof classs>;

const p: P = classes;

console.log(p.root);

const obj = {
  name: "mike",
  age: 18,
};

type objKey = typeof obj;

const obj1: objKey = {
  name: "张三",
  age: 2,
};

const arr = [
  { id: 1, age: 18, name: "里斯", weight: 76 },
  { id: 2, count: 2, height: 168 },
];

type arrType = typeof arr[number];
const arrObj: arrType = {
  id: 1,
  count: 168,
  height: 152,
};
console.log(arrObj);

type User = {
  readonly name: string;
  age: number;
  weight?: number;
};

const user = {
  name: "张三",
  age: 18,
  weight: 75,
  firstname: "三",
  lastname: "张",
};

type ExtendUserOne<T> = {
  [Key in keyof T as `my${Capitalize<string & Key>}`]: T[Key];
};
type ExtendUserTwo<T> = {
  [Key in keyof T as Extract<Key, "name" | "weight">]: T[Key];
};

type AccountUser = ExtendUserTwo<typeof user>;
