import useAxiosSecure from "../../../hooks/useAxiosSecure";

const QuantityUpdateModal = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const handleQuantity = async (event) => {
    event.preventDefault();
    const from = event.target;
    const box = from.box.value;
    const pes = from.pes.value;
    const updated = {
      box: parseInt(box),
      pes: parseInt(pes),
    };
    try {
       await axiosSecure.patch(`/product/${id}`, updated);
    } catch (error) {
      console.log(error);
    }
    console.log(id, updated);
  };
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form onSubmit={handleQuantity}>
            <div>
              <h1 className="text-2xl font-medium text-center">
                Quantity Updated
              </h1>
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
            </div>
            <button className="btn" type="submit">
              Updated
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default QuantityUpdateModal;
