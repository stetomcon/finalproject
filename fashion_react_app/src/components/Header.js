import React, { Component } from "react";
import axios from "axios";
import '../Main.css'

class Header extends Component {

    render() {
        return (
            <>
                <div className="header">
                    Fresh
            </div>
                <div className="tagline">
                    A site for you to Post Browse and Inspire
                        </div>
            </>
        )
    }
}
export default Header;