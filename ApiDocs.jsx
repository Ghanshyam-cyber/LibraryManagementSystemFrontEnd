import React from 'react';


function ApiDocs() {
  return (
    <div className="container text-center mt-5">
      <h1>Library Management System API Documentation</h1>

      <h2>1. Create User</h2>
      <p>Endpoint: POST user/(managerId)</p>
      <p>Body: <code>{`{ "firstName": "John", "lastName": "Doe", "email": "john.doe@example.com", "mobileNumber": "1234567890" }`}</code></p>
      <p>Response: Success message or user details</p>

      <h2>2. Create Book</h2>
      <p>Endpoint: POST book/(managerId)</p>
      <p>Body: <code>{`{ "bookName": "Book Name", "authorName": "Author Name", "copiesOfBooks": "10"}`}</code></p>
      <p>Response: Success message or book details</p>

      <h2>3. Get All Users</h2>
      <p>Endpoint: GET /users/(managerId)</p>
      <p>Response: List of users</p>

      <h2>4. Get Book Details</h2>
      <p>Endpoint: GET /books/(managerId)</p>
      <p>Response: Book details</p>

      <h2>5. Update Book</h2>
      <p>Endpoint: PUT /book/(managerId)/updateBook/)bookId)</p>
      <p>Body: <code>{`{ "copiesOfBook": " "}`}</code></p>
      <p>Response: Success message or updated book details</p>

      <h2>6. Delete User</h2>
      <p>Endpoint: DELETE Click delete in User Table to Delete</p>
      <p>Response: Success or failure message</p>

      <h2>7. Assign Book to User</h2>
      <p>Endpoint: PUT /assign/(managerId)</p>
      <p>Body: <code>{`{ "userId": "123", "bookId": "456" }`}</code></p>
      <p>Response: Success or failure message</p>
      
      <h2>8. Retrieve Book from User</h2>
      <p>Endpoint: PUT /return/(managerId)</p>
      <p>Body: <code>{`{ "userId": "123", "bookId": "456" }`}</code></p>
      <p>Response: Success or failure message</p>
    </div>
  );
}

export default ApiDocs;
