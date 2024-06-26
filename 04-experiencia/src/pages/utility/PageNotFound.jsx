import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';

import error404 from '../../images/icons/error-404.png';

function PageNotFound() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-zinc-900">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="max-w-2xl m-auto mt-16">
              <div className="text-center px-4">
                <div className="inline-flex mb-8">
                  <img className="dark:hidden" src={error404} width="176" height="176" alt="404 illustration" />
                  <img className="hidden dark:block" src={error404} width="176" height="176" alt="404 illustration dark" />
                </div>
                <h3 className='mb-8 text-2xl font-semibold'>Oops! Sorry, something went wrong</h3>
                <Link to="/" className="btn bg-[#FD6F63] hover:bg-[#00BCB4] text-white">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PageNotFound;