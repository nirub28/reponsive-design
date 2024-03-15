import React, { useEffect, useState } from 'react';
import './comp.css'; // Import CSS file for styling

const MyComponent = () => {
  const [text, setText] = useState('');
  const [showName, setShowName] = useState(false);
  const fullText = 'But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,';
  const typingSpeed = 5; 

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(prevText => prevText + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowName(true); // Show the name after text has finished loading
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <img
        className="image"
        src="https://wallpapercave.com/wp/wp5711093.jpg"
        alt="Your Image"
      />
      <div className="textOverlay">
        <h5>From our Managing Director</h5>
        <p>{text}</p>
        {showName && <p className="name">- Supriya Chunduru</p>}
      </div>
    </div>
  );
};

export default MyComponent;
