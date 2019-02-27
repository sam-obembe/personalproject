UPDATE users
SET firstname = $2,
lastname = $3,
dob = $4,
city = $5,
state = $6,
country = $7,
phonenumber = $8,
emailaddress = $9,
socialnetworkurl = $10,
profilepictureurl = $11,
user_bio = $12
WHERE user_id = $1
