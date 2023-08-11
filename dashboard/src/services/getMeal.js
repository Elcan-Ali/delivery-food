import Api from "../lib/axios";

const getMeal = async (slug) => {
  const data = await Api.get(`/meals/${slug}`);
  return data;
};

export default getMeal;
