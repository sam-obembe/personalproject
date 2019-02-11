SELECT * FROM job WHERE scope_id IN (
	SELECT scope_id FROM user_interest WHERE user_id = $1)
