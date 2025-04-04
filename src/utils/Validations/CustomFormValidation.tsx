import React, { useState } from "react";

const CustomFormValidation: React.FC = () => {
  // State for form inputs
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // State for error messages
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  // Email validation function
  const validateEmail = (email: string): string | null => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email) ? null : "Invalid email address";
  };

  // Password validation function
  const validatePassword = (password: string): string | null => {
    if (!password) return "Password is required.";
    if (password.length < 8) return "Password must be at least 8 characters long.";
    return null;
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const emailValidationError = validateEmail(email);
    const passwordValidationError = validatePassword(password);

    // Update error state
    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);

    // If no errors, proceed
    if (!emailValidationError && !passwordValidationError) {
      console.log("Form submitted successfully:", { email, password });
      // Reset form or proceed with submission logic
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <h3> Custom Form Validation</h3>
      {/* Email Input */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            border: emailError ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {emailError && <p style={{ color: "red", fontSize: "0.875rem" }}>{emailError}</p>}
      </div>

      {/* Password Input */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>
          Password:
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "0.5rem",
            border: passwordError ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {passwordError && <p style={{ color: "red", fontSize: "0.875rem" }}>{passwordError}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "0.75rem",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default CustomFormValidation;
