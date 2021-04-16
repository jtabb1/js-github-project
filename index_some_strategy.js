

/* 1st Deliverable:
The index.html file has a form with a search input. When the form is submitted, it should take the value of the input and search GitHub for user matches using the User Search Endpoint.

Fulfillment:
Use fetch to get the data that the form specifies
*/

/* 2nd Deliverable:
Using the results of the search, display information about the users to the page. (You might include showing their username, avatar and a link to their profile.)

Fulfillment:
Grab the 'user-list' node from the dom and append user list elements to them, from where we got the data from fetch.
*/

/* 3rd Deliverable:
Clicking on one of these users should send a request to the User Repos Endpoint and return data about all the repositories for that user.

Fulfillment:
Use the username to complete the URL that will go into the fetch command that will yield all of the repos for that user.
*/

/* 4th Deliverable:
Using the response from the Users Repos Endpoint, display all the repositories for that user on the page.

Fulfillment:
Use Dom node append commands to do this for all of the found data elememts.
*/