import { Component, useState } from "react";
import Cake from "../Components/Cake";




const CakeContainer = () => {

    const [listOfCakes, setListOfCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				  price: 5,
				   rating: 5
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 3
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 5
			} 
		]		
	)

	// const MappingIngredients = listOfCakes.map( listOfCakes => listOfCakes.ingredients);
	// console.log(MappingIngredients);

  return (
    <>
		<h2>BNTA Bakery</h2>
        <Cake  cake={listOfCakes[0]}/>
        <Cake  cake={listOfCakes[1]}/>
        <Cake  cake={listOfCakes[2]}/>
		<p>Hope you like them!</p>
    </>
  )
}

export default CakeContainer;