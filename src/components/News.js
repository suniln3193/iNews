import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      hasMore: true,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - iNews`;
  }

  async updateNews() {
    this.props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      hasMore: parsedData.articles.length > 0,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    if (this.state.loading || !this.state.hasMore) return;

    this.setState({ loading: true });
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let url = `https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/${this.props.country}.json`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page + 1,
      loading: false,
      hasMore: parsedData.articles.length >= this.props.pageSize,
    });
  };

  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<Spinner />}
        >
          <div className="news_wrapper">
            <h1 className="news_heading text-center pt-2 pb-5 heading">
              <span>iNews</span> - Top{" "}
              <span className="text-capitalize categroyName heading">
                {this.props.category}
              </span>{" "}
              Headlines
            </h1>
            {this.state.loading && !this.state.hasMore && <Spinner />}
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                  return (
                    <NewsItems
                      key={element.url}
                      urlToImage={element.urlToImage}
                      title={element.title}
                      description={element.description}
                      url={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
