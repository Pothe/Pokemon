import React, { useState, useEffect, useMemo } from 'react';

// Simulated API call
const fetchJobs = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Frontend Developer', company: 'Google' },
        { id: 2, title: 'Backend Engineer', company: 'Amazon' },
        { id: 3, title: 'Full Stack Developer', company: 'Meta' },
        { id: 4, title: 'DevOps Engineer', company: 'Netflix' },
        { id: 5, title: 'Data Scientist', company: 'Microsoft' },
        // ...more jobs
      ]);
    }, 1000)
  );

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch jobs on component mount
  useEffect(() => {
    fetchJobs().then((data) => {
      setJobs(data);
      setLoading(false);
    });
  }, [jobs]);

  // Memoized filter logic
  const filteredJobs = useMemo(() => {
   
    return jobs.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, jobs]);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />

      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <ul>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <li key={job.id} className="mb-3 p-3 border rounded">
                <strong>{job.title}</strong> at {job.company}
              </li>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default JobBoard;
