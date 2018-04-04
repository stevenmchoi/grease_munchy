if user
    json.array! user.errors.full_messages
else
    json.array! []
    # TODO: 
    # if @current_user
    #     json.array! ["Invalid credentials"]
    # else
    #     json.array! ['Not logged in!']
    # end
end