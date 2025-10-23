export default function FruitPage({ params }: { params: { id: number } }) {
  return <div>Fruit page: {params.id}</div>;
}