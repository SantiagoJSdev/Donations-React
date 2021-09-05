


    // const url = 'https://moadw-challenge.herokuapp.com/api/find-one?id={string}'

    
    
    // const getText =  async(url) =>  {
      
    //     try{
    //       var response = await fetch(url);
    //       var txt = await response.text();
    //       return txt;
    //     }
    //     catch(e){
    //       console.log('there was an error');
    //       console.log(e);
    //     }
    //   }
      
    // export const fetchData =  async () => {

    //     let resul = await getText('https://cors-anywhere.herokuapp.com/https://moadw-challenge.herokuapp.com/api/find-one?id=1');
    //   //  let data = await resul
    //   console.log(resul)
    //     return JSON.parse(resul)
      
      
        
    //   }
      
     const url = 'https://moadw-challenge.herokuapp.com/api/find-many?skip={number}&limit={number}&sort={string}'
    
  
    
    const getText =  async(url) =>  {
      
        try{
          var response = await fetch(url);
          var txt = await response.text();
          return txt;
        }
        catch(e){
          console.log('there was an error');
          console.log(e);
        }
      }
      
    export const fetchData =  async () => {

      try {

        let resul = await getText('https://cors-anywhere.herokuapp.com/https://moadw-challenge.herokuapp.com/api/find-many?skip=24&limit=25&sort=random');
       
        return JSON.parse(resul) 
        
      } catch (error) {
        console.log(error)
      }
        
      
      
        
      }
