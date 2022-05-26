import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://warm-badlands-89988.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an Admin!');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully Made an Admin!');
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role === 'admin' ? <p className='text-sm text-primary font-medium uppercase'>Admin</p> : <button className="btn btn-sm btn-primary" onClick={makeAdmin}>Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;