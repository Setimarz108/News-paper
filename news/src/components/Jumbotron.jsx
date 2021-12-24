import React, { Component } from 'react'

export default class Jumbotron extends Component {
    
    render() {
        return (
            <div class="jumbotron p-3 p-md-5 text-white rounded " 
            style={{ backgroundImage: `url(${this.props.bgImage})`,backgroundRepeat:"no-repeat" }}
            
            
            >
                <div class="col-md-6 px-0">
                <h1 class="display-4 font-italic">{this.props.title}</h1>
                <p class="lead my-3">{this.props.description}</p>
                <p class="lead mb-0"><a href={this.props.contLink} class="text-white font-weight-bold">Continue reading...</a></p>
                </div>
            </div>
        )
    }
}
