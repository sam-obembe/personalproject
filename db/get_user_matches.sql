SELECT employer.employer_name, employer.employer_bio, employer.employer_number, employer.employer_email, employer.city, employer.state, employer.country,
job.job_id,job.title, job.price, job.duration, job.description,job_scopes.scope_name, matches.user_id, matches.job_id
FROM job 
JOIN employer ON job.employer_id = employer.employer_id
JOIN matches ON job.job_id = matches.job_id
JOIN job_scopes ON job.scope_id = job_scopes.scope_id
AND matches.user_id = $1 AND matches.match = true


-- SELECT * FROM job WHERE job_id IN(
--   SELECT job_id FROM matches WHERE match=true AND user_id = $1
-- )