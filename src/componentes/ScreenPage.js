
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import '../index.css'

import'../styles.css'

import { ScreenDetalles } from './ScreenDetalles';
import { ordenarMayor, ordenarMenor } from '../actions/data';

export const ScreenPage = () => {

const dispatch = useDispatch();

const {data} = useSelector( state => state.nota );
  
const handleMayor=()=>{

    dispatch(ordenarMayor(data))
 }
    
const handleMenor=()=>{

    dispatch(ordenarMenor(data))
   
 }
    return (
        <div>
                      
           

            <div className="div-1">
                 <div className="div-4 color">
                    <h1 className="h1-1">Donations</h1>
                    <div className="dropdown">
                        <button className="dropdown-btn"><p id="p-3">Sort By Donations</p></button>
                        <div className="dropdown-content">
                            <a 
                            onClick={handleMenor}
                            className="a-1" href="#">Mayor</a>
                            <a onClick={handleMayor} className="a-1" href="#">Menor</a>
                            
                        </div>
                    </div>

                 </div>
            </div>

           
            <ScreenDetalles/>
        </div>
    )
}
