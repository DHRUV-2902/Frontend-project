import React, { useState } from 'react';

// Assuming you have a data array of locations
const locations = ['New York', 'Los Angeles', 'London', 'Tokyo', 'Sydney'];

// Assuming you have a data array of candidates with their information
const candidatesData = [
  { id: 1, name: 'John Doe', location: 'New York', jobRoles: ['Software Developer'] },
  { id: 2, name: 'Jane Smith', location: 'Los Angeles', jobRoles: ['UI/UX Designer'] },
  // ...
];

const Candidate = () => {
  const [location, setLocation] = useState('');
  const [jobRoles, setJobRoles] = useState([]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleJobRolesChange = (event) => {
    const selectedJobRoles = Array.from(event.target.selectedOptions, (option) => option.value);
    setJobRoles(selectedJobRoles);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform the search based on location and jobRoles
    const filteredCandidates = candidatesData.filter((candidate) => {
      const hasMatchingLocation = location === '' || candidate.location.toLowerCase() === location.toLowerCase();
      const hasMatchingJobRole = jobRoles.length === 0 || candidate.jobRoles.some((role) => jobRoles.includes(role));
      return hasMatchingLocation && hasMatchingJobRole;
    });

    // Display the search results (e.g., console.log or update state to render the results in the UI)
    alert(filteredCandidates);
  };

  return (
    <div className="min-h-screen "style={{ backgroundImage: 'linear-gradient(115deg, #F39FDC, #9AB5E1)' }}>
      <br/><br/><br/><br/>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl mb-4">Candidate Search</h2>
        <form onSubmit={handleSearch}>
          <div className="mb-4">
            <label htmlFor="location" className="block font-medium mb-1">Location:</label>
            <select
              id="location"
              value={location}
              onChange={handleLocationChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="jobRoles" className="block font-medium mb-1">Job Roles:</label>
            <select
              multiple
              id="jobRoles"
              value={jobRoles}
              onChange={handleJobRolesChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="Software Developer">Software Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              {/* Add more job role options as needed */}
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Candidate;
