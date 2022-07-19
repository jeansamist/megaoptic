import React from 'react'
import Loading from 'react-loading'
import logo from './../assets/images/logo.jpg'
import settings from '../helpers/settings'
export default function AppLoader() {
  return (
    <div className='app-loader'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="loader">
        <Loading type='spin' color={settings.colors.primary} />
      </div>
    </div>
  )
}
