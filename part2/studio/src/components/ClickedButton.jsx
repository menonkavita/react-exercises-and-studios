import './styling.css';
import Button from "./Button";


function ClickedButton(setButton) {
  console.log("In Clicked Button component");

  function handleClick() {
    alert("This pin has been removed from the board!");
    console.log("Clicked Button: Value in ", setButton);

    return (
      <Button setButton={setButton} />
    )
  }

  return (
    <button id="clickedButton" onClick={handleClick}>
      Saved
    </button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button
//import styling and assign correct className clickedButton
