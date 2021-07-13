import React from "react"



class ItemCount extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = { value: 0};
    }
    render() {

        const stock =  10; 
        return (
            <div>
                <p>
                    {this.state.value}
                </p>
                
                {this.state.value<stock
                    ? <button className="botonSuma" onClick={() => this.setState({value: this.state.value+1})}>+</button>
                    : <button className="botonSumaDeshabilitado"> + </button>
                }

                {this.state.value>0
                    ? <button className="botonResta" onClick={() => this.setState({value: this.state.value-1})}>-</button>
                    : <button className="botonRestaDeshabilitado"> - </button>
                }
            </div>
        )
    }
}

export default ItemCount;