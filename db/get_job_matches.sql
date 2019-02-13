SELECT * FROM users WHERE user_id IN(
  SELECT user_id FROM matches WHERE match=true AND job_id =$1
)