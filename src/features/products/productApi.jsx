import axios from "axios";
import { ENDPOINT } from "../../config";

export function getProductsApi(){
     return  axios.get(`${ENDPOINT}/products`)
}


export function getProductDetailApi(id){
     return axios.get(`${ENDPOINT}/products/${id}`)
}