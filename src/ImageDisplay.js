const React = require('react');

const GIPHY_LOADING_URL = `https://giphy.com/gifs/loop-loading-loader-xTk9ZvMnbIiIew7IpW`;
const styles = {
  minHeight: '310px',
  margin: '0.5em'
};

class ImageDisplay extends React.Component {
  giphySourceUrl= () => {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  }

  render () {
    const url = this.props.loading ? 'loading.gif' : this.props.url;
    const width = this.props.width || 200;
    return (
      <div style={styles}>
        <a href={this.giphySourceUrl()} title='view this on giphy' target='new'>
          <img id='gif' src={url} style={{width: '100%', maxWidth: '350px'}}/>
        </a>
      </div>
    );
  }
}

export default ImageDisplay;
