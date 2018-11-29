import { connect } from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';



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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));