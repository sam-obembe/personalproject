SELECT user_id,firstname,lastname,dob,city,state,country,phonenumber,emailaddress,socialnetworkurl,profilepictureurl,user_bio FROM users WHERE user_id IN(
  SELECT user_id FROM matches WHERE match=true AND job_id =$1
)