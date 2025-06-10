import Client from "../../api"

export const getQueries = async (data:any)=>{
    try{
        const response = await new Client().admin.enquiry.get(data)
        return response
    } catch(error){
        console.log("Error in get enquiry", error)
    }
}

 export const updateQueries = async (params:string)=>{
    try {
        const response = await new Client().admin.enquiry.put(params)
        return response
    } catch (error) {
        console.log("error",error)
    }
 }
