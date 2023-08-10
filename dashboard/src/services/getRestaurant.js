import Api from "../lib/axios";

const getRestaurant = async(slug)=>{
    const data = await Api.get(`/meals/${slug}`)
    console.log(data);
}

export default getRestaurant;