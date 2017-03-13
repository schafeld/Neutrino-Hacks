import React from 'react';


// Class Component (can have state)
class AccordionComponent extends React.Component {
  render() {
    const author = this.props.author;
    // There must be exactly 1 outer wrapping tag.
    // Parentheses are rquired if JSX isn't  in same line as return statement.
    return (
        <div className="wrapper">
            <div classsName="text-box">
                some string
            </div>
            <div className="text-box">
                some other string, authored by {author}
            </div>
        </div>
    );
  }
}

AccordionComponent.propTypes = {
  author: React.PropTypes.string,
};

AccordionComponent.defaultProps = {
  author: 'some famous guy',
};

// Alternatively a Stateless Function Component would look like this:
/*
const AccordionComponent = () => <div className="text-box">some string here too</div>;
*/

export default AccordionComponent;
