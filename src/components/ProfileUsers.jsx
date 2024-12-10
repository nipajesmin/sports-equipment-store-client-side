import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ProfileUsers = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Photo Url</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map(user => 
                            <tr key={user._id}>
                        <th>1</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.url}</td>
                    </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default ProfileUsers;