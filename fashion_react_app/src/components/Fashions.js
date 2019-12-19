import React, { Component } from 'react';
import axios from 'axios';
import Newform from './Newform';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components'
import '../Main.css'



class Fashions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fashions: []
        };
        this.getFashions = this.getFashions.bind(this);
    }
    componentDidMount() {
        this.getFashions();
    }


    async getFashions() {
        const response = await axios('http://localhost:3000/fashions')
        const data = response.data;
        this.setState({
            fashions: data
        })
        console.log(data);
    }
    render() {
        return (
            <div>
                <Header />

                <div className="body">
                    <Newform getFashions={this.getFashions} />
                    <br />
                    <br />
                    <div className="container">
                        <div className="row">
                            {this.state.fashions.map(fashion => {
                                return (

                                    <div key={fashion.id} className="tight col-6">
                                        <div className="image"><img src={fashion.image} alt={fashion.name} /></div>
                                        <div className="info">{fashion.info}</div>
                                        <div className="category">{fashion.category}</div>
                                    </div>


                                );
                            }
                            )}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div >
        )
    }
}
export default Fashions;
