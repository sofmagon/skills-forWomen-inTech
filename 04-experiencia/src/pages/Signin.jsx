import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../css/additional-styles/sweetAlert.css';

import AuthImage from '../images/auth-image.jpg';
import salmonLogo from '../images/logos/NVG-salmon.png';
import rocketIcon from '../images/icons/NVG-rocket-icon.png';

function Signin() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const url = 'https://users-nvg.vercel.app/users';

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get(url);
        setUsers(response.data);
      } catch (error) {
        console.log('ERROR AL OBTENER DATA:', error);
      }
    }

    obtenerUsuarios();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const user = users.find(
      (element) => element.email === data.email && element.password === data.password
    );

    if (!user) {
      Swal.fire({
        title: "Sorry, given data is wrong",
        icon: 'error',
        confirmButtonText: 'Try again',
        customClass: {
          confirmButton: 'alert-error'
        }
      });
    } else {
      // Exitoso: almacenar los datos en Local Storage
      const userData = {
        email: user.email,
        userType: user.userType,
        name: user.name,
        lastname: user.lastname
      };

      localStorage.setItem('user', JSON.stringify(userData));

      Swal.fire({
        title: "Welcome",
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'alert-success'
        }
      }).then(() => {
        navigate(`/`);
      });
    }
  });

  return (
    <main className="bg-white dark:bg-zinc-800">

      <div className="relative md:flex">

        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">

            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <img src={salmonLogo} width={100} className='mt-8' alt="New Ventures Logo" />
              </div>
            </div>

            <div className="max-w-sm mx-auto w-full px-4 py-8">
              <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Welcome back!</h1>
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-md font-medium mb-1" htmlFor="email">Email Address</label>
                    <input id="email" className="form-input w-full text-lg" type="email" {...register('email', {
                      required: {
                        value: true,
                        message: 'This field is mandatory'
                      },
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'The email format is invalid'
                      }
                    })} />
                    {errors.email && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.email.message}</span>}
                  </div>
                  <div>
                    <label className="block text-md font-medium mb-1" htmlFor="password">Password</label>
                    <input id="password" className="form-input w-full text-lg" type="password" {...register('password', {
                      required: {
                        value: true,
                        message: 'Please, enter your password'
                      }
                    })} />
                    {errors.password && <span className='text-[#FD6F63] block mt-2 text-md'>{errors.password.message}</span>}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <Link className="text-sm underline hover:no-underline" to="/reset-password">Forgot Password?</Link>
                  </div>
                  <button className="btn bg-[#00BCB4] hover:bg-[#000] dark:hover:bg-[#FD6F63] text-white ml-3">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
          <img className="object-cover object-center w-full h-full" src={AuthImage} width="760" height="1024" alt="Authentication" />
          <img className="absolute top-1/4 left-0 -translate-x-1/2 ml-0 hidden lg:block" src={rocketIcon} width="125" height="210" alt="Authentication decoration" />
        </div>
      </div>
    </main>
  );
}

export default Signin;