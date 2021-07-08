import React from "react"


class ItemListContainer extends React.Component{
    

    render () {
        return (
            <div>
                <h1>{this.props.greetings}</h1>
            </div>
        )
    }
}

export default ItemListContainer