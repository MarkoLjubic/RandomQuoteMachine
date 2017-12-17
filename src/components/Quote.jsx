import React from 'react';

import '../styles/Quote.css'
import Button from './Button';

function Quote ({ quote, author, color, getQuote, tweetQuote }) {
  return (
    <div className='quote-wrapper'>
      <div>
        <div className='quote-text' style={{color}}>
          "{quote}"
        </div>
        <div className='quote-author' style={{color}}>
          -{author}
        </div>
      </div>
      <div className='quote-button-wrapper'>
        <Button onClick={tweetQuote} style={{ backgroundColor: color }}>
          Tweet quote
        </Button>
        <Button onClick={getQuote} style={{ backgroundColor: color }}>
          New quote
        </Button>
      </div>
    </div>
  );
}

export default Quote;
