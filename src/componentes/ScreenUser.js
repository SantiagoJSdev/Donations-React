import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router';
import { sumarDonacion } from '../actions/data';
import { personajeById } from '../helpers/personajeById';
import'../index.css'

export const ScreenUser = ({history}) => {

    const dispatch = useDispatch();

    const  {id}    = useParams();
    
    const {data, total} = useSelector( state => state.nota );
    const personaje     = personajeById(id, data)


    if ( !personaje.length ) {
    
        return <Redirect to="/" />;
    }

   

    const handleReturn =()=>{
    
        history.push('/');
    }

    const handleMake=()=>{

        dispatch(sumarDonacion(personaje[0].donations))
    
    }


    return (

        <div>   
                        <button
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

        </div>
        </div>
    )
}
