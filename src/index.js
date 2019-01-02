import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  onSubmitButton = () => {
    alert(
      "Hi " +
        this.Fname.value +
        " " +
        this.Lname.value +
        " ur age" +
        this.age.value +
        " is submitted"
    );
  };
  render() {
    return (
      <div>
        <div>
          <span>First Name : </span>
          <input type="text" ref={inp => (this.Fname = inp)} />
        </div>
        <div>
          <span>Last Name : </span>
          <input type="text" ref={inp => (this.Lname = inp)} />
        </div>
        <div>
          <span>Age : </span>
          <input type="text" ref={inp => (this.age = inp)} />
        </div>
        <div>
          <input type="button" value="submit" onClick={this.onSubmitButton} />
        </div>
      </div>
    );
  }
}

function Test() {
  let testField = "";
  const pressMe = () => {
    alert(testField.value);
  };
  return (
    <div>
      <span> Test Value: </span>
      <InputTemp refField={inp => (testField = inp)} />
      <input type="submit" value="Press me" onClick={pressMe} />
    </div>
  );
}

function InputTemp(props) {
  return <input type="text" ref={props.refField} />;
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  [<App />, <Test />],

  rootElement
);
