import { createProduct } from "../../auth/actions";

export default function Admin() {
  return (
    <div>
      <h2>Admin dashboard</h2>
      <form action={createProduct}>
        <h2>Create Product</h2>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="brand">brand</label>
          <input type="text" id="brand" name="brand" required />
        </div>
        <div>
          <label htmlFor="img">img url</label>
          <input type="text" id="img" name="img" />
        </div>
        <div>
          <label htmlFor="oldPrice">oldPrice</label>
          <input type="text" id="oldPrice" name="oldPrice" />
        </div>
        <div>
          <label htmlFor="currentPrice">currentPrice</label>
          <input type="text" id="currentPrice" name="currentPrice" required />
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="availability"
              id="in_stock"
              value="In stock"
            />
            <label htmlFor="in_stock">In stock</label>
          </div>
          <div>
            <input
              type="radio"
              name="availability"
              id="stocked_on_demand"
              value="Stocked on demand"
            />
            <label htmlFor="stocked_on_demand">Stocked on demand</label>
          </div>
          <div>
            <input
              type="radio"
              name="availability"
              id="out_of_stock"
              value="Out of stock"
            />
            <label htmlFor="out_of_stock">Out of stock</label>
          </div>
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
