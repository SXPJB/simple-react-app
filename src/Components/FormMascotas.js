import React from 'react'
import {FormController} from "../Controller/FormController";

export default class FormMascotas extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            id:0,
            name:'',
            panternalSurname:'',
            maternalSurname:''
        }
        this.formController = new FormController();
    }

    onHandlerChange=event=>{
        this.setState(
            {
                [event.target.name]: event.target.value
            });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.formController.saveData(this.state)
    }

    render() {
        return(
            <div className='container-fluid py-4'>
               <div className="row">
                   <div className='col-md-12'>
                       <form onSubmit={this.handleSubmit}>
                           <input type='number'
                                  name='id'
                                  className="form-control mt-2 mb-2"
                                  onChange={this.onHandlerChange}
                                  placeholder="Id"/>
                           <input type='text'
                                  name='name'
                                  className="form-control mt-2 mb-2"
                                  onChange={this.onHandlerChange}
                                  placeholder="Name"/>
                           <input type='text'
                                  name='panternalSurname'
                                  className="form-control mt-2 mb-2"
                                  onChange={this.onHandlerChange}
                                  placeholder="Panternal Surname"/>
                           <input type='text'
                                  name='maternalSurname'
                                  className="form-control mt-2 mb-2"
                                  onChange={this.onHandlerChange}
                                  placeholder='Maternal Surname'/>
                           <button className='btn btn-primary mt-2'>Submit</button>
                       </form>
                   </div>
               </div>
            </div>
        )
    }
}
