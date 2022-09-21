
const getDessertsService = async()=>{
    let requestConfig ={
        method:"GET", 
        headers: {
            "Content-Type": "application/json",
          } 
    }

    try{
        const res = await fetch("https://dessertsapi.herokuapp.com/",requestConfig)
                          .then(res => res.json())
                          .catch(err => err )
        
        return res;
    }catch(err){
       console.log(err) }
}



export default getDessertsService;