import React, { useState } from "react";

const checkEmailUniqueness = async (email: string): Promise<boolean> => {
  const existingEmails: string[] = ["test@example.com", "user@domain.com"];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(!existingEmails.includes(email)); // Simulates email uniqueness check
    }, 1000); // Simulated API delay
  });
};

const AsyncValidationForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isEmailChecking, setIsEmailChecking] = useState<boolean>(false);

  // Email validation
  const validateEmail = async (): Promise<void> => {
    if (!email) {
      setEmailError("Email is required.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address.");
      return;
    }

    setIsEmailChecking(true);
    const isUnique = await checkEmailUniqueness(email);
    setIsEmailChecking(false);

    if (!isUnique) {
      setEmailError("Email is already taken.");
    } else {
      setEmailError(null);
    }
  };

  // Password validation
  const validatePassword = (): void => {
    if (!password) {
      setPasswordError("Password is required.");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      return;
    }

    setPasswordError(null);
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await validateEmail();  //if we remove the await from here, we risk to send data to server without confirming the front-end
    validatePassword();

    if (!emailError && !passwordError) {
      console.log("Form submitted successfully:", { email, password });
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <h3> Async Form Validation</h3>
      {/* Email Field */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          style={{
            width: "100%",
            padding: "0.5rem",
            border: emailError ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {isEmailChecking && <p style={{ fontSize: "0.875rem" }}>Checking email uniqueness...</p>}
        {emailError && <p style={{ color: "red", fontSize: "0.875rem" }}>{emailError}</p>}
      </div>

      {/* Password Field */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>
          Password:
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePassword}
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
        disabled={isEmailChecking}
      >
        Submit
      </button>
    </form>
  );
};

export default AsyncValidationForm;
