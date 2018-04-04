# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# NOTE:
# Status codes: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
# 401: Unauthorized; failing auth
# 402: Payment required; can't manage meals
# 403: Forbidden: need to be logged_in
# 404: Not Found: route doesn't exist
# 422: Unprocessable Entity: Bad fields for signup

## Test

# last user created: 19

# signup({
# 	username: 'user1',
# 	email: 'email1',
# 	password: 'password'
# });

# login({
# 	username: 'user1',
# 	password: 'password'
# });

# logout();

# getState()

## State Shape
# default:
# {
#   session: {
#     currentUser: null,
#   },
#   errors: {
#     session: []
#   }
# }

# {
#   session: {
#     currentUser: null,
#   },
#   errors: {
#     session: ["Invalid credentials"]
#   }
# }

# or this:

# {
#   session: {
#     currentUser: {
#       id: 1,
#       username: 'breakfast'
#     }
#   },
#   errors: {
#     session: []
#   }
# }
