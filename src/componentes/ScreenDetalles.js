
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useCounter } from '../hook/counter';
import '../index.css'



export const ScreenDetalles = () => {

    const {data} = useSelector( state => state.nota );
    

    const { counter, increment, decrement } = useCounter( 0 );
    

    if (!data.length) {
       return <h1>Espere</h1>
    }
    

    return (
    
        

        <div>
            
              

                <div className="card ms-3 centrarCaja2 bg-dark" style={ { maxWidth: 540 } }>
                    <div className="row no-gutters">
                         <div className="col-md-4">
                         <img src={`${data[counter].image}`} className="card-img " alt='{ superhero }' />
                         </div>
                         <div className="col-md-8">
                    
                         <div className="card-body">
                           <h5 className="card-title"> {data[counter].first_name + ' ' + data[counter].last_name}</h5>
                              <p className="card-text">
                               <small className="text-muted"> TOTAL DONATIONS {data[counter].donations } </small>
                                </p>


                                            <Link to={ `/user/${data[counter].id}`}>
                                              <button
                                              className='btn btn-primary fab bg-dark'
                                               >
                                               <i className="fas fa-arrow-alt-circle-right"></i>
                                              </button>
                                              </Link>
                        </div>
                     </div>
                 </div>
                </div>


                <div className="card ms-3 centrarCaja2 bg-dark" style={ { maxWidth: 540 } }>
                    <div className="row no-gutters">
                         <div className="col-md-4">
                          <img src={`${data[counter + 1].image}`} className="card-img " alt='{ superhero }' />
                         </div>
                     <div className="col-md-8 ">
                    
                         <div className="card-body">
                         <h5 className="card-title"> {data[counter + 1].first_name + ' ' + data[counter + 1].last_name}</h5>
                              <p className="card-text">
                               <small className="text-muted"> TOTAL DONATIONS {data[counter + 1].donations } </small>
                                </p>

                                           <Link to={ `/user/${data[counter + 1].id}`}>
                                              <button
                                              className='btn btn-primary fab bg-dark'
                                               >
                                               <i className="fas fa-arrow-alt-circle-right"></i>
                                              </button>
                                              </Link>


                        </div>
                     </div>
                 </div>
                </div>

              
 


                <div className="card ms-3  centrarCaja2 bg-dark" style={ { maxWidth: 540  }}>
                    <div className="row no-gutters">
                         <div className="col-md-4">
                          <img src= {`${data[counter + 2].image}`} className="card-img " alt='{ superhero }' />
                         </div>
                     <div className="col-md-8">
                    
                         <div className="card-body">
                             <h5 className="card-title">{data[counter + 2 ].first_name + ' ' + data[counter + 2].last_name}</h5>
                            

                              <p className="card-text">
                               <small className="text-muted">  TOTAL DONATIONS {data[counter + 2].donations } </small>
                                </p>

                                             <Link to={ `/user/${data[counter + 2].id}`}>
                                              <button
                                              className='btn btn-primary fab bg-dark'
                                               >
                                               <i className="fas fa-arrow-alt-circle-right"></i>
                                              </button>
                                              </Link>



                        </div>
                     </div>
                 </div>
                </div>
                
                <div className="container">
                <div className="centrarboton ">
                <button 
                disabled={(counter <= 0)}
                onClick={decrement}
                type="button" 
                className="btn btn-primary bg-dark "
                >Prev
                
                </button>
            
               
                <button 
                disabled={(counter >= 22)}
                onClick={increment}
                type="button" 
                className="btn btn-primary bg-dark ms-5"
                >Next
                
                </button>
                
                </div>
                </div>
        </div>

       
    )
}
