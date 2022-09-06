import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white font-roboto border-b-2 h-24 flex items-center justify-between'>
        <h1 className='text-3xl font-bold pl-10'>Crypto Admin</h1>
        <div className='flex text-xl justify-end pr-20 cursor-pointer items-center space-x-10'>
        <ul>Home</ul>
        <ul>Chart</ul>
        <ul>Account</ul>

        </div>
    
    </div>
  )
}

export default Navbar