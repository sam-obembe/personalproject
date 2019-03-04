 SELECT employer_email FROM employer WHERE employer_id IN (
  SELECT employer_id FROM job WHERE job_id = $1
)