SELECT * FROM users WHERE user_id IN (
	SELECT user_id FROM user_interest WHERE scope_id = $1)
