SELECT user_id,firstname,lastname,dob,city,state,country,phonenumber,emailaddress,socialnetworkurl,profilepictureurl,user_bio FROM users WHERE user_id IN (
	SELECT user_id FROM user_interest WHERE scope_id IN(
	  SELECT scope_id FROM job WHERE job_id = $1 AND (job_id,user_id) NOT IN (
			SELECT job_id, user_id FROM matches WHERE match = true OR employer_like = true
		)
	))


	-- SELECT user_id,firstname,lastname,dob,city,state,country,phonenumber,emailaddress,socialnetworkurl,profilepictureurl,user_bio FROM users WHERE user_id IN (
	-- SELECT user_id FROM user_interest WHERE scope_id IN(
	--   SELECT scope_id FROM job WHERE job_id = $1
	-- ))

