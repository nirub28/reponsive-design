import React, { useEffect, useState, useRef } from 'react';
import './comp2.css'; // Import CSS file for styling

const SecondComponent = () => {
  const [secondText, setSecondText] = useState('');
  const [showName, setShowName] = useState(false);
  const [textPrinted, setTextPrinted] = useState(false); // Track if text has been printed
  const secondComponentRef = useRef(null);
  const fullText = 'But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself,';
  const typingSpeed = 5; 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the component is in view, start typing the text only if it hasn't been printed already
        if (entry.isIntersecting && !textPrinted) {
          let currentIndex = 0;
          const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
              setSecondText(prevText => prevText + fullText[currentIndex]);
              currentIndex++;
            } else {
              clearInterval(interval);
              setShowName(true); 
              setTextPrinted(true); // Set textPrinted to true after printing
            }
          }, typingSpeed);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the component is in view
    );

    // Start observing when the component is mounted
    if (secondComponentRef.current) {
      observer.observe(secondComponentRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (secondComponentRef.current) {
        observer.unobserve(secondComponentRef.current);
      }
    };
  }, [textPrinted]); // Run effect whenever textPrinted changes

  return (
    <div className="container2" ref={secondComponentRef}>
      <img
        className="image2"
        src="https://assets.entrepreneur.com/content/3x2/2000/20160603173131-businesswoman-working-desk-workplace.jpeg"
        alt="Your Image"
      />
      <div className="textOverlay2">
        <h5 className="head52">From our Vice - President</h5>
        <p>{secondText}</p>
        {showName && <p className="name2">- Jaya Srikar Lanka</p>}
      </div>
    </div>
  );
};

export default SecondComponent;
