import "./styling.css";
import Button from "./Button";


function SaveButton(setButton) {
  console.log("In Save Button component");

  function handleClick() {
    alert("You are saving this pin!");
    console.log("Save Button: Value in ", setButton);

    return (
      <Button setButton={setButton} />
    )
  }

  return (
    <button id="saveButton" onClick={handleClick} >
      Save
    </button>
  );
}

export default SaveButton;
