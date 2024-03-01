import axios from "axios"
const API = "https://newsapi.org/v2/everything?q=Apple&from=2024-02-01&sortBy=popularity&apiKey=70401fa92f504e3abc38e3393f362aa4"
let data = null
export const getBussinessNews = async () => {
    await axios.get(`${API}`).then(res=>{
        
        console.log(data)
        data = res.data.articles;
        
    })
    .catch(err=>{
        console.log(err)
    })

    return data;
}