import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../css/additional-styles/sweetAlert.css';

import EditMenu from '../../components/DropdownEditMenu';
import ModalBlank from '../../components/ModalBlank';
import ModalGenerations from '../../images/modal-generations.jpg';
import ModalMentors from '../../images/modal-mentors.jpg';

function ProgramsList() {

  const url = 'https://programs-nvg.vercel.app/programs';

  // Cards programas
  const [programa, setPrograma] = useState([]);
  // Modal generaciones
  const [generacion, setGeneracion] = useState([]);
  // Modal mentores
  const [mentor, setMentor] = useState([]);

  useEffect(() => {
    const obtenerProgramas = async () => {
      try {
        const response = await axios.get(url);
        setPrograma(response.data);
      } catch (error) {
        console.error('ERROR AL OBTENER DATA:', error);
      }
    };

    obtenerProgramas();
  }, []);

  const handleDeleteProgram = async (id) => {
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
          const response = await axios.delete(`${url}/${id}`);

          if (response.status === 200 || response.status === 204) {
            // Después de eliminar el programa, actualizar la lista
            const updatedPrograms = programa.filter(program => program.id !== id);
            // Actualizar el estado con los programas restantes
            setPrograma(updatedPrograms);

            Swal.fire({
              title: 'Deleted!',
              text: 'The program has been deleted',
              icon: 'success',
              showConfirmButton: false,
              timer: 2500
            });
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'There was an error deleting the program',
              icon: 'error',
              showConfirmButton: false,
              timer: 2500
            });
          }
        } catch (error) {
          console.error('ERROR AL ELIMINAR PROGRAMA', error);
          Swal.fire({
            title: 'Error!',
            text: 'There was an error deleting the program',
            icon: 'error',
            showConfirmButton: false,
            timer: 2500
          });
        }
      }
    });
  };

  // Actualizar estado generacion
  const obtenerGeneraciones = (generations) => {
    setGeneracion(generations);
  };

  // Actualizar estado mentor
  const obtenerMentores = (mentors) => {
    setMentor(mentors);
  };

  // State de la ventana modal 1
  const [modalOpen, setModalOpen] = useState(false)
  // State de la ventana modal 2
  const [modalOpen2, setModalOpen2] = useState(false)

  // Formatear la fecha, de 06-18-2024 a June 18th, 2024
  const formatDate = (dateString) => {
    // Opciones para formatear la fecha con año, mes completo y día numérico
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // Divide la cadena de fecha en componentes de mes, día y año
    const [month, day, year] = dateString.split('-');
    // Crea un nuevo objeto Date usando el formato ISO (yyyy-mm-dd)
    const date = new Date(`${year}-${month}-${day}T00:00:00`);
    // Convierte la fecha al formato de cadena local usando las opciones definidas
    const formattedDate = date.toLocaleDateString('en-US', options);
    // Obtiene el día del mes como un número entero
    const dayOfMonth = parseInt(day, 10);

    // Función para obtener el sufijo correcto para el día (st, nd, rd, th)
    const daySuffix = (day) => {
      if (day > 3 && day < 21) return 'th'; // Maneja 11-20
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };

    // Reemplaza el día en la cadena formateada con el día y su sufijo
    return formattedDate.replace(dayOfMonth, `${dayOfMonth}${daySuffix(dayOfMonth)}`);
  };

  return (
    <React.Fragment>

      {/* Crear cards dinámicamente */}
      {programa && programa.map(({ id, name, industry, description, sponsor, sponsor_site, sponsor_picture, date_start, date_end, picture, generations, mentors_related }) => (
        <div key={id} className="col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-zinc-700 shadow-lg rounded-sm border border-slate-200 dark:border-zinc-700 overflow-hidden mb-8">
          <div className="flex flex-col h-full">
            {/* Image */}
            <img className="w-full h-48 object-cover" src={picture} alt={`Foto de: ${name}`} />

            {/* Card Content */}
            <div className="grow flex flex-col p-5">

              {/* Menu button */}
              <div className="relative">
                <EditMenu align="right" className="absolute top-0 right-0 inline-flex rounded-full dark:bg-zinc-500">
                  <li>
                    <Link to={`/programs/edit/${id}`} className="font-medium text-md text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3">Edit information</Link>
                  </li>
                  <li>
                    <button onClick={() => handleDeleteProgram(id)} className="font-medium text-md text-[#FD6F63] flex py-1 px-3" to="#0">Remove</button>
                  </li>
                </EditMenu>
              </div>

              {/* Card body */}
              <div className="grow text-lg">
                {/* Header: name */}
                <header className="mb-5">
                  <h3 className="text-lg text-slate-800 dark:text-slate-100 font-semibold w-[90%]">{name}</h3>
                </header>
                {/* Details: description, industry, sponsor site, sponsor picture, date start, date end */}
                <p className='mb-5'>{description}</p>
                <p className='font-normal mb-5'>Industry area: <span className='font-bold'>{industry}</span></p>
                <div className='mb-5'>
                  <p className='font-normal mb-5'>Sponsored by: <a className="font-bold hover:text-[#00BCB4]" href={`${sponsor_site}`} target='_blank' rel='noopener noreferrer'>{sponsor}</a></p>
                  <img className='d-block' src={sponsor_picture} width={80} alt={`${sponsor}' Logo`} />
                </div>
                <p className='font-normal mb-5'>Date start: <span className='font-bold'>{formatDate(date_start)}</span></p>
                <p className='font-normal mb-5'>Date end: <span className='font-bold'>{formatDate(date_end)}</span></p>
              </div>

              {/* Buttons: Generations & Know the mentors */}
              <div>
                {/* Modal: GENERACIONES */}
                <div>
                  {/* Start */}
                  <button
                    className="mb-3 font-medium text-lg btn-sm w-full bg-[#FD6F63] dark:opacity-85 hover:bg-[#000] text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      obtenerGeneraciones(generations);
                      setModalOpen(true);
                    }}>
                    Generations
                  </button>
                  <ModalBlank id="news-modal" modalOpen={modalOpen} setModalOpen={setModalOpen}>
                    <div className="relative">
                      <img className="w-full" src={ModalGenerations} width="460" height="200" alt="Modal background" />
                      {/* Close button */}
                      <button className="absolute top-0 right-0 mt-5 mr-5 text-slate-50 hover:text-white" onClick={(e) => { e.stopPropagation(); setModalOpen(false); }}>
                        <div className="sr-only">Close</div>
                        <svg className="w-4 h-4 fill-current">
                          <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-5">
                      {/* Modal header */}
                      <div className="mb-6">
                        <div className="text-xl font-semibold text-slate-800 dark:text-slate-100">These are some of the generations that have successfully completed this program</div>
                      </div>
                      {/* Modal content */}
                      <div className="text-lg mb-5">
                        <div className="space-y-2 grid grid-cols-2">
                          {/* Map over generations and render each year */}
                          {generacion && generacion.map((generation, index) => (
                            <p key={index}>{generation.year}</p>
                          ))}
                        </div>
                      </div>
                      {/* Modal footer */}
                      <div className="flex flex-wrap justify-end space-x-2">
                        <button className="btn bg-[#000] hover:bg-[#FD6F63] text-white dark:bg-[#FD6F63] dark:hover:bg-[#000]" onClick={(e) => { e.stopPropagation(); setModalOpen(false); }}>Great, congrats!</button>
                      </div>
                    </div>
                  </ModalBlank>
                  {/* End */}
                </div>

                {/* Modal MENTORES */}
                <div>
                  {/* Start */}
                  <button
                    className="mb-0 font-medium text-lg btn-sm w-full bg-[#00BCB4] dark:opacity-90 hover:bg-[#000] text-white" aria-controls="news-modal"
                    onClick={(e) => {
                      e.stopPropagation();
                      obtenerMentores(mentors_related);
                      setModalOpen2(true);
                    }}>
                    Know the mentors
                  </button>
                  <ModalBlank id="news-modal" modalOpen={modalOpen2} setModalOpen={setModalOpen2}>
                    <div className="relative">
                      <img className="w-full" src={ModalMentors} width="460" height="200" alt="Modal background" />
                      {/* Close button */}
                      <button className="absolute top-0 right-0 mt-5 mr-5 text-slate-50 hover:text-white" onClick={(e) => { e.stopPropagation(); setModalOpen2(false); }}>
                        <div className="sr-only">Close</div>
                        <svg className="w-4 h-4 fill-current">
                          <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-5">
                      {/* Modal header */}
                      <div className="mb-8">
                        <div className="text-xl font-semibold text-slate-800 dark:text-slate-100">These are the minds in charge of giving you all this knowledge</div>
                      </div>
                      {/* Modal content */}
                      {/* Map over mentors and render mentor information */}
                      {mentor && mentor.map((mentor, index) => (
                        <div key={index} className='flex items-center gap-x-5 mb-7 last-of-type:mb-0'>
                          <div>
                            <img width={110} src={mentor.mentor_picture} alt="Mentor Avatar" />
                          </div>
                          <div>
                            <p className='font-medium'>{mentor.mentor_name}</p>
                            <p className='font-normal'>{mentor.mentor_job_position}</p>
                            <p className='font-normal'>{mentor.mentor_company}</p>
                          </div>
                        </div>
                      ))}
                      {/* Modal footer */}
                      <div className="flex flex-wrap justify-end space-x-2">
                        <button className="btn bg-[#000] hover:bg-[#00BCB4] text-white dark:bg-[#00BCB4] dark:hover:bg-[#000]" onClick={(e) => { e.stopPropagation(); setModalOpen2(false); }}>Wow, I like it</button>
                      </div>
                    </div>
                  </ModalBlank>
                  {/* End */}
                </div>

              </div>
            </div>
          </div>
        </div>
      ))
      }

    </React.Fragment>
  );
}

export default ProgramsList;