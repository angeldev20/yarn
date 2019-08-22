import React, {
  Component, Fragment
} from 'react';

import Hero from './Hero';
import Introduction from './Introduction';
import Different from './Different';
import Additional from './Additional';
import Compare from './Compare';
import Contact from './Contact';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Introduction />
        <Different />
        <Additional />
        <Compare />
        <Contact />
      </Fragment>
    );
  }
}

export default Home;
