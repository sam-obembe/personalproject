UPDATE matches
SET match = NULL
WHERE user_id = userId AND job_id = jobID
AND( SELECT COUNT (*) FROM matches 
WHERE user_id = userID
AND job_id = jobID) = 1
