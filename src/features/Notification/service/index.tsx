import Client from "../../../api";

export const updateNotification = async (params:string) => {
    try{
    const response = await new Client().admin.notification.update(params)
    return response;
    }
    catch(error){
        console.log(error);
    }
}
