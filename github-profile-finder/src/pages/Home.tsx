import React from 'react'
import UserResults from '../users/UserResults'
import UserSearch from '../users/UserSearch'

const Home = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <main className='container mx-auto px-3 pb-12'>

        <UserSearch />
        <UserResults />
      </main>
    </div>
  )
}

export default Home
