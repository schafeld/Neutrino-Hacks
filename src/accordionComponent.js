import React from 'react';


// Class Component (can have state)
class AccordionComponent extends React.Component {
  // state
  constructor() {
    super();
    this.state = {
      txt: 'This is the state text',
    };
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }

  render() {
    const author = this.props.author;
    // There must be exactly 1 outer wrapping tag.
    // Parentheses are rquired if JSX isn't  in same line as return statement.
    return (
        <div className="wrapper">
          <input type="text"
            onChange={this.update.bind(this)} />
            <div className="another-text-box">
                {this.state.txt} &amp; some string
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
