UPDATE job
SET retained_user = $1
WHERE job_id = $2