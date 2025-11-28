'use client';

import { createContext, useState, useContext } from 'react';
import { quotes as quotesArray } from '../../quotes.js';

const QuotesContext = createContext(undefined);
const QuotesDispatchContext = createContext(undefined);

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([
    ...quotesArray,
    { quote: 'Dummy quote', author: 'Dummy quote author', likeCount: 0 },
  ]);

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [likedQuotes, setLikedQuotes] = useState([]);

  function handleUpdateQuotes(newQuote) {
    setQuotes((prev) => [...prev, { ...newQuote, likeCount: 0 }]);
  }

  function handleRandomQuote() {
    setCurrentQuoteIndex(Math.floor(Math.random) * quotes.length);
  }

  function handleLike() {
    setQuotes((prev) => {
      const updated = [...prev];
      updated[currentQuoteIndex].likeCount += 1;
      return updated;
    });

    if (!likedQuotes.includes(currentQuoteIndex)) {
      setLikedQuotes((prev) => [...prev, currentQuoteIndex]);
    }
  }

  return (
    <QuotesContext.Provider value={{ quotes, currentQuoteIndex, likedQuotes }}>
      <QuotesDispatchContext.Provider
        value={{
          handleUpdateQuotes,
          handleRandomQuote,
          handleLikeQuote,
          setQuotes,
          setCurrentQuoteIndex,
          likedQuotes,
        }}
      >
        ,{children}
      </QuotesDispatchContext.Provider>
    </QuotesContext.Provider>
    //-
  );
};
export const useQuotesContext = () => {
  const ctx = useContext(QuotesContext);
  if (!ctx)
    throw new Error('useQuotesContext must be used inside QuotesProvider');
  return ctx;
};
export const useQuotesDispatchContext = () => {
  const ctx = useContext(QuotesDispatchContext);
  if (!ctx)
    throw new Error(
      'useQuotesDispatchContext must be used inside QuotesProvider',
    );
  return ctx;
};
