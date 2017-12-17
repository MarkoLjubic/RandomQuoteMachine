import React, { Component } from 'react';
import axios from 'axios';

import { quotesApi, twitter, quotesHeader, getColor } from './utilities/config';
import Loader from './components/Loader';
import Quote from './components/Quote';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      quote: '',
      author: '',
      category: '',
      color: '',
    }

    this.getQuote = this.getQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    axios({
      method: 'get',
      url: quotesApi,
      headers: quotesHeader,
    })
    .then(response => {
      const { quote, author, category } = response.data;

      this.setState({
        quote,
        author,
        category,
        color: getColor(),
      });
    })
    .catch(error => console.log(error));
  }

  tweetQuote() {
    window.open(twitter(`"${this.state.quote}" ${this.state.author} `));
  }


  render() {
    const {
      quote,
      author,
      color,
    } = this.state;

    const style = {
      backgroundColor: color,
    };

    const screenHeight = {
      height: window.screen.height,
    };
    return (
      <div className='app' style={{...style, ...screenHeight}}>
        {quote
          ? <Quote
              quote={quote}
              author={author}
              color={color}
              getQuote={this.getQuote}
              tweetQuote={this.tweetQuote}
            />
          : <Loader />
        }
      </div>
    );
  }
}

export default App;
