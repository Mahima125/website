import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-black h-screen'>
      <Link to="/addCase">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Add Case
        </button>
      </Link>
      <Link to="/bareAct">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Bare Act
        </button>
      </Link>
    </div>
  );
};

export default Home;
