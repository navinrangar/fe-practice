import { connect } from 'react-redux';
import { AppState } from '../../../store';
import { User } from '../models/todo';
import { userListSelector } from '../selectors/todo';

interface UserListProps {
    users: User[];
}

function UserList({ users}: UserListProps) {

    return (
        <div>
            <div className="flex flex-col gap-2">
                <label className='font-semibold'> Users List </label>
                {users?.map((user: any) => {
                    return (
                        users.length && (
                            <div key={user.id} className='flex gap-2'>
                                <p> {user.id} </p>
                                <p> {user.name} </p>
                                </div>
                        )
                    )
                })}
            </div>
        </div>
    )
}

export default UserList;

const mapStateToProps = (s: AppState) => (
    {users: userListSelector(s)}
)

export const UserListComponent = connect(mapStateToProps, undefined)(UserList);