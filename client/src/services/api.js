import axios from "axios"

export function setTokenHeader(token){
    if(token){
        axios.defaults.headers.common["Authorization"]=`Bearer ${token}`
    }else{
        delete axios.defaults.headers.common["Authorization"]
    }
}

export function apiCall(method,path,data,headers={}){
    console.log("came inside api call with headers",headers)
    return new Promise((resolve,reject)=>{
        return axios[method](path,data,headers)
        .then(res=>(resolve(res.data)))
        .catch(err=>{
            console.log("coming here with error",err)
            return reject(err.response.data.error)
        })
    })
}

export async function imageUploadCall(method,path,data,headers={}) {
    try{
        var response=await fetch(path,{
            method,
            body:data,
            headers
        })
        var parsedResponse=await response.json()
       // console.log("fetch call ",obj)
        return parsedResponse;
    }catch(e){
        console.log("error",e)
    }
    
    
}