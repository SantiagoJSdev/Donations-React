
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { ordenarMayor, ordenarMenor, totalDonacionState } from '../actions/data';




import '../index.css'
import { ScreenDetalles } from './ScreenDetalles';

export const ScreenPage = () => {



    const dispatch = useDispatch();

    const {data} = useSelector( state => state.nota );
  
    
    
    useEffect(() => {
     
        dispatch(totalDonacionState(data))
   
        
       
    }, [data])


 const handleMayor=()=>{

    dispatch(ordenarMayor(data))
 }
    
 const handleMenor=()=>{

    dispatch(ordenarMenor(data))
   
 }
 


    return (
        <div>
                      
             <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
               <h1>Donations</h1> 
           
                 <div className="navbar-collapse">
                 <div className="navbar-nav">
                 </div>
                </div>
            <div className="navbar-collapse collapse w-300 order-3 dual-collapse2 ">
                <ul className="navbar-nav ml-auto">

                <div className="dropdown">
                <button className="btn btn-primary bg-dark dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                 Sort By Donations
                </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                      <li>
                          <button 
                            onClick={handleMayor}
                            className="dropdown-item"
                            // href="#"
                            >Mayor</button></li>
                        <li>
                        <button
                        onClick={handleMenor}
                        className="dropdown-item" 
                        // href="#"
                       >Menor</button></li>
                    
                </ul>
            </div>
                  
                </ul>

                
            </div>
        </nav>







                   
                           
        <hr></hr>
           

            <ScreenDetalles/>
        </div>
    )
}