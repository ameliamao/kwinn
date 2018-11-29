import React, { Component } from 'react';
//import classes from  './MainDashboard.css';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import './MainDashboard.css';




class MainDashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: true,
        };
        
    }

    

    render() {
        return(<div className = {"Container"}>

            <Toolbar auth = {this.state.isAuthenticated}/>
            
           
            <Footer/>
            </div>)
    }


}

export default MainDashboard;