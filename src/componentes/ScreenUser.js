import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router';
import '../styles2.css' 



import { sumarDonacion } from '../actions/data';
import { personajeById } from '../helpers/personajeById';


export const ScreenUser = ({history}) => {

    const dispatch = useDispatch();

    const  {id}    = useParams();
    
    const {data, total} = useSelector( state => state.nota );
    const personaje     = personajeById(id, data)

    if ( !personaje.length ) {
    
        return <Redirect to="/" />;
    }

    const handleReturn =()=>{
        // history.goBack();
        history.push('/');
    }

    const handleMake=()=>{

        dispatch(sumarDonacion(personaje[0].donations))
    
    }


    return (

        <div>   



        <div className="div-11 ">
            <div onClick= {handleReturn} className="div-66 .hover-1"> 
                <svg className="svg1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                  </svg>
            </div>
            <div className="div-22 color1 ">
                <img className="img-11" src={`${personaje[0].image}`} alt="imagen"/>
                
             </div>
        </div>

            <div className="div-11">
                 <div className="div-especial color1">


                   
                    <div className="div-77">
                        <button className="btn-44"><p className="p-11 p-largo">{personaje[0].first_name}</p> <p className="p-11 p-largo">{personaje[0].last_name}</p></button>
                     
                     </div>

                 </div>
            </div>






            <div className="div-11">
                <div className="div-33 color1">

                    <div className="pra1">
                        <img className="img-22" src={`${personaje[0].image}`}  alt="imagen"/>
                    </div>
                
            

                </div>
            </div>
            <div className="div-11 a12">
                 <div className="div-33 color1">

                           
                  
                           <div className="div-77">
                            <button className="btn-44"><p className="p-11">{personaje[0].description}</p> </button>
                         
                         </div>
                 </div>
            </div>

            <div className="div-11 a12">
                <div className="div-ultimo color1">

                 
                   <div className="div-77">
                    <button className="btn-44"><p className="p-11">{personaje[0].first_name}</p> <p className="p-11">{personaje[0].last_name}</p></button>
                    <button className="btn-33"><p className="p-11">Total Donations</p> <p className="p-11">{total}</p></button>
                    </div>

                </div>
           </div>

           <div className="div-55">
            <button
             onClick={handleMake}
            className="btn-22 prev">MAKE A DONATIONS</button>
            
        </div>


















            {/* desde aqui empiezaaaaaaaaaaaaaaaa */}


                        {/* <button
                          onClick={handleReturn}
                          className='btn btn-primary fab bg-dark'
                         >
                          <i className="fas fa-arrow-alt-circle-left"></i>
                        </button>
                          <div className="text-center">
                          <h1>{personaje[0].first_name} {personaje[0].last_name}</h1>
                          <div className="centrarCaja">
                          <div className="card bg-dark " style={ { maxWidth: 200 } }>
                          <img src={`${personaje[0].image}`} className="card-img-top" alt="imagen"/>
                          </div>
                          </div>

                         <div className="text-center">
                              <h4>
                             <p>{personaje[0].description}</p></h4>
                         </div>
           
                     <div className="card ms-1 centrarCaja bg-dark " style={ { maxWidth: 200}}>
                          <div className="row no-gutters">
                            <div className="col-md-8">
                            <div className="card-body">
                             <p className="card-text"> Total Donations: <small>{personaje[0].donations}</small> </p>
                              <p className="card-text">
                               <small className="text-muted">  TOTAL DONATED: {total}  </small>
                                </p>
                            </div>
                           </div>
                          </div>
                        </div>
              

                        <div className="d-grid gap-2 col-6 mx-auto">
                             <button 
                                onClick={handleMake}
                                className="btn btn-primary bg-dark" 
                                type="button">
                        
                            MAKE A DONATION
                            </button>
  
                        </div>

        </div> */}

        {/* aqui terminaaaaaaaaaaaaaaaaaaaaaa */}



        </div>
    )
}
