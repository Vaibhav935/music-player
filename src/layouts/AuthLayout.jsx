import React, { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import { Outlet, useLocation } from 'react-router'

const AuthLayout = () => {
    const [toggle, setToggle] = useState(true)
    const {pathname} = useLocation()
  return (
    <div>

      {/* {
        pathname === '/otp' ? pathname === '/otp' ? null : toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} /> : pathname === "/password"  ?  pathname === '/password' ? null : toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} /> : toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />
      } */}

      {/* {
        pathname === '/otp' ? null : pathname === "/password" ? null : pathname === '/password' ? null : toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />
      } */}


        {
          pathname === '/otp' ? null : pathname === "/password" ? null : toggle ? <Login setToggle={setToggle} /> : <Register setToggle={setToggle} />
        }

      <Outlet/>
    </div>
  )
}

export default AuthLayout
