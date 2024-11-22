import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Quote {
  q: string;
  a: string;
}

const defaultQuotes: Quote[] = [
  { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt" },
  { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
  { q: "Strive not to be a success, but rather to be of value.", a: "Albert Einstein" },
];

export function InspirationQuote() {
  const [quotes, setQuotes] = useState<Quote[]>(defaultQuotes);
  const [currentQuote, setCurrentQuote] = useState<Quote>(defaultQuotes[0]);
  const [isVisible, setIsVisible] = useState(true);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('https://zenquotes.io/api/quotes');
      if (!response.ok) throw new Error('Failed to fetch quotes');
      const data: Quote[] = await response.json();
      setQuotes(data.slice(0, 50));
    } catch (error) {
      console.error('Error fetching quotes:', error);
      setQuotes(defaultQuotes);
    }
  };

  useEffect(() => {
    fetchQuotes();
    const refreshInterval = setInterval(fetchQuotes, 4 * 60 * 60 * 1000); // Refresh every 4 hours
    return () => clearInterval(refreshInterval);
  }, []);

  useEffect(() => {
    const rotateQuote = () => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        setIsVisible(true);
      }, 1000);
    };

    const rotationInterval = setInterval(rotateQuote, 2 * 60 * 1000); // Rotate every 2 minutes
    return () => clearInterval(rotationInterval);
  }, [quotes]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-8 right-8 max-w-xs glassmorphism rounded-lg p-4 text-white/90"
        >
          <p className="text-sm italic mb-2">"{currentQuote.q}"</p>
          <p className="text-xs text-right">- {currentQuote.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

