import React from 'react';

const User = ({user}) => {
    const {email, _id} = user;
    return (
        <tr>
        <th>3</th>
        <td>{email}</td>
        <td>{_id}</td>
        <td>Red</td>
      </tr>
    );
};

export default User;