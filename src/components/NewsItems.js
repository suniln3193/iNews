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
    const { title, description, url, author, publishedAt } = this.props;
    const { imgSrc } = this.state;

    return (
      <div className='col-md-3'>
        <a href={url} className='text-decoration-none' style={{color : 'var(--secondarydarkTheme)'}}>
            <div className='newsItems w-100'>
              <div className='newsItemsInner'>
                <div className="card border-0">
                  <div className='img_placeholder position-relative'>
                      <img 
                        loading="lazy" 
                        src={imgSrc} 
                        className="card-img-top" 
                        alt={title} 
                        onError={this.handleImageError} // Handle error event
                      />
                      <span 
                        className="news-source-badge badge bg-warning text-dark position-absolute top-0 left-0 d-block p-1 border-0 m-1 shadow" 
                        style={{ backgroundColor: 'var(--redTheme)' }}
                      >
                        Source: {author ? author : 'Unknown'}
                      </span>
                  </div>
                  <div className="card-body">
                    <h5 className="card_heading card-title heading">{title}</h5>
                    <p className="card-text">{description}</p>
                  </div>
                  <div className='newsCardFooter border-top px-3 py-3 position-relative'>
                    <p  className='mb-0 h-auto publicDate'><b>{` ${new Date(publishedAt).toLocaleString('default', { month: 'short' })} ${new Date(publishedAt).getDay()}, ${new Date(publishedAt).getFullYear()}`}</b></p>
                    <div className='arrowR position-absolute'>
                      <svg className='w-100' xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </a>
      </div>
    );
  }
}
