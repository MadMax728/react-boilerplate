import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {

    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <ul className="list-unstyled components">
                        <li className="active">
                            <Link data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" to ='/' >Home</Link>
                        </li>
                        <li className="active">
                            <Link data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" to ='/recipe' >Recipe</Link>
                        </li>
                        <li className="active">
                            <Link data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" to ='/cart' >Shopping Cart</Link>
                        </li>    
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Sidebar;