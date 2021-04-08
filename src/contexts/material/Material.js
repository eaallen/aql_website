import React from 'react'

export const MaterialContext = React.createContext()
export default class Material extends React.Component{
    constructor(props){
        super(props)
        this.state ={

        }
        this.actions={}
    }

    render(){
        return <MaterialContext.Provider value={{...this.state,...this.actions}}>
            {this.props.children}
        </MaterialContext.Provider>
    }
}