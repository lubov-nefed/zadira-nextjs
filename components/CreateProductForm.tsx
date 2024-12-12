import { createProduct } from "@/auth/actions";
import { Fragment } from "react";

const fieldsData = ["name", "brand", "img", "oldPrice", "currentPrice"];
const radioData = [
  {
    id: "in_stock",
    value: "In stock",
  },
  {
    id: "stocked_on_demand",
    value: "Stocked on demand",
  },
  {
    id: "out_of_stock",
    value: "Out of stock",
  },
];

export function CreateProductForm() {
  const fields = fieldsData.map((field) => (
    <Fragment key={field}>
      <label htmlFor={field} className="col-start-1 pl-2">
        {field}
      </label>
      <input
        type="text"
        name={field}
        required
        className="border border-gray-500 rounded pl-1 focus:outline focus:outline-blue-400  focus:outline-2 focus:border-blue-400"
      />
    </Fragment>
  ));
  const radioButtons = radioData.map((button) => (
    <div key={button.id} className="py-1">
      <input
        type="radio"
        name="availability"
        id={button.id}
        value={button.value}
        className="m-1"
      />
      <label htmlFor={button.id}>{button.value}</label>
    </div>
  ));
  return (
    <form action={createProduct} className="my-0 mx-auto p-4 max-w-4xl">
      <h2 className="font-semibold p-2">Create Product</h2>
      <div className="grid grid-cols-[1fr_3fr] gap-y-2 max-w-2xl pl-2">
        {fields}
      </div>
      <div className="m-2">{radioButtons}</div>
      <button
        type="submit"
        className="ml-2 mt-4 border border-gray-500 rounded px-2 pb-1 hover:bg-blue-400 hover:text-white active:outline active:outline-2 active:outline-blue-900"
      >
        Add
      </button>
    </form>
  );
}
