import Header from './Header'
import { UserMaker } from './UserCreator'
import { UserListComponent } from './UserList'

function Users() {
  return (
    <div className=''>
      <Header />
      <UserMaker />
      <UserListComponent/>
    </div>
  )
}

export default Users