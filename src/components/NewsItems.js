import React, { Component } from 'react'

export default class NewsItems extends Component {

  render() {
   
    let {title, description, urlToImage, url} = this.props;

    return (
    
        
        <div className='col-md-4'>
            <div className='newsItems w-100'>
                <div className='newsItemsInner'>
                    <div className="card">
                        <img src={urlToImage} className="card-img-top" alt={title} />
                        <div className="card-body">
                            <h5 className="card-title">{(title.length)>50 ? title.slice(1,50) + "..." : " "}</h5>
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
