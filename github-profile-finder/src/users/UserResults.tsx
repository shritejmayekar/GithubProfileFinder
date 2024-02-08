import React, { useContext } from 'react'
import Spinner from '../components/layout/Spinner'
import GithubContext from '../context/GithubContext'
import UserItem from './UserItem'

const UserResults = () => {
    const { users, loading }:any = useContext(GithubContext)

    if (!loading) {
        return (
            <div className='h-full grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user:any) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    } else {
        return <Spinner />
    }
  
}

export default UserResults
