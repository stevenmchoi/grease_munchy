if @user
  json.partial! 'api/users/user', user: @user
else
  json.partial! 'api/sessions/session', status_code: @status_code
end
