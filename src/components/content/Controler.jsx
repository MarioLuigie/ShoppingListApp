import React, { useContext, useState } from "react";
import { Context } from "../../Store";
import Button from "./Button";
import Input from "./Input";
import textContent from "../../data/textContent.json";
import './Controler.scss';

export default function Controler () {

  const { controler } = textContent;
  const [inputValue, setInputValue] = useState("");
  const { actions, dispatch } = useContext(Context);

  const handleChangeInputValue = evt => {
    setInputValue(evt.target.value);
  }

  const handleControlButton = (actionType) => () => {
    if (actionType === actions.add) {
      dispatch({type : actionType, inputValue});
      setInputValue("");
    } else if (actionType === actions.removeAll) {
      dispatch({type : actionType})
    }
  }

  return (
    <div className="controlerSection">
      <Input 
        placeholder={controler.input.placeholder}
        type="text"
        id="productInput"
        label={controler.label}
        value={inputValue}
        onChange={handleChangeInputValue}
      />
      <div className="buttons">
        <Button 
          label={controler.buttons.remove}
          onClick={handleControlButton(actions.removeAll)}
        />
        <Button 
          label={controler.buttons.add}
          onClick={handleControlButton(actions.add)}
        />
      </div>
    </div>
  )
}


