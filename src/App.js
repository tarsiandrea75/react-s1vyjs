import React from "react";
import "./style.css";

export default function App() {
  const holamundo = e => {
    console.log(e);
    console.log(e.nativeEvent);
    alert("hola mundo");
  };

  const onChangeHandler = e => {
    console.log(e);
    console.log(e.nativeEvent);
    //alert(`hola ${e.target.value}`);
    console.log(`hola ${e.target.value}`);
  };
 
  const onKeyDownHandler = e => {
    const vocales = ["a", "i", "e", "o", "u"];
    //console.log(e);
    //console.log(e.nativeEvent);
    console.log(`${e.target.value}`);
    if (vocales.includes(e.key)) {
      console.log("bloqueé el tipeo de la vocal" + e.target.value + " " + e.key);
      e.preventDefault();
    }
    console.log(`hola ${e.target.value}`);
  };
  return (
    <div>
      <button onClick={holamundo}> click me pls</button>
      <input onKeyDown={onKeyDownHandler} />
    </div>
  );
}
