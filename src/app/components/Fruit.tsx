type Fruit = {
  id: number;
  name: string;
};

export default function Fruit({ id, name }: Fruit) {
  return (
    <li key={id}>
      {name}
    </li>
  );
}