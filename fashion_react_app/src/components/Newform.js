import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components'

class Newform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            info: "",
            category: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    async handleSubmit() {
        console.log("submitted");
        const response = await axios.post(
            "http://localhost:3000/fashions",
            this.state
        );
        const data = response.data;
        console.log(data);
        this.props.getFashions();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        info="image"
                        placeholder="image"
                        type="text"
                        value={this.state.image}
                        id="image"
                    />
                    <input
                        onChange={this.handleChange}
                        name="info"
                        placeholder="info"
                        type="text"
                        value={this.state.info}
                        id="info"
                    />
                    <input
                        onChange={this.handleChange}
                        name="category"
                        placeholder="category"
                        type="text"
                        value={this.state.category}
                        id="category"
                    />
                    <input type="submit" value="enter"></input>

                </form>
            </div>
        );
    }
}

export default Newform;