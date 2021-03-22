import React from 'react'
import {GridController} from "../Controller/GridController";

export default class Grid extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data:[{
                id:1,
                name:'Emmanuel',
                panternalSurname:'H',
                maternalSurname:'R'
            },{
                id:2,
                name:'Emmanuel',
                panternalSurname:'H',
                maternalSurname:'R'
            },{
                id:3,
                name:'Emmanuel',
                panternalSurname:'H',
                maternalSurname:'R'
            }]
        }
        this.gridController=new GridController()
    }

    onDelete = (id) =>{
        console.log("id a eliminar",id)
    }

    renderHeaders(){
        if(!this.props.headers){
            console.warn("props headers is missing")
        }else{
            return this.props.headers.map(h=>
                <td>
                    {h}
                </td>
            )
        }
    }
    renderBody(){
        return this.state.data.map(d=>
            <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.panternalSurname}</td>
                <td>{d.maternalSurname}</td>
                <td><button onClick={()=>this.onDelete(d.id)} className='btn btn-danger'> Delete</button></td>
            </tr>
        )
    }


    render() {
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    {this.renderHeaders()}
                                </tr>
                            </thead>
                            <tbody>
                                    {this.renderBody()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}
