
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
            
            <div className="div-1 margin">
                 <div className="div-3 color">



                    <div className="pra">
                        <img className="img-2" src={`${data[counter].image}`} alt="imagen"/>
                    </div>
                
                    <div className="div-7">
                       <button className="btn-4"><p className="p-1">{data[counter].first_name}</p> <p className="p-1">{data[counter].last_name}</p></button>
                       <button className="btn-3"><p className="p-1">Total Donations</p> <p className="p-1">{data[counter].donations}</p></button>
                    </div>
                    <Link to={ `/user/${data[counter].id}`}>
                    <div className="div-6"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </div>
                    </Link>
                 </div>
            </div>






            <div className="div-1 margin">
                <div className="div-3 color">

                     
                       <div className="pra">
                        <img className="img-2" src={`${data[counter + 1].image}`} alt="imagen"/>
                    </div>
                
                    <div className="div-7">
                       <button className="btn-4"><p className="p-1">{data[counter + 1].first_name}</p> <p className="p-1">{data[counter + 1].last_name}</p></button>
                       <button className="btn-3"><p className="p-1">Total Donations</p> <p className="p-1">{data[counter + 1].donations}</p></button>
                    </div>

                    <Link to={ `/user/${data[counter + 1].id}`}>
                    <div className="div-6"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </div>
                                     
                    </Link>


                </div>
            </div>
            <div className="div-1 margin">
                 <div className="div-3 color">

                          
                    <div className="pra">
                        <img className="img-2" src={`${data[counter + 2].image}`} alt="imagen"/>
                    </div>
                
                    <div className="div-7">
                       <button className="btn-4"><p className="p-1">{data[counter + 2].first_name}</p> <p className="p-1">{data[counter + 2].last_name}</p></button>
                       <button className="btn-3"><p className="p-1">Total Donations</p> <p className="p-1">{data[counter + 2].donations}</p></button>
                    </div>
                    <Link to={ `/user/${data[counter + 2].id}`}>
                    <div className="div-6"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </div>
                    </Link>
                 </div>
            </div>

            <div className="div-5">
                <button
                 disabled={(counter <= 0)}
                 onClick={decrement}
                className="btn-2 prev">Prev</button>

                <button
                disabled={(counter >= 20)}
                onClick={ increment}
                className="btn-2 next">Next</button>
            </div>




        </div>

       
    )
}
