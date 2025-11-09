import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    fetch('http://localhost:3001/auth/signin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email: 'mohitjoshi316a@gmail.com', password: '123456789' }),
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-5xl font-semibold text-white">
      Dashboard 💫🌟
    </div>
  );
};

export default Home;
