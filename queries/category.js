import { Api } from "../Configs/Api"
const getAllCategory = ()=>{
    return fetch(Api.API_SERVER + "/categories");
}

export {
    getAllCategory,
}