// Import necessary modules from React and CSS for styling
import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling the Login component

// Define the types for props using an interface
interface LoginProps {
  onSignIn: () => void; // Callback function to handle successful sign-in
}

// Define the functional component Login with props typed by LoginProps
const Login: React.FC<LoginProps> = ({ onSignIn }) => {
  // State to hold user code and password values
  const [userCode, setUserCode] = useState(''); // State for storing user code input
  const [password, setPassword] = useState(''); // State for storing password input

  // Function to handle sign-in button click
  const handleSignInClick = () => {
    // Check if the entered credentials match predefined values
    if (userCode === 'TEST123' && password === 'TEST456') {
      onSignIn(); // Call onSignIn prop function on successful sign-in
    } else {
      alert('Credentials do not match'); // Alert user if credentials are incorrect
    }
  };

  return (
    <div className="login-container"> {/* Container for login form */}
      <div className="login-field"> {/* Field for user code input */}
        <label>User Code:</label> {/* Label for user code input */}
        <input
          type="text" // Input type for user code
          value={userCode} // Bind value to userCode state
          onChange={(e) => setUserCode(e.target.value)} // Update userCode state on change
          required // Mark input as required
        />
      </div>
      <div className="login-field"> {/* Field for password input */}
        <label>Password:</label> {/* Label for password input */}
        <input
          type="password" // Input type for password (hidden characters)
          value={password} // Bind value to password state
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
          required // Mark input as required
        />
      </div>
      <button className="login-button" onClick={handleSignInClick}> {/* Sign-In button */}
        Sign-In
      </button>
      <button className="cancel-button" onClick={() => window.location.reload()}> {/* Cancel button */}
        Cancel
      </button>
    </div>
  );
};

// Export the component as the default export
export default Login;
