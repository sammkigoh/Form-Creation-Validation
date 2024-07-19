document.addEventListener ('DOMContentLoaded', function () {
    const apiDataDiv = document.getElementById ('api-data');



    //initializing the async fuction 
    async function fetchUserData() {

        //defining the API url
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // selecting the data container element
        const dataContainer = document.getElementById ('api-data');

        //fetching data with try-catch

        try {
            //fetching user data from the API

            const response = await fetch (apiUrl);

            //converting the response to JSON

            const users = await response.json ();

            //catching the loading message

            dataContainer.innerHTML = '';

            //create and append a user list

            const userList = document.createElement ('ul');

            //looping through the users 

            users.forEach(user => {
                //create a <li> elment

                const li = document.createElement ('li');

                //set the text content of the <li> to the user's name

                li.textContent = `${user.name}`;

                //appending the <li> to userList

                userList.appendChild(li);
            });

            //append userList to the dataContainer 

            dataContainer.appendChild(userList);
        } catch (error) {
            //displaying error message 
            dataContainer.textContent = 'Failed to load user data.';
        }
    }
    // calling fetchUserData to ensure data fetching logic runs once the HTML document has fully loaded. 
    fetchUserData();
});