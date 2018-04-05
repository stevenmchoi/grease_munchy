if status_code === 401
  json.array! ["Invalid credentials"]
elsif status_code === 404
  json.array! ['Not logged in!']
else
  json.array! []
end