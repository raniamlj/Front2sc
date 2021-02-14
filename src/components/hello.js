import React, { Component } from 'react';

class Hello extends Component {
    state = {
        age: 15,
    }
    /*decrement = () => {
        this.setState({age: this.state.age - 1});
    }
    increase(){
        this.setState({age: this.state.age + 1});
    }
            !!
            <button onClick={()=>{this.setState({age: this.state.age + 1}) }}>Incrementer</button>
            <button onClick={this.decrement}>Decrease</button>
            <button onClick={this.increase.bind(this)}>Increase with function</button>
            !!


    */

    

    render(){
        return <div>
            <p>Visualisation des données</p>
            <button onClick={()=>{this.setState() }}>Importer les données</button>



        </div>
    }

}

export default Hello;