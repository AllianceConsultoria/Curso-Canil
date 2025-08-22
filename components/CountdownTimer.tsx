import React, { useState, useEffect } from 'react';

const getTargetDate = () => {
    // Set target date 3 days from the moment the component mounts for the first time
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
};

const CountdownTimer: React.FC = () => {
    const [targetDate] = useState(getTargetDate());

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);
    
    const timerComponents = [
      { label: 'Dias', value: timeLeft.days },
      { label: 'Horas', value: timeLeft.hours },
      { label: 'Minutos', value: timeLeft.minutes },
      { label: 'Segundos', value: timeLeft.seconds },
    ];
    
    const hasTimeLeft = Object.values(timeLeft).some(value => value > 0);

    return (
        <div className="mb-6">
            <p className="text-center text-lg font-semibold text-yellow-400 mb-2">🔥 Esta oferta termina em:</p>
            {hasTimeLeft ? (
                <div className="grid grid-cols-4 gap-2 md:gap-4 p-4 bg-gray-900/50 rounded-lg">
                    {timerComponents.map(({label, value}) => (
                         <div key={label} className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-yellow-400">
                                {String(value).padStart(2, '0')}
                            </div>
                            <div className="text-xs uppercase text-gray-400">{label}</div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-2xl font-bold text-red-500 p-4 bg-gray-900/50 rounded-lg">Oferta Encerrada!</div>
            )}
        </div>
    );
};

export default CountdownTimer;
