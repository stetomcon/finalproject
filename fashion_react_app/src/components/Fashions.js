import React, { Component } from 'react';
import axios from 'axios';
import Newform from './Newform';



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
        const response = axios.get('/fashions')
            .then(response => {
                console.log('this is response', response)
            })
        const data = response.data;
        this.setState({
            fashions: data
        })
            .then(fashions => {
                console.log('this is fashion', fashions)
            });
    }
    render() {
        return (
            <div>
                <h1>Fresh Fashion</h1>
                {this.state.fashions.map(fashion => {
                    return (
                        <div key={fashion.id}>

                            <h3>Image: <img src={fashion.image} alt={fashion.name} /></h3>
                            <h3>Info: {fashion.info}</h3>
                            <h3>Category: {fashion.category}</h3>
                        </div>
                    )
                }
                )}
                <Newform getFashions={this.getFashions} />
            </div>
        )
    }
}
export default Fashions;
