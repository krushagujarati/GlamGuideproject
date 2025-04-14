// src/pages/Suggestions.jsx
import React, { useState } from 'react';
import './Suggestions.css';

// ✅ Import images directly so React tracks them correctly
import hourglassImg from '../Components/Assets/hourglass.jpg';
import pearImg from '../Components/Assets/pear-body-shape.jpg';
import rectangleImg from '../Components/Assets/rectangular-body-type.jpg';
import appleImg from '../Components/Assets/apple-body-shape.jpg';

import hg1 from '../Components/Assets/hg7.jpg';
import hg2 from '../Components/Assets/hg6.jpg';
import hg3 from '../Components/Assets/hg5.jpg';

import pear1 from '../Components/Assets/p1.jpg';
import pear2 from '../Components/Assets/p2.jpg';
import pear3 from '../Components/Assets/p3.jpg';

import rect1 from '../Components/Assets/s1.jpg';
import rect2 from '../Components/Assets/s2.jpg';
import rect3 from '../Components/Assets/s3.jpg';

import apple1 from '../Components/Assets/a1.jpg';
import apple2 from '../Components/Assets/a2.jpg';
import apple3 from '../Components/Assets/a3.jpg';

const bodyTypes = [
  { name: 'Hourglass', image: hourglassImg },
  { name: 'Pear', image: pearImg },
  { name: 'Rectangle', image: rectangleImg },
  { name: 'Apple', image: appleImg }
];

const outfits = {
  Hourglass: [hg1, hg2, hg3],
  Pear: [pear1, pear2, pear3],
  Rectangle: [rect1, rect2, rect3],
  Apple: [apple1, apple2, apple3]
};

function Suggestions() {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div className="suggestion-container">
      <section className="body-type-section">
        <h2>Where Timeless Elegance Meets Personal Style</h2>
        <p>Select your body shape to get personalized outfit ideas.</p>
        <div className="body-type-grid">
          {bodyTypes.map((type) => (
            <div
              key={type.name}
              className={`body-card ${selectedType === type.name ? 'active' : ''}`}
              onClick={() => setSelectedType(type.name)}
            >
              <img src={type.image} alt={type.name} />
              <p>{type.name}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedType && (
        <section className="outfit-section">
          <h3>Outfit Ideas for {selectedType} body type</h3>
          <div className="outfit-grid">
            {outfits[selectedType].map((img, idx) => (
              <div className="outfit-card" key={idx}>
                <img src={img} alt={`Outfit ${idx + 1}`} />
                <p>Style Tip #{idx + 1}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Suggestions;
