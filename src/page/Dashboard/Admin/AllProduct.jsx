import { useQuery } from "@tanstack/react-query";

const AllProduct = () => {
  const { data } = useQuery({
    queryKey: ["all-products"],
    queryFn: async()=>{}
  });
  return <div>AllProduct</div>;
};

export default AllProduct;
