json.session do
    if current_user # session.currentUser = { id, username }
        json.currentUser do
            json.partial! 'api/users/user', user: @user
        end
    else # errors.session = []
        json.partial! 'api/sessions/session', user: @user
    end
end