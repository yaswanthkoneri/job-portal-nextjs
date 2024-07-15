"use client";
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Link from 'next/link';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    password: '',
    phone_number: '',
    username: '',
    email:'',
    working_email: '',
    hiring_skills: '',
    how_heard_about_codeunity: '',
    looking_for: ''
  });
  const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const response = await axios.post(`${baseurl}/accounts/register/job-hirer/`, formData);
      console.log('Registration successful:', response.data);
      Swal.fire({
        title: "Registration Successful",
        text: "You have registered successfully!",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      // Optionally redirect or show success message to the user
    } catch (error) {
      console.error('Registration failed:', error);
      Swal.fire({
        title: "Registration Failed",
        text: "Please try again.",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      // Handle error and display appropriate message to the user
    }
  };

  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setFormData({ ...formData, looking_for: option });
  };

  return (
    <div className="min-h-screen bg-gray-800 flex">
      <div className="relative">
        <div className="absolute top-0 left-0 pl-24 pt-16 text-white text-4xl">
          <strong>CodeUnity</strong>
        </div>
        <div className="text-5xl text-white pt-60 pl-24 tracking-wider leading-relaxed">
          <p>
            <strong>
              Get the <span style={{ color: "#9457CF" }}>best engineering</span><br />
              <span style={{ color: "#9457CF" }}>minds </span>
              to bring your product<br />vision to life.
            </strong>
          </p>
        </div>
      </div>
      <div className="ml-16 mt-10 mr-8 mb-8 h-screen border border-white rounded-lg flex-1">
        <div className="h-full overflow-y-auto p-8">
          <div className='text-3xl text-white tracking-wider leading-relaxed font-bold pr-4 mb-8'>
            Connect with Top Engineers
          </div>
          <div className="flex space-x-6">
            <div className="flex flex-col flex-1">
              <label className="text-gray-500 font-medium" htmlFor="first_name">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="first_name"
                type="text"
                placeholder="John"
                className="mt-1 p-2 bg-gray-900 text-white rounded border border-gray-700"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="text-gray-500 font-medium" htmlFor="last_name">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="last_name"
                type="text"
                placeholder="Doe"
                className="mt-1 p-2 bg-gray-900 text-white rounded border border-gray-700"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-gray-500 font-medium" htmlFor="working_email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@personal.com"
              className="mt-1 p-2 bg-gray-900 text-white rounded border border-gray-700"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-gray-500 font-medium" htmlFor="working_email">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              id="working_email"
              type="email"
              placeholder="name@work.com"
              className="mt-1 p-2 bg-gray-900 text-white rounded border border-gray-700"
              value={formData.working_email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-gray-500 font-medium" htmlFor="username">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              id="username"
              type="text"
              placeholder="username"
              className="mt-1 p-2 bg-gray-900 text-white rounded border border-gray-700"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-gray-500 font-medium" htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              className="mt-1 p-2 bg-gray-900 text-white rounded border border-gray-700"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-gray-500 font-medium" htmlFor="phoneNumber">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <div className="flex mt-1">
              <select
                className="p-2 bg-gray-900 text-white rounded-l border border-gray-700"
                style={{ minWidth: '90px' }}
              >
                <option value="India +91">India +91</option>
                {/* Add more options here if needed */}
              </select>
              <input
                id="phone_number"
                type="text"
                placeholder="00000 00000"
                inputMode="numeric"
                className="flex-1 p-2 bg-gray-900 text-white rounded-r border border-gray-700 ml-4"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-gray-500 font-medium">
              What are you looking for? <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4 mt-1">
              <div
                className={`flex items-center bg-gray-900 text-white rounded border p-3 cursor-pointer ${formData.looking_for === "freelance" ? 'border-pink-500' : 'border-gray-700'}`}
                onClick={() => handleOptionSelect("freelance")}
              >
                <img
                  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3fde73c38faef18e5434cf9455ec5a40.cdn.bubble.io%2Ff1719401619808x744048326997721200%2Fclock%25201.png?w=48&amp;h=48&amp;auto=compress&amp;dpr=1.25&amp;fit=max"
                  alt="icon"
                  className="w-8 h-8 mr-3"
                />
                <div className="text-gray-500 font-medium tracking-wide">
                  Freelance Contractor
                </div>
              </div>
              <div
                className={`flex items-center bg-gray-900 text-white rounded border p-3 cursor-pointer ${formData.looking_for === "full_time" ? 'border-pink-500' : 'border-gray-700'}`}
                onClick={() => handleOptionSelect("full_time")}
              >
                <img
                  src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F3fde73c38faef18e5434cf9455ec5a40.cdn.bubble.io%2Ff1719401627806x459444916144273100%2Fbriefcase-business%2520%25282%2529%25201.png?w=48&amp;h=48&amp;auto=compress&amp;dpr=1.25&amp;fit=max"
                  alt="icon"
                  className="w-8 h-8 mr-3"
                />
                <div className="text-gray-500 font-medium tracking-wide">
                  Full Time Employee
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-gray-500 font-medium" htmlFor="hiring_skills">
              What skills are you hiring for? <span className="text-red-500">*</span>
            </label>
            <input
              id="hiring_skills"
              type="text"
              placeholder="Technical Skills Required"
              className="mt-1 p-2 bg-gray-900 text-white rounded border border-gray-700"
              value={formData.hiring_skills}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-gray-500 font-medium" htmlFor="how_heard_about_codeunity">
              How did you hear about CodeUnity? <span className="text-red-500">*</span>
            </label>
            <input
              id="how_heard_about_codeunity"
              type="text"
              placeholder="How did you hear about us"
              className="mt-1 p-2 bg-gray-900 text-white rounded border border-gray-700"
              value={formData.how_heard_about_codeunity}
              onChange={handleChange}
            />
          </div>
          <div className="mt-8">
            <button type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              style={{ backgroundColor: '#9457CF' }}
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
          <div className='mt-8'>
            <div className="bubble-element Text cpaKaPf0 " style={{
              whiteSpace: 'pre-wrap',
              overflow: 'visible',
              fontFamily: 'Space Grotesk',
              fontSize: '14px',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'rgb(136, 136, 137)',
              letterSpacing: '1px',
              wordSpacing: '1px',
              lineHeight: 1.4,
              borderRadius: '0px',
              opacity: 1,
              alignSelf: 'flex-start',
              minWidth: '0px',
              order: 17,
              minHeight: '32px',
              height: 'max-content',
              flexGrow: 0,
              flexShrink: 0,
              width: 'calc(100% + 0px)',
              margin: '-5px 0px 0px',
              zIndex: 211
            }}>
              By submitting, you acknowledge that you have read and agreed to our {' '}
              <a href="https://s3.us-east-2.amazonaws.com/flexiple-marketing/pdf/terms-of-use.pdf" target="_blank"><strong><u><font color="#9457CF">Terms of Service</font></u></strong></a>{' '}
              and {' '}
              <a href="https://s3.us-east-2.amazonaws.com/flexiple-marketing/pdf/privacy-policy.pdf" target="_blank"><u><strong><font color="#9457CF">Privacy Policy</font></strong></u></a>.
            </div>
          </div>
          <div className='justify-center text-center mt-8'>
            <div className="bubble-element Text cpaKaOaE0" style={{ whiteSpace: 'pre-wrap', overflow: 'visible', fontFamily: 'Space Grotesk', fontSize: '20px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.4, borderRadius: 0, opacity: 1, alignSelf: 'center', minWidth: '16px', order: 18, minHeight: '10px', height: 'max-content', flexGrow: 0, flexShrink: 0, width: 'auto', margin: '0px', zIndex: 203 }}>
              Already have an account? <font color="#9457CF"><Link href="/Login">Login</Link></font>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;