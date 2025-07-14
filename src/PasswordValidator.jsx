import React, { useState } from "react";

const PasswordValidator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [suggested, setSuggested] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasMinLength = password.length >= 8;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    hasUpperCase && hasNumber && hasSpecialChar && hasMinLength;

  //console.log(hasUpperCase);

  const generateStrongPassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let strongPassword = "";
    for (let i = 0; i < 18; i++) {
      strongPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    //console.log(strongPassword);
    setSuggested(strongPassword);
  };

  const hanleSubmit = () => {
    if (isEmailValid && isPasswordValid) {
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 2000);
      setError("");
    } else {
      setSubmitted(false);
      setError("Please fix validation errors before submitting.");
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Password Validator
        </h2>
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-4 py-3 mb-4 rounded-xl  text-lg text-gray-700 placeholder-gray-400 ${
            isEmailValid
              ? "border border-gray-300 focus:outline-none focus:ring-1 focus:ring-neutral-500"
              : "border border-red-500"
          }`}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full px-4 py-3 mb-4 rounded-xl  text-lg text-gray-700 placeholder-gray-400 ${
            isPasswordValid
              ? "border border-gray-300 focus:outline-none focus:ring-1 focus:ring-neutral-500"
              : "border border-red-500"
          }`}
        />
        <ul className="space-y-2 text-base">
          <li
            className={`tracking-[1px] font-semibold ${
              hasUpperCase ? "text-green-500" : "text-red-400"
            }`}>
            <span className="px-2 text-xl">{hasUpperCase ? "✔" : "❌"}</span>
            Contains uppercase letter
          </li>
          <li
            className={`tracking-[1px] font-semibold ${
              hasNumber ? "text-green-500" : "text-red-400"
            }`}>
            <span className="px-2 text-xl">{hasNumber ? "✔" : "❌"}</span>
            Contains a number
          </li>
          <li
            className={`tracking-[1px] font-semibold ${
              hasSpecialChar ? "text-green-500" : "text-red-400"
            }`}>
            <span className="px-2 text-xl">{hasSpecialChar ? "✔" : "❌"}</span>
            Contains special character
          </li>
          <li
            className={`tracking-[1px] font-semibold ${
              hasMinLength ? "text-green-500" : "text-red-400"
            }`}>
            <span className="px-2 text-xl">{hasMinLength ? "✔" : "❌"}</span>
            Minimum 8 characters
          </li>
        </ul>
        <button
          onClick={generateStrongPassword}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-xl font-semibold text-lg transition-all duration-300">
          Suggest Strong Password
        </button>
        {suggested && (
          <p className="mt-4 text-center text-gray-700">
            Suggested: <strong className="text-black px-3">{suggested}</strong>
          </p>
        )}

        <button
          onClick={hanleSubmit}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold text-lg transition-all duration-300">
          Submit
        </button>
        {submitted && (
          <p className="mt-4 text-green-600 font-medium text-center">
            Form Submitted SuccessFull
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-600 font-medium text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default PasswordValidator;
