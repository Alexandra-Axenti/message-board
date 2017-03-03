# message-board

Steps taken to build the project:

* create ember project
* create repo in GitHub and push the project upstream
* create messages.json file and create models
* build the models structure and then add random data to the .json file matching the relationship one-to-many (no answers will be written in the json file to be imported)
* create project in Firebase and configure environment.js
* import messages.json to Firebase and change rules to true
* push the next commit to the remote
* generate the route and build the template and logic for the index and question pages
* encountered an error because no comma after the firebase API in the environment file, solved.
* added components to nest in the index page: new-question and question-tile
* encountered another error - debugging now before moving to next step
* Gabriel helped me with the error - needed to install emberfire. Issues resolved after installation
* compiled and finished the new-question and question-tile components
* pushed a commit to git remote to include the new component features
* start building the dynamic route "question" and add edit-question, answer-tile, new-answer and edit-answer components
* added answer-tile but does not display yet
* added the remaining components and files and the basic lines of code
* started debugging: several misspelling, forgot to adjust the router.js for the dynamic path for the question route/page
* the edit question gives empty values on update
* will commit progress before next work
