import React, {Component} from 'react';
import './comman.css';
class Header extends Component {

    render() {
        let showHeader =true;
        return(
            <header className={showHeader ? "containerWapper header" : "containerWapper header hide"}>
                <div className="row">
                    <div className="col-md-4">
                        <a className="navbar-brand logo">MaDMaX</a>
                    </div>
                    <div className="offset-6 col-md-2">
                        <span>Username</span>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;