/* Source:  https://hacks.mozilla.org/2017/02/using-neutrino-for-modern-javascript-development/ */

import React from 'react';
import { render } from 'react-dom';

import Accordion from './accordionComponent';

render(
  <main>
    <h1>Hello! 😎</h1>
    <div>This is my first component output:
      <Accordion />
      Awesome!
    </div>
  </main>
, document.getElementById('root'));
