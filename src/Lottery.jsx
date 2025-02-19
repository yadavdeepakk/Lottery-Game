import { useState } from 'react';

export default function Lottery() {
  const [ticket, setTicket] = useState(null);
  const [message, setMessage] = useState('');

  const generateTicket = () => {
    const newTicket = Math.floor(100 + Math.random() * 900);
    setTicket(newTicket);

    const sum = newTicket
      .toString()
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

    
    if (sum === 15) {
      setMessage('Congratulations! You won the Lottery!');
    } else {
      setMessage('Try Again! Better luck next time.');
    }
  };

  return (
    <>
      <h1>Lottery</h1>
      {ticket !== null && <h2>Lottery Ticket = {ticket}</h2>}
      <button onClick={generateTicket}>Get New Ticket</button>
      {message && <p>{message}</p>}
    </>
  );
}
