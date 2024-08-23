let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  const rating= props.rating;

  function GiveRating(){
    return <h3>{stars[props.rating - 1]}</h3>;
  }

  return (rating >= 1) && (rating <= 5) ? <GiveRating/> : null;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
