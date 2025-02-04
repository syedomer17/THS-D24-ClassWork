type user = {
  age: number;
  Name: string;
};
type Emplo = {
  company: string;
  salary: number;
};

type ALL = user & Emplo;
