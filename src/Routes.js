import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Sidebar from './components/common/Sidebar';
import Cart from './components/Cart';
class Routes extends Component {

    componentDidMount() {

    }
    render() {
        return(
            <div className="row"> 
                <div className="col-md-3"><Sidebar></Sidebar></div>
                <div className="col-md-9">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/recipe" component={Recipe}></Route>
                        <Route exact path="/cart" component={Cart}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}
export default Routes;