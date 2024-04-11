import React, { useState } from 'react';
import "./style.css";

const DisplayParagraph = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [detailsButtonClicks, setDetailsButtonClicks] = useState(0);


  const handleDisplayDetails = () => {
    setShowDetails(!showDetails);
    setDetailsButtonClicks(prevCount => prevCount + 1);
    console.log(`you clicked ${detailsButtonClicks+1}`)
  };


  

  return (
    <div className="assignment-container">
      <h2>Welcome to our IT Solutions</h2>
      <button onClick={handleDisplayDetails} className="details-button">
        {showDetails ? 'Hide Paragraph' : 'Display Paragraph'}
      </button>
      {showDetails && (
        <p className="details-text">
          As a leading provider in the IT industry, we pride ourselves on delivering innovative solutions to our clients.
          Our team of experts are constantly pushing the boundaries of technology to better serve our customers and
          help them stay ahead of their competition. We understand the importance of staying up-to-date with the latest
          advancements and constantly strive to incorporate them into our offerings. Our commitment to excellence and
          customer satisfaction has earned us a strong reputation in the market, making us the go-to choice for
          businesses looking for cutting-edge IT solutions. With our comprehensive range of services and experienced
          professionals, we are confident in our ability to meet all your technology needs. Let us be your trusted
          partner in success.
        </p>
      )}
      <p className="clicks-count">Number of button clicks: {detailsButtonClicks}</p>
      

    </div>
  );
      }

export default DisplayParagraph;
