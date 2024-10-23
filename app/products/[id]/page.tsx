export default function Product({ params }: { params: { id: string } }) {
  return <h2>Product id {params.id}</h2>;
}
