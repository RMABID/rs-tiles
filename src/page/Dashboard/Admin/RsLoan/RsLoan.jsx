import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const RsLoan = () => {
  const axiosSecure = useAxiosSecure();
  const handleLoan = async (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const location = from.location.value;
    const date = from.date.value;
    const amount = from.amount.value;
    const newDeposit = {
      name,
      location,
      date,
      amount: parseInt(amount),
    };
    try {
      await axiosSecure.post("/rs-loan", newDeposit);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewLoan = async (event) => {
    event.preventDefault();
    const loan = parseInt(event.target.loan.value);
    try {
      await axiosSecure.post("/rs-current-loan", { loan });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl font-medium text-center my-12 text-purple-400">
          RS Tails And Sanitary
        </h1>
        <div className="border w-11/12 mx-auto p-3 px-8">
          <h3 className="text-2xl text-center uppercase my-12">
            Current Loan : 940971
          </h3>
          <div className="lg:flex space-y-12 justify-between gap-4">
            <div>
              <h3 className="text-2xl my-8 text-center">Deposit</h3>
              <div>
                <form onSubmit={handleLoan}>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-lg font-medium mb-2">
                        Name :
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter deposit name"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium mb-2">
                        Location :
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Enter Location"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium mb-2">
                        Date :
                      </label>
                      <input
                        type="date"
                        name="date"
                        placeholder="Enter Date"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium mb-2">
                        Amount :
                      </label>
                      <input
                        type="number"
                        name="amount"
                        placeholder="Enter deposit amount"
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  <button className="btn" type="submit">
                    Deposit
                  </button>
                </form>
              </div>
            </div>
            <div>
              <h3 className="text-2xl my-8 text-center">Loan</h3>
              <div>
                <form onSubmit={handleNewLoan}>
                  <div>
                    <label className="block text-lg font-medium mb-2">
                      New Loan Amount :
                    </label>
                    <input
                      type="number"
                      name="loan"
                      placeholder="Enter Loan amount"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <button className="btn" type="submit">
                    Loan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RsLoan;
