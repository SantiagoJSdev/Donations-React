import React from 'react'
import {Provider} from 'react-redux'



import { AppRutas } from './routers/AppRutas'



import { store } from './store/store'

export const DonationApp = () => {

  

    

    return (
        <>

            <Provider store={ store }>
            
            <AppRutas/>
             </Provider>
        </>
    )
}
