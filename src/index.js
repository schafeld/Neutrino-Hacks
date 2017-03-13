import React from 'react';
import { render } from 'react-dom';
import Accordion from './accordionComponent';

render(
  <main>
    <h1>Hello! 😎</h1>
    <div>This is my first component output:
      <Accordion author="Oliver"/>
      Awesome!
    </div>
    <div>This is my second component output:
      <Accordion />
      Awesome!
    </div>
  </main>
, document.getElementById('root'));
