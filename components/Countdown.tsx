import { useEffect, useState } from 'react';

export default function Countdown() {
  const targetDate = new Date('June 21, 2023').getTime();
  const [timeLeft, setTimeLeft] = useState<number>(
    targetDate - new Date().getTime()
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining > 0) {
          setTimeLeft(timeRemaining);
        } else {
          setTimeLeft(0);
          clearInterval(interval);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className='flex items-center gap-1'>
      <div className='bg-white h-12 w-12 text-main font-bold text-3xl flex justify-center items-center relative'>
        <span className='absolute -top-6 text-white text-sm font-normal'>
          DAYS
        </span>
        {days}
      </div>
      <span className='px-2'>:</span>
      <div className='bg-white h-12 w-12 text-main font-bold text-3xl flex justify-center items-center relative'>
        <span className='absolute -top-6 text-white text-sm font-normal'>
          HOURS
        </span>
        {hours}
      </div>
      <span className='px-2'>:</span>
      <div className='bg-white h-12 w-12 text-main font-bold text-3xl flex justify-center items-center relative'>
        <span className='absolute -top-6 text-white text-sm font-normal'>
          MINUTES
        </span>
        {minutes}
      </div>
      <span className='px-2'>:</span>
      <div className='bg-white h-12 w-12 text-main font-bold text-3xl flex justify-center items-center relative'>
        <span className='absolute -top-6 text-white text-sm font-normal'>
          SECONDS
        </span>
        {seconds}
      </div>
    </div>
  );
}
