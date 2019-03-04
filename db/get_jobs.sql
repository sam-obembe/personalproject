SELECT * FROM job WHERE scope_id IN (
	SELECT scope_id FROM user_interest WHERE user_id = $1 AND (job_id,user_id) NOT IN (
	  SELECT job_id,user_id FROM matches WHERE match = true OR user_like = true
	)) 



-- SELECT * FROM job WHERE scope_id IN (
-- 	SELECT scope_id FROM user_interest WHERE user_id = $1)
