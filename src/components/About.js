import React from 'react';

import '../style/about.css'
  
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: '',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      {/* <h1><span style={{fontWeight:'bold'}}>Sharp Wings.</span></h1><br/><br/> */}

      <p id='about'>
        Sharpwings.com is one of the topmost travel companies of India and is a trusted name in the Indian travel industry. It is also known for providing the best travel deals to travelers. Being a strong network of 10,000 travel agents (as of August 10, 2022) and having more than 1 million direct customers, Sharpwings can satisfy all your travel needs. Here, You can book flight tickets at a cost-effective price. So, why go anywhere else? Visit us for a memorable travel experience in your budget.
      </p>
    </div>
  );
};
  
export default About;