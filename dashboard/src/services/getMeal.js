import Api from "../lib/axios";

const getMeal = async (slug) => {
    const data = await Api.get(`/meal/${slug}`)
    console.log(data);
}

export default getMeal;