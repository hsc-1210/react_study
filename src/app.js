import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

import Admin from "./pages/admin/admin"
import Login from './pages/login/login'
export default class App extends React.Component{

  render(){
    return(

      <div className="app" style={{width:"100%",height:"100%"}}>
        <Switch>
        <Route path="/admin" component={Admin}/>
        <Route path="/login" component={Login}/>
        <Redirect to="/login"/>
        </Switch>
        
      </div>
        
    )
  }
}