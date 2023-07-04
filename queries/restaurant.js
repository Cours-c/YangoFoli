import { Api } from "../Configs/Api"
const getAllRestaurants = ()=>{
    return fetch(Api.API_SERVER + "/restaurants");
}
const getRestaurantById = (id)=>{
    return fetch(Api.API_SERVER + "/restaurant/" + id);
}
export {
    getAllRestaurants,
    getRestaurantById
}