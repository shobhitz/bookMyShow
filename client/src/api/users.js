const {axiosInstance} = require("./index")

export const registerUser = async(value)=>{
    try{
        const response = await axiosInstance.post("api/user/register", value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const loginUser = async(value)=>{
    try{
        const response = await axiosInstance.post("api/user/login", value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getCurrentUser = async ()=>{
    try{
        const response = await axiosInstance.get("api/user/current");
        return response.data;
    }catch(err){
        console.log(err);
    }
}