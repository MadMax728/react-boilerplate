import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRecipeList} from '../../actions/recipe';
class Cart extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const {recipeReducer} = this.props;
        return(
            <div>
                <h3> Shopping cart</h3>
                <table>
                    <tr>
                        <td>Recipe</td>
                        <td>ingredients</td>
                        <td>Action</td>
                    </tr>
                    {
                        recipeReducer.cartList.map((item, index) => {
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
        )
    }

}
const mapStateToProps = state => ({
    recipeReducer: state.recipeReducer
});
  
const mapDispatchToProps = {
    getRecipeList
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);