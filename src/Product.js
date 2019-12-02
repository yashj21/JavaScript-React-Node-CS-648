import React from 'react'
import Filters from "./Filters";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

class Product extends  React.Component{
    constructor(){
        super();
        this.handleDestroy = this.handleDestroy.bind(this);
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            product : [
                {
                    id:0,
                    name: "Clarinet",
                    category: "Test",
                    price: "459.99"},
                {
                    id:1,
                    name: "Cello",
                    category: "Test1",
                    price: "5000"},

                {
                    id:2,
                    name: "Fortepiano",
                    category: "Test",
                    price: "11000"},
                {
                    id:3,
                    name: "Chaise Lounge",
                    category: "Test",
                    price: "799"},
                {
                    id:4,
                    name: "Dining Table",
                    category: "Test1",
                    price: "1300"},
                {
                    id:5,
                    name: "Bean Bag",
                    category: "Test",
                    price: "100"}],
            newDataForm: {
                category: '',
                name: '',
                price: '',
                imageURL: ''
            },
            filterText:''
        };
    }

    handleSave(productsingle) {
        if (!productsingle.id) {
            productsingle.id = new Date().getTime()
        }
        this.setState((prevState) => {
            let products = prevState.product
            products[productsingle.id] = productsingle
            return { products }
        });
    }
    handleFilter(filterInput) {
        this.setState(filterInput)
    }
    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.product
            delete products[productId]
            return { products }
        })
    }
    render() {


        return(<div class="container-fluid"><h1 class="col-md-4">My Inventory</h1>
            <div> <Filters onFilter={this.handleFilter}/>
                <ProductTable product = {this.state.product} onDestroy={this.handleDestroy} filterText={this.state.filterText}/>
                <ProductForm onSave={this.handleSave} onDestroy={this.handleDestroy}/></div>
        </div>);


    }
}

export default Product