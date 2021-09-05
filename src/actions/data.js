import { types } from "../type/types"
import {fetchData} from "../fetch/fetch"
// import { basedatos } from "../componentes/basedatos"
import { filtrarDataMenor, totalDonation, filtrarDataMayor } from "../helpers/personajeById"




export const usuarios = ()=> {
    return async(dispatch)=>{
        const usuario = await fetchData()
        dispatch(data(usuario))
        dispatch(totalDonacionState(usuario))
        // dispatch(data(basedatos))
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