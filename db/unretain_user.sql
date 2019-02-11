UPDATE job
SET retained_user = NULL
WHERE job_id = $1