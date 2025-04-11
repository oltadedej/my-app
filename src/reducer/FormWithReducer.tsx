import React, { useReducer } from "react";

type FormState = {
  name: string;
  email: string;
  password: string;
  // userName?: string;
};
type Action =
  | { type: "updateName"; payload: string }
  | { type: "updateEmail"; payload: string }
  | { type: "updatePassword"; payload: string }
  | { type: "reset" };

const initialState: FormState = { name: "", email: "", password: "" };

const reducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.payload };
    //perdorimi i ... perpara nje objekti ben te mundur destrukturimin e objektit
    //dmth ndarjen e tij ne objekt json si {name:"", email:"", password:""}
    // dhe me pas bejme update vetem property-n e cila na intereson 
    //ne rastin tone eshte email
    case "updateEmail":
      return { ...state, email: action.payload };
    case "updatePassword":
      return { ...state, password: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action type not implemented");
  }
};

const FormWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) => dispatch({ type: "updateName", payload: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) => dispatch({ type: "updateEmail", payload: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) => dispatch({ type: "updatePassword", payload: e.target.value })}
      />

      {/* <input
        type="username"
        placeholder="userName"
        value={state.userName}
        onChange={(e) => dispatch({ type: "updateUsername", payload: e.target.value })}
      /> */}

      <button type="submit">Submit</button>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </form>
  );
};

export default FormWithReducer;
