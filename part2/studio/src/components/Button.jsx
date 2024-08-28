import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";
import "./styling.css";
import { useState } from 'react';

function Button({saveButton}) {
  console.log("In --- Button --- component");
  console.log("Button: Value in ", saveButton);

  const [buttonSave, setButton] = useState(saveButton);


  return saveButton ? <SaveButton setButton={false} /> : <ClickedButton  setButton={true}/>;
}

export default Button;

//need to import SaveButton and ClickedButton
//create conditional for these buttons
//import styling
