UPDATE matches
SET match = true
WHERE user_id = $1 AND job_id = $2
AND( SELECT COUNT (*) FROM matches 
WHERE user_id = $1
AND job_id = $2) = 1
