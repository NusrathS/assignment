// Import necessary modules from React and CSS for styling
import React from 'react';
import './ExitScreen.css'; // Import CSS file for styling the ExitScreen component

// Define the functional component ExitScreen
const ExitScreen: React.FC = () => {
  return (
    <div className="exit-screen"> {/* Container for the exit screen content */}
      <h1>Goodbye!</h1> {/* Main heading displayed on the exit screen */}
      <p>Thank you for using our app.</p> {/* Subtext thanking the user */}
    </div>
  );
};

// Export the component as the default export
export default ExitScreen;
