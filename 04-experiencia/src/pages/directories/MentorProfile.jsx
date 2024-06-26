import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import ProfileBody from '../../partials/directories/ProfileBody';

function MentorProfile() {

  const { mentorId } = useParams();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-slate-900">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="relative flex">

            {/* Profile body */}
            <ProfileBody mentorId={mentorId} />

          </div>
        </main>

      </div>

    </div>
  );
}

export default MentorProfile;