import Api from "../lib/axios";

const getRestaurant = async (slug) => {
  const data = await Api.get(`/meals/${slug}`);
  return data;
};

export default getRestaurant;
