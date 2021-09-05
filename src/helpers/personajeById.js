


export const personajeById = ( id, data ) => {
  

return data.filter((ele)=>(ele.id === id * 1))

    
}

export const totalDonation = ( data ) => {
let acu = 0;
   data.map((ele)=>{
      
   return acu += ele.total
    
  })
     return acu  
  }

export const filtrarDataMenor = ( data ) => {

   let arrObj = []
   let filtro =[]
   let nuevoArray =[]

   
   let obj ={}
   
   data.map((ele)=>{
   
        return  obj[ele.id] = ele.donations
   
       })
       arrObj = Object.keys(obj).map((ele)=>({id:ele, valor:obj[ele]})).sort((a,b)=>(a.valor-b.valor))
       
       for (let i = 0; i < arrObj.length; i++){
       
           filtro = data.find((ele)=> {
            
               return ele.id === (arrObj[i].id * 1)
           })
           nuevoArray.push(filtro)
         
       }
      return nuevoArray
      }
   


export const filtrarDataMayor = ( data ) => {

    let arrObj = []
    let filtro =[]
    let nuevoArray =[]

    let obj ={}
      
          data.map((ele)=>{
      
           return   obj[ele.id] = ele.donations
      
          })
          arrObj = Object.keys(obj).map((ele)=>({id:ele, valor:obj[ele]})).sort((a,b)=>(b.valor-a.valor))
          for (let i = 0; i < arrObj.length; i++){
          
              filtro = data.find((ele)=> {
               
                  return ele.id === (arrObj[i].id * 1)
              })
              nuevoArray.push(filtro)
            
          }
         return nuevoArray
         }
         

  