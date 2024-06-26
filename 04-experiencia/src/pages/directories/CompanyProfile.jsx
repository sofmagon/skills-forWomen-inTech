import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import EnrolledPrograms from '../../partials/directories/EnrolledPrograms';

import CompanyBg from '../../images/company-bg.jpg';

function CompanyProfile() {

  const { companyId } = useParams();

  const url = 'https://companies-nvg.vercel.app/companies';
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    const getCompanieData = async () => {
      try {
        const response = await axios.get(`${url}/${companyId}`);
        setCompanyData(response.data);
      } catch (error) {
        console.error('ERROR AL OBTENER DATA:', error);
      }
    };

    getCompanieData();
  }, [companyId]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          {/* Profile background */}
          <div className="h-56 bg-slate-200 dark:bg-slate-900">
            <img className="object-cover h-full w-full" src={CompanyBg} width="2560" height="440" alt="Company background" />
          </div>

          {/* Header */}
          <header className="text-center bg-slate-50 dark:bg-slate-800/20 pb-6 border-b border-slate-200 dark:border-slate-700">
            <div className="px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl mx-auto">
                {/* Avatar */}
                <div className="-mt-12 mb-2">
                  <div className="inline-flex -ml-1 -mt-1 sm:mb-0">
                    <img className="rounded-full border-4 border-white dark:border-slate-900" src={companyData.image} width="104" height="104" alt="Avatar" />
                  </div>
                </div>

                {/* Company name and info */}
                <div className="mb-4">
                  <h2 className="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-2">{companyData.name}</h2>
                  <p className='text-lg mb-2'>{companyData.about}</p>
                  <p className='text-lg font-bold text-[#FD6F63]'>Status: {companyData.status ? 'Active' : 'Inactive'}</p>
                </div>

                {/* Meta */}
                <div className="inline-flex flex-wrap justify-center sm:justify-start space-x-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 fill-current shrink-0 text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                      <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
                    </svg>
                    <span className="text-lg font-bold whitespace-nowrap text-slate-500 dark:text-slate-400 ml-2">{companyData.country}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 fill-current shrink-0 text-slate-400 dark:text-slate-500" viewBox="0 0 16 16">
                      <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                    </svg>
                    <a className="text-lg whitespace-nowrap font-bold text-[#00BCB4] hover:text-[#000] dark:hover:text-indigo-400 ml-2" href={`${companyData.site}`} target='_blank' rel='noopener noreferrer'>
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-6">Enrolled Programs 🚀</h3>

              {/* Acceleration programs enrolled */}
              <div className="space-y-6">
                {companyData.nv_programs ? (
                  companyData.nv_programs.map((program) => (
                    <EnrolledPrograms
                      key={program.name} // Usando el nombre como clave única
                      nv_program={program.name} // Accediendo directamente a la propiedad name
                      nvp_year={program.year} // Accediendo directamente a la propiedad year
                    />
                  ))
                ) : (
                  <h3 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-medium mb-6">No se encontraron programas inscritos.</h3>
                )}
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CompanyProfile;