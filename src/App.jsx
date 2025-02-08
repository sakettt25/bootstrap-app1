import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";  // Import the Header component
import LoginPage from "./login"; // Import the LoginPage component
import Listing from "./listing"; // Import the Listing component
import CreateOwn from "./createown"; // Import the CreateOwn component
import Testimonial from "./testimonial"; // Import the Testimonial component
import Started from "./started";
import Footer from "./footer"; // Import the Footer component


function App() {
  return (
    <div className="App">
      {/* Header is placed at the top, remains fixed or scrollable depending on the website's needs */}
      <Header />
      
      {/* Main content of the page */}
      <div className="content-container">
        <LoginPage />
        <Listing />
        <CreateOwn />
        <Testimonial />
        <Started />
        <Footer />
        {/* You can add more components here in the future */}
      </div>
    </div>
  );
}

export default App;
