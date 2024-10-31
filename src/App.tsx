// Import necessary modules from React and the MenuBar component
import React from 'react'; // Import React library
import MenuBar from './components/MenuBar'; // Import the MenuBar component from the components directory
import './App.css'; // Import CSS file for styling the App component

// Define the functional component App
const App: React.FC = () => {
  return (
    <div className="App"> {/* Main container for the App component */}
      <MenuBar /> {/* Render the MenuBar component */}
    </div>
  );
};

// Export the App component as the default export
export default App; 
