import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { useDispatch } from 'react-redux';
import {  usuarios } from '../actions/data';

import { ScreenPage } from "../componentes/ScreenPage";
import { ScreenUser } from "../componentes/ScreenUser";
import { useSelector } from "react-redux";



export const AppRutas = () => {

  const dispatch = useDispatch();
  const {data} = useSelector( state => state.nota );

  
  useEffect(() => {
      dispatch(usuarios()) 
     
      
  }, [dispatch])

  

  if  (!data) {
    return <h1>Espere</h1>
  
   } 



  
  return (

    <Router>
     <div>
        <Switch>
          <Route path="/"
            exact
              component={ ScreenPage }
          />
        
          <Route path="/user/:id"
          exact
              component={ ScreenUser }
         />

        <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );

       
    
};
