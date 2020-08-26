import React from "react";
import Footer from "./footer";
import todosData from "./components/todoData"
import Product from "./components/Product"

// https://swapi.dev/

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }


    render() {
        const theData = todosData.map(data => <Product data={data} handleChange={this.handleChange} />)

        return (
            <div className="todo-list">
                <h1>Babajide</h1>
                <p>I am the best</p>

                {theData}

                <Footer />
            </div>
        )
    }
}

export default App;