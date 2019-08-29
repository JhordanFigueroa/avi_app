import React from 'react'
import './FoodList.css'

class FoodList extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.state;
        this.props = props
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.handleClick(event)

    }


    render() {
        const recipes = this.props.recipes.map((item, index) =>

            <div className="recipes" key={index}>
                <h1 className="title">{item.recipe.label}</h1>
                <img src={item.recipe.image} alt="recipes" className="img" />
           </div>
        )

        return (

            <div recipe={this.recipe} className="recipe-list">{recipes}</div>
        )
    }
}


export default FoodList