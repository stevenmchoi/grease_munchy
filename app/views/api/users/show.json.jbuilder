json.session do # session.currentUser = { id, username } or null
    json.currentUser do
        json.partial! 'api/users/user', user: @user
    end
end

json.errors do
    json.session do
        if @user
            json.array! @user.errors.full_messages
        else
            json.array! user: @user, partial: 'api/sessions/session'
        end
    end
end