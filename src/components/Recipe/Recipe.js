import React, {Component} from 'react';
import { connect } from "react-redux";
import { getRecipeList, addCartItem } from '../../actions/recipe';
class Recipe extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getRecipeList();
    }
    componentDidUpdate() {
        console.log("books", this.props);
    }
    addToCart = (index) => {
        this.props.addCartItem(this.props.recipeReducer.books[index]);
    }
    render() {
        const { recipeReducer } = this.props;
        return(
            <div>
                <h3> Recipe Book </h3>
                <table>
                    <tr>
                        <td>Recipe</td>
                        <td>Ingridients</td>
                        <td>Action</td>
                    </tr>
                    {
                        recipeReducer.books.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.ingredients}</td>
                                    <td><button type="button" name="add" onClick={(e)=> {this.addToCart(index)}} >Add To Cart</button></td>
                                </tr>
                            );
                        })
                    }
                </table>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    recipeReducer: state.recipeReducer
});
  
const mapDispatchToProps = {
    getRecipeList,
    addCartItem
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipe);
