import { SignUp } from '@clerk/nextjs'
import React from 'react'

const Register = () => {
  return (
    <div className='flex justify-center h-screen'>
      <SignUp/>
    </div>
  )
}

export default Register
