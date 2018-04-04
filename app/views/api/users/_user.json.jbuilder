if user.errors.full_messages.length == 0
    json.extract! user, :id, :username
else
    json.null!
end