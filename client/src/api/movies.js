const {axiosInstance} = require("./index")

export const addMovie = async(value)=>{
    try{
        const response = await axiosInstance.post("api/movies", value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const updateMovie = async(id, value)=>{
    try{
        const response = await axiosInstance.put(`api/user/${id}`, value);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const deleteMovie = async(id)=>{
    try{
        const response = await axiosInstance.delete(`api/user/${id}`);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getAllMovies = async ()=>{
    try{
        const response = await axiosInstance.get("api/movie");
        return response.data;
    }catch(err){
        console.log(err);
    }
}