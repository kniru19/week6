let jobArray = [];

function addJob(title, company, salary, location) {
  if (!title || !company || !salary || !location) {
    return false;
  }

  const newJob = { id: jobArray.length + 1, title, company, salary, location };
  jobArray.push(newJob);
  return newJob;
}

function readJobs() {
  return jobArray;
}

// TODO: Implement updateJob(id, updatedDetails) function

module.exports = { addJob, readJobs, jobArray };