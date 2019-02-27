INSERT INTO user_interest(user_id,scope_id) 
SELECT $1, $2
WHERE NOT EXISTS (SELECT $1,$2 FROM user_interest WHERE user_id=$1 AND scope_id = $2)