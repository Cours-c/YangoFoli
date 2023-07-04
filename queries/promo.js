import { Api } from "../Configs/Api"
const getAllPromo = ()=>{
    return fetch(Api.API_SERVER + "/promos");
}

export {
    getAllPromo,
}