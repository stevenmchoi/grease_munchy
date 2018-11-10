# Grease Munchy

[Live Demo][heroku]

[heroku]: https://grease-munchy.herokuapp.com/

Grease Munchy, a Blue Apron clone, is a meal kit service that delivers fast food from popular chains. Grease Munchy's
web application allows users to view recipes for meals and create/manage a weekly subscription for meal orders.

## Current Features

*   The entire site is a single-page webapp, optimizing speed without sacrificing functionality.
*   Secure user authentication from the backend and frontend; BCrypt for hashing
    *   Backend passes database errors to the session forms to guide users
    *   Frontend redirects based on whether or not the user is logged in
    *   Demo user button for reviewing purposes
*   Home page
    *   Advertises to new visitors who are not logged in with an appealing video loop
    *   Encourages meal plan creation for a new logged-in user
*   List of recipes presented as clickable modals, leading to a more-detailed recipe page
    *   Saved information of recipes allows revisiting to be faster
*   Animation of modals for better user engagement
    *   Session forms and recipes index
*   Logged-in user is bootstrapped to browser window, preventing logout from refreshing
*   "Upcoming" page, detailing next week's orders
*   Meal plan creation/management
    *   Meal plan data will be saved in the database

## Technologies

The backend uses Ruby, Rails, BCrypt, PostgreSQL, and jBuilder.

The frontend uses Javascript, React, Redux, HTML/eRuby, SCSS. The animation was provided by React-Reveal.

Development tools include NPM Webpack, Guard Livereload, Faker, Redux Logger and Rails 12factor.

## Functionality

## Additional Resources

[Component Hierarchy][component-hierarchy]

[Sample State][sample-state]

[Database Schema][database-schema]

[Original MVP List][mvp-list]

[Routes][routes]

[other resources][home]

[component-hierarchy]: https://github.com/stevenmchoi/grease_munchy/wiki/component-hierarchy
[sample-state]: https://github.com/stevenmchoi/grease_munchy/wiki/sample-state
[database-schema]: https://github.com/stevenmchoi/grease_munchy/wiki/database-schema
[mvp-list]: https://github.com/stevenmchoi/grease_munchy/wiki/mvp-list
[routes]: https://github.com/stevenmchoi/grease_munchy/wiki/routes
[home]: https://github.com/stevenmchoi/grease_munchy/wiki

## Future features

In the future I would like to add:

*   Dynamic recipe search indexing
*   Allergy tags for filtering
    *   Users with specified allergies will be alerted to recipes they might be allergic to
*   Prevent auth-only actions from the backend, as well as the front end
*   Ensure session token uniqueness
