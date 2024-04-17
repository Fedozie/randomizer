import { useState } from "react";
import Form from "./Form/form";

interface Input {
  type: string;
  name: string;
  placeholder: string;
  id: number | string;
  mainId: string; 
}


const HomePage = () => {
  const [num, setNum] = useState<number>(3);

  const [enteredQuestion, setEnteredQuestion] = useState<string>('');
  const [enteredOptions, setEnteredOptions] = useState<Record<string, string>>({});

  //Function to convert a number to its letter equivalent
  const toABC = (num: number) => {
    if (num < 1 || num > 26 || typeof num !== "number") {
      return "-1";
    }
    const leveller = 64;
    return String.fromCharCode(num + leveller);
  };

  //Inputs for the options on the form
  const [inputs, setInputs] = useState<Input[]>([
    {
      type: "text",
      name: "option" + toABC(1),
      placeholder: toABC(1) + ":",
      id: 1,
      mainId: "option" + toABC(1),
    },
    {
      type: "text",
      name: "option" + toABC(2),
      placeholder: toABC(2) + ":",
      id: 2,
      mainId: "option" + toABC(2),
    },
    {
      type: "text",
      name: "option" + toABC(3),
      placeholder: toABC(3) + ":",
      id: 3,
      mainId: "option" + toABC(3),
    },
  ]);

  //Function to add a new option to the form
  const addOption = (e: any) => {
    e.preventDefault();
    if (num <= 25) {
      setNum(num + 1);
      setInputs([
        ...inputs,
        {
          type: "text",
          name: "option" + toABC(num + 1),
          placeholder: toABC(num + 1) + ":",
          id: toABC(num + 1),
          mainId: "option" + toABC(num + 1),
        },
      ]);
    } else {
      alert("You have reached your limit, you can't add any more options.");
    }
  };

  const submitFxn = () => {
    console.log("submitted")
  }

  return (
    <section className="w-full flex flex-col justify-center items-center my-6">
      <div className="mb-4">
        <h2 className="text-center font-bold text-xl">Choice Maker App</h2>
        <p className="text-center">
          When the decision is too hard or too simple, randomize the answers
          with the Choice Maker App
        </p>
      </div>
      <Form
        submitHandler={submitFxn}
        inputs={inputs}
        setInputs={setInputs}
        // onInput={}
        addOption={addOption}
        enteredQuestion = {enteredQuestion}
        setEnteredQuestion = {setEnteredQuestion}
        enteredOptions = {enteredOptions}
        setEnteredOptions = {setEnteredOptions}
      />
    </section>
  );
};

export default HomePage;
