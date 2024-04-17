import React from "react";

interface Input {
  type: string;
  name: string;
  placeholder: string;
  id: number | string;
  mainId: string;
}

interface Options {
  optionA: string;
  optionB: string;
  optionC: string;
}

interface FormProps {
  submitHandler: () => void;
  inputs: Input[];
  setInputs: React.Dispatch<React.SetStateAction<Input[]>>;
  // onInput: () => void;
  addOption: (e: any) => void;
  enteredQuestion: string;
  setEnteredQuestion: React.Dispatch<React.SetStateAction<string>>;
  enteredOptions: Record<string, string>;
  setEnteredOptions: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >;
}

const Form = ({
  submitHandler,
  inputs,
  setInputs,
  addOption,
  enteredQuestion,
  setEnteredQuestion,
  enteredOptions,
  setEnteredOptions,
}: FormProps) => {
  const handleOptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    const newValue = e.target.value;
    setEnteredOptions((prevOptions) => ({
      ...prevOptions,
      [inputName]: newValue,
    }));

  
  };

  console.log(enteredOptions)

  return (
    <form className="w-3/5" onSubmit={submitHandler}>
      <h3 className="text-primary-blue font-bold text-2xl">Questions</h3>
      <div className="my-4">
        <input
          className="w-full border border-black rounded p-4 outline-none"
          type="text"
          name="question"
          id="question"
          placeholder="Q: Enter your question here"
        />
      </div>
      <div className="border-t-2 border-gray-500"></div>
      <h3 className="text-primary-blue font-bold text-2xl my-2">Options</h3>
      <div>
        {inputs.map((input) => (
          <div key={input.id}>
            <input
              className="w-full p-4 mb-2 border border-black rounded"
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={enteredOptions[input.name] || ""}
              onChange={(e) => handleOptionChange(e, input.name)}
            />
          </div>
        ))}
      </div>
      <div className="w-full mt-4 flex justify-between text-primary-text-color">
        <button className="bg-primary-blue p-4 rounded" onClick={addOption}>
          Add Another Option
        </button>
        <button className="bg-primary-green p-4 rounded">Answer</button>
      </div>
    </form>
  );
};

export default Form;
