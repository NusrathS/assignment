// Import necessary modules from React and CSS for styling
import React, { useState } from 'react';
import './MenuBar.css';
import Login from './Login'; // Import Login component for sign-in functionality
import SubMenuScreen from './SubMenuScreen'; // Import SubMenuScreen component for submenu display
import ExitScreen from './ExitScreen'; // Import ExitScreen component to handle exit functionality

// Define the functional component MenuBar with no props
const MenuBar: React.FC = () => {
  // Declare state variables with useState for controlling app behavior
  const [isSignedIn, setIsSignedIn] = useState(false); // Tracks whether the user is signed in
  const [showLogin, setShowLogin] = useState(false); // Controls display of the Login component
  const [selectedSubMenu, setSelectedSubMenu] = useState<string | null>(null); // Tracks selected submenu item
  const [showExitScreen, setShowExitScreen] = useState(false); // Controls display of the ExitScreen component
  const [viewOptionsVisible, setViewOptionsVisible] = useState(false); // Toggles visibility of view options

  // Function to display the login component when 'Sign-In' is clicked
  const handleSignIn = () => setShowLogin(true);

  // Function to handle sign-out action
  const handleSignOut = () => {
    setIsSignedIn(false); // Update state to indicate user is not signed in
    setSelectedSubMenu(null); // Clear selected submenu
    setViewOptionsVisible(false); // Hide view options if open
  };

  // Function to handle exit action and show ExitScreen
  const handleExit = () => {
    setShowExitScreen(true); // Display ExitScreen component
  };

  // Function to handle menu item clicks
  const handleMenuClick = (menu: string) => {
    if (menu === 'EXIT') {
      handleExit(); // Trigger exit if 'EXIT' is clicked
    } else if (menu === 'VIEW') {
      setViewOptionsVisible(!viewOptionsVisible); // Toggle view options visibility for 'VIEW'
    } else {
      setSelectedSubMenu(menu); // Set the selected submenu for other items
    }
  };

  // Check if exit screen is shown; if so, render ExitScreen component
  if (showExitScreen) {
    return <ExitScreen />; // Render ExitScreen if showExitScreen is true
  }

  // Render main menu structure
  return (
    <div className="menu-bar"> {/* Main menu bar container */}
      <nav>
        {/* 'File' menu button */}
        <button
          className="menu-item"
          disabled={!isSignedIn} // Disable if not signed in
          onClick={() => handleMenuClick('FILE')} // Handle click event for 'FILE'
        >
          File
        </button>
        {/* Display submenu for signed-in users */}
        {isSignedIn && (
          <div className="submenu">
            <button onClick={() => handleMenuClick('EXIT')}>Exit</button> {/* Exit button */}
          </div>
        )}
        {/* 'View' menu button */}
        <button
          className="menu-item"
          disabled={!isSignedIn} // Disable if not signed in
          onClick={() => handleMenuClick('VIEW')} // Handle click event for 'VIEW'
        >
          View
        </button>
        {/* Sign-In or Sign-Out button */}
        <button
          className="sign-in-button"
          onClick={isSignedIn ? handleSignOut : handleSignIn} // Toggle between Sign-In and Sign-Out
        >
          {isSignedIn ? 'Sign-Out' : 'Sign-In'} {/* Display based on sign-in state */}
        </button>
      </nav>

      {/* View options for submenu items displayed if user is signed in */}
      {viewOptionsVisible && isSignedIn && (
        <div className="view-options">
          <button onClick={() => setSelectedSubMenu('STUDENT')}>Student</button> {/* Student option */}
          <button onClick={() => setSelectedSubMenu('TEACHERS')}>Teachers</button> {/* Teachers option */}
          <button onClick={() => setSelectedSubMenu('SUBJECT')}>Subject</button> {/* Subject option */}
        </div>
      )}

      {/* Show login component if showLogin is true and user is not signed in */}
      {showLogin && !isSignedIn && (
        <Login onSignIn={() => {
          setIsSignedIn(true); // Set signed-in state to true on successful sign-in
          setShowLogin(false); // Hide login component after sign-in
        }} />
      )}

      {/* Display selected submenu screen if a submenu is selected */}
      {selectedSubMenu && (
        <SubMenuScreen
          title={selectedSubMenu} // Pass the title of selected submenu to display
          onBack={() => {
            setSelectedSubMenu(null); // Clear selected submenu on back
            setViewOptionsVisible(false); // Hide view options
          }}
        />
      )}
    </div>
  );
};

export default MenuBar;
