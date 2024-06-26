import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProfileBg from '../../images/profile-bg.jpg';
import ProgramsOffered from '../../partials/directories/ProgramsOffered';

function ProfileBody({ mentorId }) {

  const [mentorData, setMentorData] = useState(null);

  useEffect(() => {
    const obtenerDataMentor = async () => {
      try {
        const response = await axios.get(`https://mentors-nvg.vercel.app/mentors/${mentorId}`);
        setMentorData(response.data);
      } catch (error) {
        console.error('ERROR AL OBTENER DATA:', error);
      }
    };

    obtenerDataMentor();
  }, [mentorId]);

  if (!mentorData) {
    return <p className='text-3xl font-extrabold'>Loading...⏳</p>;
  }

  return (
    <div
      className={`grow flex flex-col md:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      {/* Profile background */}
      <div className="relative h-56 bg-slate-200 dark:bg-slate-900">
        <img className="object-cover h-full w-full" src={ProfileBg} width="979" height="220" alt="Profile background" />
      </div>

      {/* Content */}
      <div className="relative px-4 sm:px-6 pb-8">
        {/* Pre-header */}
        <div className="-mt-16 mb-6 sm:mb-3">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-end">
            {/* Avatar */}
            <div className="inline-flex -ml-1 -mt-1 mb-4 sm:mb-0">
              <img className="rounded-full border-4 border-white dark:border-slate-900" src={mentorData.image} width="128" height="128" alt="Avatar" />
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="text-center sm:text-left mb-6">
          {/* Name */}
          <div className="inline-flex items-start mb-2">
            <h1 className="text-2xl text-slate-800 dark:text-slate-100 font-bold">{mentorData.name} {mentorData.last_name}</h1>
          </div>
          {/* Bio */}
          <div className="text-lg mb-3">{mentorData.job_position}</div>
          {/* Meta */}
          <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
            <div className="flex items-center">
              <svg className="w-4 h-4 fill-current shrink-0 text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
              </svg>
              <span className="text-lg font-medium whitespace-nowrap text-slate-500 dark:text-slate-400 ml-2">{mentorData.residence_country}</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 fill-current shrink-0 text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
              </svg>
              <a className="text-lg font-bold whitespace-nowrap text-[#00BCB4] hover:text-[#000] dark:hover:text-indigo-400 ml-2" href={`${mentorData.linkedin}`} target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 fill-current shrink-0 text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
              </svg>
              <a className="text-lg font-bold whitespace-nowrap text-[#FD6F63] hover:text-[#000] dark:hover:text-indigo-400 ml-2" href={`${mentorData.cv}`} target='_blank' rel='noopener noreferrer'>
                Resume
              </a>
            </div>
          </div>
        </header>

        {/* Profile content */}
        <div className="mt-10 flex flex-col xl:flex-row xl:space-x-16">
          {/* Main content */}
          <div className="flex-1 space-y-5 mb-8 xl:mb-0">
            {/* About Me */}
            <div>
              <h2 className="text-slate-800 dark:text-slate-100 font-semibold mb-2 text-lg">About Me</h2>
              <div className="text-lg space-y-2">
                <p>{mentorData.about}</p>
              </div>
            </div>
            {/* Expertese & Contact data */}
            <div className='grid grid-cols-2'>
              <div>
                <h2 className="text-slate-800 dark:text-slate-100 font-semibold mb-2 text-lg">Interested in</h2>
                <p className="text-lg space-y-2">{mentorData.interest_fields}</p>
              </div>
              <div>
                <h2 className="text-slate-800 dark:text-slate-100 font-semibold mb-2 text-lg">Experience with</h2>
                <p className="text-lg space-y-2">{mentorData.expertise_fields}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Acceleration programs offered */}
        <div className="max-w-3xl mx-auto mt-10">
          <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-6">Programs Offered 🚀</h3>
          {/* Create cards dynamically */}
          <div className="space-y-6">
            {mentorData.programs_related ? (
              mentorData.programs_related.map((program) => (
                <ProgramsOffered
                  key={program.program_name} // Usando program_name como clave única
                  program={program.program_name} // Accediendo directamente a la propiedad program_name
                />
              ))
            ) : (
              <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-medium mb-6">No se encontraron programas inscritos.</h3>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfileBody;
