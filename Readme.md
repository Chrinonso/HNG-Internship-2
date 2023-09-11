PERSON CRUD API DOCUMENTATION

Introduction

-Welcome to the Person CRUD API documentation. This API allows you to create, read, update, and delete person records.

Base URL
-The base URL for all API endpoints is https://your-api-base-url.com/api.

Endpoints
1. Create a Person
    Endpoint: /api
    HTTP Method: POST
    Request:
        POST /api/
        {
        "name": "John Doe",
        };

    Response (Success):
    HTTP Status: 200 OK
    {
    "person": {
        "_id": "person_id",
        "name": "Elon Church",
    }
    };

    Response (Error):
    HTTP Status: 400 Bad Request

    {
    "error": "Invalid request data"
    };

2. Get a Person
    Endpoint: /api/{person_id}
    HTTP Method: GET
    Request:
    GET /api/{person_id}

    Response (Success):
    HTTP Status: 200 OK

    {
    "person": {
        "_id": "person_id",
        "name": "Elon Church",
    }
    }

    Response (Error):
    HTTP Status: 404 Not Found

    {
    "error": "Person with the ID ${person_id }not found"
    };

3. Update Person
    Endpoint: /api/{person_id}
    HTTP Method: PATCH

    REQUEST:
    PATCH /api/{person_id}
    {
    "name": "Updated Name",
    };
    Response (Success)

    HTTP Status: 200 OK

    {
    "person": {
        "_id": "person_id",
        "name": "Updated Name",
    },
    "msg": "Person Updated successfully!!!"
    }
    Response (Error)
    HTTP Status: 404 Not Found

    {
    "error": "Person with the id ${person_id}not found"
    }

4. Delete Person
    Endpoint: /api/{person_id}
    HTTP Method: DELETE
    Request:
    DELETE /api/{person_id}
    
    Response (Success)
    HTTP Status: 200 OK

    {
    "msg": "Person with the ID ${person_id}deleted successfully!!!"
    };

    Response (Error)
    HTTP Status: 404 Not Found

    {
    "error": "Person with the ID ${person_id} not found"
    }

    Known Limitations and Assumptions
- Every Post request has a unique ID identifier that makes it easier for us to find a particular person, update and delete it.
- Input data for creating and updating persons should be in JSON format.
- The API returns "Not Found" errors when a person with the specified ID is not found for retrieval, update, or deletion.
- Custom created Validation errors are returned with a "Bad Request" status when the input data does not meet the required format or constraints.
-The API does not provide pagination for large datasets.

    Setting Up  the API Locally
- Before setting up and deploying the API locally, ensure you have Node.js and npm (Node Package Manager) installed on your machine.
- Clone the repository containing your API code to your local machine.
- Install Dependencies, Navigate to the project directory and install the required dependencies. 
    cd your-api
    npm install
- Configure Environment Variables

a database connection is required to get the API running. Also, create a .env file in the project root and set the necessary variables.
    PORT=3000
    DATABASE_URL=mongodb://localhost:27017/your-database
- Run the API on your local machine using the command "npm start"
- Your API should now be running on http://localhost:3000 or your preferred port.
- Test the API

Use a tool like Postman to send requests to your API to create, retrieve, update, and delete persons. You can navigate to the API documentation at the top foe an easy way to navigate around it.

UML DIAGRAM
Here is the link to the UML diagram;
https://lucid.app/lucidchart/64747335-83ca-45da-90b3-7c7037fead3a/edit?invitationId=inv_084a1d37-831c-4166-ac8c-5a54ffc8c124


























