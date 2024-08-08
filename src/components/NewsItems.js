import React, { Component } from 'react';
import placeholder from '../img/placeholder.jpg';

export default class NewsItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: props.urlToImage || placeholder, // Set initial image source
    };
  }

  handleImageError = () => {
    this.setState({ imgSrc: placeholder }); // Fallback to placeholder image on error
  };

  render() {
    const { title, description, url, author } = this.props;
    const { imgSrc } = this.state;

    return (
      <div className='col-md-3'>
        <div className='newsItems w-100'>
          <div className='newsItemsInner'>
            <div className="card border-0">
              <div className='img_placeholder position-relative'>
                <a href={url}>
                  <img 
                    src={imgSrc} 
                    className="card-img-top" 
                    alt={title} 
                    onError={this.handleImageError} // Handle error event
                  />
                </a>
                {/* {author && ( */}
                  <span 
                    className="news-source-badge badge bg-warning text-dark position-absolute top-0 left-0 d-block p-1 border-0 m-1 shadow" 
                    style={{ backgroundColor: 'var(--redTheme)' }}
                  >
                    Source: {author ? author : 'Unknown'}
                  </span>
                {/* )} */}
              </div>
              <div className="card-body">
                <h5 className="card_heading card-title heading">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-primary read_more px-2 py-1">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
