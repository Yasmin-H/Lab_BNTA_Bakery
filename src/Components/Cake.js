const Cake = ({cake}) => {

  const ingredientList = cake.ingredients.map((ingredient) => <li>{ingredient}</li>)

  // const ingredientlIST = cake.ingredients.map((ingredient) => {
    // return <li>{ingredient}</li> ** this is another way of doing it !
  

  return (
    <>
        <h2>{cake.cakeName}</h2>
        <ul></ul>
        <p>Price:{cake.price}</p>
        <p>Rating:{cake.rating}</p>

    </>
  )
}

export default Cake;