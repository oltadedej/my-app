import React from "react";

const FormValidationBuiltIn: React.FC = () => {
    return (<form>
        <input type="email" required placeholder="Enter your email" autoComplete="off"/>
        <input type="password"  minLength={8} required autoComplete="off"/>
        <button type="submit">Submit</button>
      </form>);
};

export default FormValidationBuiltIn;
