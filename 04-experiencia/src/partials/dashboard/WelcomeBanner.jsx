import React from 'react';

function WelcomeBanner() {
  // Recuperar los datos del usuario desde el local storage
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="relative bg-[#000] dark:bg-[#00BCB4] p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-[#FFF] dark:text-slate-100 font-bold mb-1 text-center">Hey {user ? user.name : ''} {user ? user.lastname : ''}! Welcome to New Ventures</h1>
      </div>
    </div>
  );
}

export default WelcomeBanner;
