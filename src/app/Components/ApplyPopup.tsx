import React, { useState } from 'react';
import axios from 'axios';
import ClickOutsideDiv from './ClickoutsideDiv';

const ApplyPopup = ({ job, onClose }) => {
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [resumeError, setResumeError] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
    setResumeError(false); // Reset resume error when file is selected
  };

  const handleCoverLetterChange = (e) => {
    setCoverLetter(e.target.value);
  };

  const handleSubmit = async () => {
    if (!resume) {
      setResumeError(true); // Set resume error if resume is not selected
      return;
    }

    console.log('Submitting application for job:', job); // Log job details for debugging

    const formData = new FormData();
    formData.append('job', job.id); // Ensure job_id is correctly passed to backend
    formData.append('cover_letter', coverLetter);
    formData.append('resume', resume);

    console.log('Type of job.id:', typeof job.id); // Should be 'number' if it's an integer
console.log('Value of job.id:', job.id); // Check the actual value


    const token = localStorage.getItem('access_token');
    if (!token) {
      console.error('No access token found');
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/jobs/apply/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`, // Ensure correct format
        },
      });

      console.log('Application submitted successfully:', response.data);
      onClose(); // Close the popup after successful submission
    } catch (error) {
      console.error('Error submitting application:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
      // Handle error cases, e.g., display error messages to the user
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <ClickOutsideDiv cls="bg-[#3c3d71] p-6 rounded-lg shadow-lg w-96 text-white" onOutsideClick={onClose}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Apply for {job.position} position</h2>
          <button className='text-[#ff1717]' onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <label className="block">Resume<span className="text-red-500">*</span></label>
          <input
            type="file"
            onChange={handleResumeChange}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${resumeError ? 'border-red-500' : ''}`}
            required
          />
          {resumeError && <p className="text-[#ff005f] text-sm mt-1">Please upload your resume.</p>}
        </div>
        <div className="mb-4">
          <label className="block">Cover Letter</label>
          <textarea
            className="placeholder-white w-full bg-[#a3a3a3] border border-gray-300 rounded-md p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            value={coverLetter}
            onChange={handleCoverLetterChange}
            placeholder="Write your cover letter here..."
          />
        </div>
        <button
          className="bg-[#ff005f] text-white py-2 px-4 rounded-md"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </ClickOutsideDiv>
    </div>
  );
};

export default ApplyPopup;
