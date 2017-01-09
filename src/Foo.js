import React, { PropTypes , Component} from 'react';
import styles from './styles.scss';

const propTypes = {};

const defaultProps = {};

class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "The den is dark"
    }
  }

  enterTheDragon(){
    this.setState({
      title: "DRAGON HAS ENTERED"
    })
  }

  render() {
    return (
      <div className="foo">
        <h2 className={styles.blue}>{this.state.title}</h2>
        <button onClick={this.enterTheDragon.bind(this)}>Enter the Dragon</button>
      </div>
    );
  }
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;

export default Foo;
