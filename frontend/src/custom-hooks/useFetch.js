import { useContext, useEffect, useState  } from "react";
import axios from "axios"
import { authContext } from "../Context/Context";

const useFetch = (url)=>{
    const {token} = useContext(authContext)
    const [Data,setData] = useState(null)
    useEffect(()=>{
        async function getData(){
            try {
                
                const res = await axios.get(url, { headers: { "authorization": "Bearer " + (token && token) } })
                setData(res.data)
            } catch (error){
                console.log(error)
            }
}
        getData()
    },[url,token])
    return {Data}
}


const usePost =  (url,data) =>{
    const { token } = useContext(authContext)
    const [Data, setData] = useState(null)
    const [err,seterr] = useState(null)
    const [loading,setloading] = useState(true)

    useEffect(()=>{
        async function postData(){
            try {
                const res = await axios.post(url, {...data}, { headers: { "authorization": "Bearer " + (token && token) } })
                setData(res.data)
                setloading(false)
            } catch (error) {
                seterr(error)
                setloading(false)
            }
        }
        postData()
    },[url,token,JSON.stringify(data)])
    return {Data,err,loading}
}




export {useFetch,usePost}
