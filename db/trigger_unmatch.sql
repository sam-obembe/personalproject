DELETE from matches WHERE user_id = $1 AND  job_id = $2 AND match = true
-- UPDATE matches
-- SET match = NULL
-- WHERE user_id = $1 AND job_id = $2
-- AND( SELECT COUNT (*) FROM matches 
-- WHERE user_id = $1
-- AND job_id = $2) = 1
