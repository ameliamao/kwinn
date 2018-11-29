import React, { Component } from 'react';
import classes from  './Toolbar.css';
import './Toolbar.css';
import NavItems from '../NavigationItems/NavigationItems';




class Toolbar extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        
    }

    

    render() {
        return(<div className = {'Container'}>
            
            <NavItems auth  = {this.props.isAuthenticated}/>
           
            
            </div>)
    }


}

export default Toolbar;