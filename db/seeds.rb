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

# last user created: 1

dispatch(logout());
# 1) (improper logout)
# {
#   errors: {
#     session: ["Not logged in!"]
#   },
#   session: {
#     currentUser: null
#   }
# }

dispatch(login({
	username: 'user1',
	password: 'password'
}));
# 2) (improper login)
# {
#   errors: {
#     session: ["Invalid credentials"]
#   },
#   session: {
#     currentUser: null
#   }
# }

dispatch(signup({
	username: 'user1',
	email: 'email1',
	password: ''
}));
# 3) (improper signup, blank password)
# {
# 	errors: {
# 		session: [
# 			"Password can't be blank",
# 			"Password is too short \
# 				(minimum is 6 characters)"
# 		]
# 	},
# 	session: {
# 		currentUser: null
# 	}
# }

dispatch(signup({
	username: 'user1',
	email: '',
	password: 'password'
}));
# 4) (improper signup, blank password)
# {
# 	errors: {
# 		session: [
# 			"Email can't be blank"
# 		]
# 	},
# 	session: {
# 		currentUser: null
# 	}
# }

dispatch(signup({
	username: 'user1',
	email: 'email1',
	password: 'password'
}));
# 5) (proper signup)
# {
#   errors: {
#     session: []
#   },
#   session: {
#     currentUser: {
#       id: 1,
#       username: 'user1'
#     }
#   }
# }

dispatch(logout());
# 6) (proper logout)
# {
#   errors: {
#     session: []
#   },
#   session: {
#     currentUser: null
#   }
# }

dispatch(login({
	username: 'user1',
	password: 'password'
}));
# 7) (proper login)
# {
#   errors: {
#     session: []
#   },
#   session: {
#     currentUser: {
#       id: 1,
#       username: 'user1'
#     }
#   }
# }

# getState()

## State Shape

# default:
# (proper logout)
# {
#   errors: {
#     session: []
#   },
#   session: {
#     currentUser: null,
#   }
# }

# (improper login)
# {
#   errors: {
#     session: ["Invalid credentials"]
#   },
#   session: {
#     currentUser: null,
#   }
# }

# or this:

# (proper login)
# {
#   errors: {
#     session: []
#   },
#   session: {
#     currentUser: {
#       id: 1,
#       username: 'breakfast'
#     }
#   }
# }
