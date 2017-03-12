import React from 'react';


// Class Component (can have state)
class AccordionComponent extends React.Component {
  render() {
    return <div className="text-box">some string</div>;
  }
}


// Alternatively a Stateless Function Component would look like this:
/*
const AccordionComponent = () => <div className="text-box">some string here too</div>;
*/

export default AccordionComponent;
