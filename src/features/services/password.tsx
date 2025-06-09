import Client from "../../api";
// export const forgotPassword = async (data:string) => {
//     try{
//         const response = await new Client().admin.auth.Post(data);
//         return response;
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

export const changePassword = async (data:string) => {
    try{
    const response = await new Client() .admin.auth.Post(data);
    return response;
    }
    catch(error){
        console.log(error);
    }
}