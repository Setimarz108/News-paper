import React, { Component } from 'react';


class FetchData extends React.Component {
    state = {
        parameter: "q",
        query: "lodnon"


    }
    componentDidMount = async ()=>{
        try{
            let response = await fetch (`https://newsapi.org/v2/top-headlines?${this.state.parameter}=${this.state.query}&apiKey=1931895ad8f647eabfcc4f8434c25d34`)
            if (response.ok){
                console.log("Is ok")
            }
        }catch{
            console.log("Something went wrong")
        }
    }


    render() { 
        return <div>


        </div>;
    }
}
 
export default FetchData;