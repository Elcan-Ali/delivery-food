import Api from "../lib/axios";

const getRestaurants = async () => {
    const data = await Api.get('/meals')
    console.log(data);
}

export default getRestaurants;