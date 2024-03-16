import React, { useEffect, useState } from 'react';
import './comp2.css'; // Import CSS file for styling

const SecondComponent = () => {
  const [secondtext, setsecondtext] = useState('');
  const [showName, setShowName] = useState(false);
  const fullText = 'But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,';
  const typingSpeed = 5; 

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setsecondtext(prevText => prevText + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowName(true); 
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container2">
      <img
        className="image2"
        src="https://assets.entrepreneur.com/content/3x2/2000/20160603173131-businesswoman-working-desk-workplace.jpeg"
        alt="Your Image"
      />
      <div className="textOverlay2">
        <h5 className="head52">From our Vice - President</h5>
        <p>{secondtext}</p>
        <p>
        {showName && <p className="name2">- Jaya Srikar Lanka</p>}
        </p>
      </div>
    </div>
  );
};

export default SecondComponent;
