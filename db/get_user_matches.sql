SELECT * FROM job WHERE job_id IN(
  SELECT job_id FROM matches WHERE match=true AND user_id = $1
)