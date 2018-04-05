if @user.errors.full_messages.empty?
  json.partial! 'api/users/user', user: @user
else
  json.array! @user.errors.full_messages
end