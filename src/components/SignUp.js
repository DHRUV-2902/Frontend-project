import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom'


export default function SignUp() {

  const nav=useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2:'',
    },
    onSubmit: (values) => {
     
      localStorage.setItem('formData', JSON.stringify(values));
      alert(JSON.stringify(values));
      
    },
    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = 'Required';
      }

      if (!values.lastName) {
        errors.lastName = 'Required';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      }

      if (!values.password2) {
        errors.password2 = 'Required';
      } else if (values.password !== values.password2) {
        errors.password2 = 'Passwords do not match';
      }

    

      return errors;
    },
  });

  return (
    
    <div className="min-h-screen " style={{ backgroundImage: 'linear-gradient(115deg, #F39FDC, #9AB5E1 )' }}>
      <br/><br/>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" id="img">
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white"> Hello,Friends! <br/> start your journey with us<br/><br/><button className='w-full bg-purple-500 py-3 text-center text-white'><Link to="/login">login</Link></button></p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only takes a minute
            </p>
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-400 py-1 px-2"
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className='text-red-900'>{formik.errors.firstName}</div>
                ) : null}

                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className='text-red-900'>{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className='text-red-900'>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder=" confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  id="password2"
                  name="password2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password2}
                />
                {formik.touched.password2 && formik.errors.password2 ? (
                  <div className='text-red-900'>{formik.errors.password2}</div>
                ) : null}
              </div>

              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &amp; <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                </span>
              </div>

              <div className="mt-5">
                <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
