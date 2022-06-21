import React, { useState } from "react";
import Input from '../Input';
import Button from '../Button';

function Form() {
  const [name, setName] = useState("");
  const [grades, setGrades] = useState({});

  const updateGradeValue = (e) => {
    var obj = grades;
    var key = e.target.attributes.name.value;
    obj[key] = e.target.value;
    setGrades(obj);
  }

  const createGradeInput = (name, key) => {
    return (<Input name={name} type="text" label="Grade: " onChange={updateGradeValue} key={key} />)
  }
  const [gradeInputs, setGradeInputs] = useState([createGradeInput("grade0", "0")]);

  const submitForm = (e) => {
    e.preventDefault();
    var gradesList = "";
    Object.keys(grades).map((keyName) => {
      gradesList += grades[keyName] + "\n";
    });
    var message = "Hello, " + name + "\nYour grades are: \n" + gradesList;
    alert(message);
  }

  const updateNameValue = (e) => {
    setName(e.target.value)
  }

  const addNewInput = (e) => {
    e.preventDefault();
    console.log("Adding new input");
    var gradeLength = gradeInputs.length;
    var gradeName = "grade" + gradeLength;
    setGradeInputs([...gradeInputs, createGradeInput(gradeName, gradeLength)]);
  }
  
  return (
    <form>  
      <fieldset>
        <Input name="name" type="text" label="Name:" onChange={updateNameValue} />
      </fieldset>
      <fieldset>
        {gradeInputs}
        <Button name="Add New" action={addNewInput} />
      </fieldset>
      <Button name="Submit" action={submitForm} /> 
    </form>
  );
}

export default Form;