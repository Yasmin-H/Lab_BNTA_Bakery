const Cake = ({name, cake, pr , rt}) => {


  const ingredientList = cake.map(cake.ingredient) => {
    return <li>{ingredient}</li>;
  }


  // const ingredientList = cake.map(cake => {
  //   return cake.ingredient;
  // });


  return (
    <>
        <h2>cakeName: {name}</h2>
        <p>Ingredients: </p>
        <ul>{ingredientList}</ul>
        <p>Price: {pr}</p>
        <p>Rating: {rt}</p>

    </>
  )
}

export default Cake;