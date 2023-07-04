import { Api } from "../Configs/Api"
const getAllOffres = ()=>{
    return fetch(Api.API_SERVER + "/offers");
}

export {
    getAllOffres,
}