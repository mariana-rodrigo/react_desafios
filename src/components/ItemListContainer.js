import React from "react"
import ItemList from'./ItemList'

class ItemListContainer extends React.Component{
    

    render () {
        return (
            <div>
                <h1>{this.props.greetings}</h1>
                <ItemList/>
            </div>

        )
    }
}

export default ItemListContainer