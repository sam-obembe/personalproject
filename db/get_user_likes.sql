SELECT * FROM job WHERE job_id IN(
  SELECT job_id FROM matches WHERE user_id = $1 AND user_like = true
)