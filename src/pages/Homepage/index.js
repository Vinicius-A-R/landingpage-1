import React from 'react';

// import { Container } from './styles';
import { homeObjOne } from './Data';
import { InfoSection } from '../../components';

function Homepage() {
  return (
    <div>
      <InfoSection {...homeObjOne} />
    </div>
  );
}

export default Homepage;
