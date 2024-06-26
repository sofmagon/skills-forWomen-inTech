import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../css/additional-styles/sweetAlert.css';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import SearchForm from '../../partials/actions/SearchForm';
import CompaniesCard from '../../partials/directories/CompaniesCard';

function Companies() {

  // Recuperar los datos del usuario desde el local storage
  const user = JSON.parse(localStorage.getItem('user'));

  const url = 'https://companies-nvg.vercel.app/companies';
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const response = await axios.get(url);
        setCompanies(response.data);
      } catch (error) {
        console.error('ERROR AL OBTENER DATA:', error);
      }
    };

    getCompanies();
  }, []);

  const handleDeleteCompany = async (companyId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, continue',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'alert-confirm',
        cancelButton: 'alert-cancel'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`${url}/${companyId}`);

          if (response.status === 200 || response.status === 204) {
            // Después de eliminar el mentor, actualizar la lista
            const updatedCompanies = companies.filter(company => company.id !== companyId);
            // Actualizar el estado con los mentores restantes
            setCompanies(updatedCompanies);

            Swal.fire({
              title: 'Deleted!',
              text: 'The company has been deleted',
              icon: 'success',
              showConfirmButton: false,
              timer: 2500
            });
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'There was an error deleting the company',
              icon: 'error',
              showConfirmButton: false,
              timer: 2500
            });
          }
        } catch (error) {
          console.error('ERROR AL ELIMINAR COMPAÑÍA', error);
          Swal.fire({
            title: 'Error!',
            text: 'There was an error deleting the company',
            icon: 'error',
            showConfirmButton: false,
            timer: 2500
          });
        }
      }
    });
  };

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
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Our Companies</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm />
                {/* Add company button + Manejo de permisos */}
                {(user?.userType === 'superadmin' || user?.userType === 'admin' || user?.userType === 'auxiliar') && (
                  <Link to={`/companies/create`} className="btn bg-[#FD6F63] hover:bg-[#00BCB4] dark:opacity-85 text-white">
                    <svg className="w-4 h-4 fill-current opacity-70 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add Company</span>
                  </Link>
                )}
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {
                companies.map(company => {
                  return (
                    <CompaniesCard
                      key={company.id}
                      id={company.id}
                      name={company.name}
                      status={company.status}
                      about={company.about}
                      site={company.site}
                      country={company.country}
                      business_activity={company.business_activity}
                      nv_programs={company.nv_programs.map(program => program.name)}
                      nvp_years={company.nv_programs.map(program => program.year)}
                      image={company.image}
                      onDelete={handleDeleteCompany}
                    />
                  )
                })
              }
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Companies;