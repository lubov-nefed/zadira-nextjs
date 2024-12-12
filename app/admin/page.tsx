import { CreateProductForm } from "@/components/CreateProductForm";

export default function Admin() {
  return (
    <div>
      <h2 className="font-semibold text-center p-3">Admin dashboard</h2>
      <CreateProductForm />
    </div>
  );
}
