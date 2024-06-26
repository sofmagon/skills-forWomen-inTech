import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../css/additional-styles/sweetAlert.css';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import SearchForm from '../../partials/actions/SearchForm';
import MentorsCard from '../../partials/directories/MentorsCard';

function Mentors() {

  // Recuperar los datos del usuario desde el local storage
  const user = JSON.parse(localStorage.getItem('user'));

  const url = 'https://mentors-nvg.vercel.app/mentors';
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const obtenerMentores = async () => {
      try {
        const response = await axios.get(url);
        setMentors(response.data);
      } catch (error) {
        console.error('ERROR AL OBTENER DATA:', error);
      }
    };

    obtenerMentores();
  }, []);

  const handleDeleteMentor = async (mentorId) => {
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
          const response = await axios.delete(`${url}/${mentorId}`);

          if (response.status === 200 || response.status === 204) {
            // Después de eliminar el mentor, actualizar la lista
            const updatedMentors = mentors.filter(mentor => mentor.id !== mentorId);
            // Actualizar el estado con los mentores restantes
            setMentors(updatedMentors);

            Swal.fire({
              title: 'Deleted!',
              text: 'The mentor has been deleted',
              icon: 'success',
              showConfirmButton: false,
              timer: 2500
            });
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'There was an error deleting the mentor',
              icon: 'error',
              showConfirmButton: false,
              timer: 2500
            });
          }
        } catch (error) {
          console.error('ERROR AL ELIMINAR MENTOR', error);
          Swal.fire({
            title: 'Error!',
            text: 'There was an error deleting the mentor',
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
                <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Our Mentors</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm />
                {/* Add mentor button + Manejo de permisos */}
                {(user?.userType === 'superadmin' || user?.userType === 'admin' || user?.userType === 'auxiliar') && (
                  <Link to={`/mentors/create`} className="btn bg-[#FD6F63] hover:bg-[#00BCB4] dark:opacity-85 text-white">
                    <svg className="w-4 h-4 fill-current opacity-70 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add Mentor</span>
                  </Link>
                )}
              </div>
            </div>

            <div className="my-4 py-4 flex flex-wrap items-center justify-between">
              <h2 className="text-2xl w-full lg:w-3/4 mb-4 lg:mb-0">Schedule a mentoring session with your favorite specialist</h2>
              <Link to={'#'} className="w-full lg:w-1/4 bg-slate-950 dark:bg-[#F1F1F1] dark:hover:bg-zinc-500 dark:hover:text-white font-bold text-lg text-white dark:text-black text-center rounded-md py-4">Book now</Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {
                mentors.map(mentor => {
                  return (
                    <MentorsCard
                      key={mentor.id}
                      id={mentor.id}
                      name={mentor.name}
                      last_name={mentor.last_name}
                      company={mentor.company}
                      job_position={mentor.job_position}
                      about={mentor.about}
                      residence_country={mentor.residence_country}
                      interest_fields={mentor.interest_fields}
                      expertise_fields={mentor.expertise_fields}
                      linkedin={mentor.linkedin}
                      image={mentor.image}
                      programs={mentor.programs_related.map(program => program.program_name)}
                      onDelete={handleDeleteMentor}
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

export default Mentors;