import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";
import "./styling.css";


function Button({saveButton, setButton}) {
  console.log("In --- Button --- component");

  return saveButton ? <SaveButton setButton={false} /> : <ClickedButton  setButton={true}/>;
}

export default Button;

//need to import SaveButton and ClickedButton
//create conditional for these buttons
//import styling
