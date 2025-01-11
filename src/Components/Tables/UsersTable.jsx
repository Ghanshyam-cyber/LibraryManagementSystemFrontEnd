import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function UsersTable() {
    const {managerId} = useParams();
    const [user, setUser] = useState([]);
    const [books ,setBooks] =useState([])

    useEffect(()=>{
        if(!managerId) return;

        const fetchUsers = async () => {
            try {
                const response = await fetch(
                `http://localhost:8080/manager/${managerId}/users`
                );
                if(response.ok){
                    const data = await response.json();
                    setUser(data) 
                }
                
            } catch (error) {
                console.error("Error fetching Users:", error);

            }            
        };

        fetchUsers();
        
    }, [managerId]);



  return (
    <div className='container'>
      <h2>Users Managed by Manager {managerId}</h2>
      {user.length > 0 ? (
        <table class="table table-bordered mt-5">
        <thead>
          <tr>
            {/* <th scope="col">User Id</th> */}
            <th scope="col">Fist Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No.</th>
            {/* <th scope="col">Books</th> */}

          </tr>
        </thead>
        <tbody>
          {user.map((user,books) => (
            <tr key={user.id} >
              {/* <td>{user.id}</td> */}
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.mobileNumber}</td>
              {/* <td>{books.bookName}</td> */}

            </tr>
          ))}
        </tbody>
      </table>
       
      ) : (
        <p>Loading Users...</p>
      )}
    </div>
  )
}

export default UsersTable
