import React from "react";

const FormValidationBuiltIn: React.FC = () => {
    return (<form>
       <h3>React Validations Built In HTML</h3>
        <input type="email" required placeholder="Enter your email" autoComplete="off"/>
        <input type="password"  minLength={20} required autoComplete="off"/>
        <button type="submit">Submit</button>
      </form>);
};

export default FormValidationBuiltIn;
