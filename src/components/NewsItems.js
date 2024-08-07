import React, { Component } from 'react'
import placeholder from '../img/placeholder.jpg'


export default class NewsItems extends Component {

  render() {
    let {title, description, urlToImage, url, author} = this.props;

    return (
        <div className='col-md-3'>
            <div className='newsItems w-100'>
                <div className='newsItemsInner'>
                    <div className="card border-0">
                    <div className='img_placeholder position-relative'>
                        <img 
                            src={urlToImage ? urlToImage : placeholder} 
                            className="card-img-top" 
                            alt={title} 
                        />
                        {author && (
                            <span 
                            className="badge bg-warning text-dark position-absolute top-0 left-0 d-block p-1 border-0" 
                            style={{ backgroundColor: 'var(--redTheme)' }}
                            >
                            {author}
                            </span>
                        )}
                        </div>
                        <div className="card-body">
                            <h5 className="card_heading card-title heading">{title}</h5>
                            {/* <p className="card-text">{description}</p> */}
                            <p className="card-text">{description}</p>
                            <a href={url} className="btn btn-primary">Read More</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
  }
}
