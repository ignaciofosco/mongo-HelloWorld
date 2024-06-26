import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AdminDashboard() {
  const userLevel = useSelector((state) => state.userLevel);

  useEffect(() => {
    document.title = 'Admin Dashboard';
  }, []);

  const mainContentStyle = { minHeight: 'calc(100vh - 60px)' };

  return (
    <div
      style={mainContentStyle}
      className='flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-200'
    >
      <div className='w-full max-w-xl bg-green-100 dark:bg-gray-800 shadow-md drop-shadow-md rounded-lg flex flex-col items-center justify-center p-8 mb-20'>
        <h1 className='text-3xl font-bold dark:text-white mb-4'>
          Welcome to the Admin Dashboard
        </h1>
        <Link
          to='/admin-dashboard/programming-languages'
          className='bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-gray-900 dark:text-gray-100 font-bold rounded py-2 px-4 mb-3 w-full text-center'
        >
          Manage Programming Languages
        </Link>
        <Link
          to='/admin-dashboard/contact-messages'
          className='bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-gray-900 dark:text-gray-100 font-bold rounded py-2 px-4 mb-3 w-full text-center'
        >
          Manage Contact Messages
        </Link>
        <Link
          to='/admin-dashboard/analytics'
          className='bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-gray-900 dark:text-gray-100 font-bold rounded py-2 px-4 mb-3 w-full text-center'
        >
          Manage Analytics
        </Link>
        {userLevel === 'super' && (
          <Link
            to='/admin-dashboard/users'
            className='bg-blue-400 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-gray-900 dark:text-gray-100 font-bold rounded py-2 px-4 mb-3 w-full text-center'
          >
            Manage Users
          </Link>
        )}
      </div>

      <div className='absolute bottom-12 right-20'>
        <Link
          to='/'
          className='bg-emerald-400 hover:bg-emerald-300 drop-shadow-sm text-black font-bold py-2 px-4 rounded dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700'
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
