export default async function Product(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return <h2>Product id {params.id}</h2>;
}
