UPDATE employer
SET employer_name = $2,
employer_bio = $3,
employer_number = $4,
employer_email = $5,
city = $6,
state = $7,
country = $8
WHERE employer_id = $1