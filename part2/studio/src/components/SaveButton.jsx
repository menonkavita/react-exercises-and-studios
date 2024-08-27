import "./styling.css";
// import Button from "./Button";

function SaveButton() {
  // alert("This pin has been removed.");

  function handleClick() {
    alert("You are saving this pin!");
    // props.saveButton= true;
    // Button(props);
  }

  return (
    <button id="saveButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default SaveButton;
