import React, { Component } from "react";
import axios from "axios";
import '../Main.css'

class Footer extends Component {

    render() {
        return (
            <>
                <div className="footer">

                    All rights reserved to Steven W Copyright Fresh 2019



                <a href="https://www.github.com/stetomcon" target="blank">

                        <img
                            src="../images/github.png"
                            alt="github Link"
                        ></img>
                    </a>


                    <a href="https://www.linkedin.com/in/stevenwolanin/" target="blank">

                        <img
                            src="../images/link.png"
                            alt="LinkedIn Link"
                        ></img>

                    </a>
                </div>
            </>
        )
    }
}
export default Footer;