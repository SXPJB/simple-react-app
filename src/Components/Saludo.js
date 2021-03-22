import React from 'react'

export default class Saludo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name:""
        }
    }

    handleChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            });
        console.log(this.state)
    }

    onSend = () => {
        this.setState({name:this.state.nombre})
    }

    setLine(){
        if(this.props.line){
            return <hr/>
        }
    }

    render() {
        return (
            <div>
                <h1>Hello word!!</h1>
                <h2>This is a component of {this.state.name} </h2>
                <input type='text'
                       onChange={this.handleChange}
                       name="nombre"/>
                <button onBlur={()=>console.log("Esta sobre")} onClick={()=>this.onSend()}>Ingregar nombre</button>
                {this.setLine()}
            </div>
        );
    }
}
