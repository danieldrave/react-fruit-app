import Link from 'next/link';

type FruitParams = {
  id: number;
  name: string;
  genus: string;
  family: string;
  order: string;
};

export default function Fruit({ data }: { data: FruitParams }) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>
        <strong>{data.name}</strong>
        <span className="display-block">
          {`${data.family}, ${data.order}, ${data.genus}`}
        </span>
      </td>
      <td>
        <Link href={`/pages/fruits/${data.id}`}> Open </Link>
      </td>
    </tr>
  );
}