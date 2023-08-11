import Api from "../lib/axios";

const getRestaurants = async () => {
  const data = await Api.get("/restaurants");
  return data;
};

export default getRestaurants;
