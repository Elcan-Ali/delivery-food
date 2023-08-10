import Api from "../lib/axios";

const getMeals = async()=>{
    const data = await Api.get('/meals')
    return data
}

export default getMeals;