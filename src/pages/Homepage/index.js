import React from 'react';

// import { Container } from './styles';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection } from '../../components';

function Homepage() {
  return (
    <div>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </div>
  );
}

export default Homepage;
