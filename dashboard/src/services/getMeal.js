import Api from "../lib/axios";

const getMeal = async (slug) => {
    const data = await Api.get(`/meal/${slug}`)
    return data
}

export default getMeal;