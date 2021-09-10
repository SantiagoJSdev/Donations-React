import { types } from "../type/types"


import { filtrarDataMenor, totalDonation, filtrarDataMayor } from "../helpers/personajeById"
import { basedatos } from "../basedato/basedatos"




export const usuarios = ()=> {
    return async(dispatch)=>{
       
        const usuario = basedatos;
        dispatch(data(usuario))
        dispatch(totalDonacionState(usuario))
        
    }
} 
export const data = (usuario) => {

    return {
        type: types.user,
        payload: usuario
    }
    
    } 

export const totalDonacionState = (data) => {

    const total = totalDonation(data);
   

    return {
        type: types.total,
        payload: total
    }

}

export const sumarDonacion=(donacion)=>{

    return {
        type: types.suma,
        payload: donacion
        }
    }

export const ordenarMenor=(data)=>{

    const nuevo = filtrarDataMenor(data)

    return {

        type: types.menor,
        payload: nuevo
        }
    }

export const ordenarMayor=(data)=>{

    const nuevo = filtrarDataMayor(data)

    return {

        type: types.mayor,
        payload: nuevo
        }



    }