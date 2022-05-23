import React from 'react';
import { BsTrash } from 'react-icons/bs';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button class="btn btn-xs btn-primary">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User <BsTrash /></button></td>
        </tr>
    );
};

export default UserRow;