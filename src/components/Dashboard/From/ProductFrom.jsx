const ProductFrom = ({ handleSubmit }) => {
  //react input tag

  return (
    <div className="mt-24">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 font-Garamond md:grid-cols-2 font-raleway-font px-4 md:px-36 mt-8  gap-6"
      >
        <div>
          <label className="block text-lg font-medium mb-2">
            Product Name :
          </label>
          <input
            required
            type="text"
            name="product_name"
            placeholder="Enter your product name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Category :</label>
          <select
            name="category"
            defaultValue="default"
            className="select w-full"
          >
            <option value={"default"} disabled>
              Select Category
            </option>
            <option>Wall</option>
            <option>Floor</option>
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Type :</label>
          <select name="type" defaultValue="default" className="select w-full">
            <option value={"default"} disabled>
              Select Type
            </option>
            <option>Polish</option>
            <option>Mat</option>
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Size :</label>
          <select name="size" defaultValue="default" className="select w-full">
            <option value={"default"} disabled>
              Select Size
            </option>
            <option>8x12</option>
            <option>12x20</option>
            <option>16x16</option>
            <option>24x24</option>
            <option>12x24</option>
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Box :</label>
          <input
            type="number"
            name="box"
            placeholder="Enter quanti box"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">PES :</label>
          <input
            type="number"
            name="pes"
            placeholder="Enter quanti Pes"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Owner Name :</label>
          <input
            required
            type="text"
            name="owner_name"
            // defaultValue={user?.displayName}
            readOnly
            placeholder="Enter "
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">
            Owner Email :
          </label>
          <input
            required
            type="email"
            // defaultValue={user?.email}
            readOnly
            name="owner_email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">
            Product Image :
          </label>
          <input
            type="file"
            name="image"
            className="file-input file-input-ghost"
          />
        </div>
        <div className="md:col-span-2 text-xl font-rancho-font 2 text-center">
          <button
            type="submit"
            className="btn  bg-lime-500 text-white font-agu font-light text-xl hover:bg-secondary_primary hover:text-primary w-full "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFrom;
