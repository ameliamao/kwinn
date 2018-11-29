import React, { Component } from 'react';
//import classes from  './MainDashboard.css';
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import './MainDashboard.css';
import { connect } from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';




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

const mapStateToProps = (state) => {
    return {
        articles: state.main.articles,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticles: () => dispatch(actions.getArticles()),
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainDashboard));