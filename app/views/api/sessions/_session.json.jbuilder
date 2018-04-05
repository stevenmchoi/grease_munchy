if user.errors.full_messages.empty?
  json.array! []
else
  json.array! user.errors.full_messages
  # TODO: 
  # if @current_user
  #     json.array! ["Invalid credentials"]
  # else
  #     json.array! ['Not logged in!']
  # end
end