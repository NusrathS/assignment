// Import necessary modules from React and CSS for styling
import React from 'react';
import './SubMenuScreen.css'; // Import CSS file for styling the SubMenuScreen component

// Define the types for props using an interface
interface SubMenuScreenProps {
  title: string; // Title to display for the submenu screen
  onBack: () => void; // Callback function to handle the back button action
}

// Define the functional component SubMenuScreen with props typed by SubMenuScreenProps
const SubMenuScreen: React.FC<SubMenuScreenProps> = ({ title, onBack }) => {
  return (
    <div className="submenu-screen"> {/* Container for the submenu screen content */}
      <h1>{title}</h1> {/* Display the title of the submenu */}
      <button className="back-button" onClick={onBack}>Back</button> {/* Back button with onClick event to trigger onBack */}
    </div>
  );
};

// Export the component as the default export
export default SubMenuScreen;
