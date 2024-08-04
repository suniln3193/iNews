import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }

constructor(){
    super();
    this.state = {
        articles: [],
        loading: false,
        page:1
    }
}

async componentDidMount(){ 
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0585ec3953404745bbbce36cd578507f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData); 
    this.setState({articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false})
}

 handlePrevClick = async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0585ec3953404745bbbce36cd578507f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);  
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
    })

}

handleNextClick = async ()=>{
  console.log("Next"); 
  if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0585ec3953404745bbbce36cd578507f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json() 
      this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles,
          loading: false
      })
  }
}

render() {

    return (
      <div className='news_wrapper'>
          <div className='container-fluid'>
          <h1 className="news_heading text-center pt-2 pb-5 heading"><span>iNews</span> - Top Headlines from <span className='text-capitalize categroyName heading'>{this.props.category}</span></h1>
          {this.state.loading && <Spinner/>}
            <div className='row'>
                {this.state.articles.map((element) => {
                  return(
                    <NewsItems key={element.url} urlToImage={element.urlToImage} title={element.title} description={element.description} url={element.url}/>
                  );
                })}
            </div>
          </div>

          <div className='container-fluid my-5'>
              <div className='row justify-content-center'>
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark prevBtn mx-2" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark nextBtn mx-2" onClick={this.handleNextClick}>Next &rarr;</button>
              </div>
          </div>
      </div>
    )
  }
}
