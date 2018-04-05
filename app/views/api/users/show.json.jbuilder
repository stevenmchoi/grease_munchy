# json.session do # session.currentUser = { id, username } or null
#   json.currentUser do
#     json.partial! 'api/users/user', user: @user
#   end
# end

# json.errors do
#   json.session do
# if @user
if user.errors.full_messages.empty?
  json.partial! 'api/users/user', user: @user
else
  json.null!
end
#   json.array! @user.errors.full_messages
# else
#   json.partial! 'api/sessions/session', user: @user
# end
#   end
# end