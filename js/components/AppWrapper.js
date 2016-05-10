import React from "react";
import { Link } from 'react-router';
import Header from './Header'
import GlobalKeys from '../containers/GlobalKeys'


export default (props) => {
  return(
    <div className="Appwrapper">
      <h1>Speed Typer  App</h1>
      <Header/>
        <GlobalKeys />
        {props.children}
    </div>
  )
}
