'use client';
import { quotes } from '../../quotes.js';
import { useState } from 'react';
import Card from '../components/Card.jsx';
import { Title, align } from '../components/Title.jsx';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [quoteList, setQuoteList] = useState(quotes);
  const [likedQuotes, setLikedQuotes] = useState([]);

  function handleSubmit() {
    const randomIndex = Math.floor(Math.random() * quoteList.length);

    setCurrentQuoteIndex(randomIndex);
  }
  function handleLike() {
    const updatedQuotes = [...quoteList];
    updatedQuotes[currentQuoteIndex].likeCount += 1;
    setQuoteList(updatedQuotes);

    if (!likedQuotes.includes(currentQuoteIndex)) {
      setLikedQuotes([...likedQuotes, currentQuoteIndex]);
    }
  }

  const currentQuote = quoteList[currentQuoteIndex];

  return (
    <main className='flex min-h-dvh items-center justify-center bg-linear-to-r from-amber-400 to-red-800'>
      <Card>
        <div className='flex items-center gap-2 absolute top-4 right-4'>
          {/* Like button */}
          <button onClick={handleLike}>
            {likedQuotes.includes(currentQuoteIndex) ? (
              <FaHeart className='text-red-500 text-2xl transition-transform duration-300 hover:scale-125' />
            ) : (
              <FaRegHeart className='text-black text-2xl transition-transform duration-300 hover:scale-125' />
            )}
          </button>
          <span className='text-slate-700 font-medium'>
            {currentQuote.likeCount}
          </span>
        </div>
        {/* Quote */}
        <Title label={currentQuote.quote} align={align.center} />

        <span className='text-end block mt-4 italic'>
          {currentQuote.author}
        </span>
        {/* New quote button*/}
        <button
          onClick={handleSubmit}
          className='bg-amber-900 hover:bg-amber-600 text-white rounded-lg py-2 mt-4 w-50 m-auto'
        >
          New Quote
        </button>
      </Card>
    </main>
    //
  );
}
