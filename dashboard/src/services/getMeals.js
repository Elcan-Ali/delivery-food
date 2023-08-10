import Api from "../lib/axios";

const getMeals = async()=>{
    const data = await Api.get('/meals')
    console.log(data);
}

export default getMeals;