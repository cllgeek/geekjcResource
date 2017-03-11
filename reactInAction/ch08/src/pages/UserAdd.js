import React from 'react'
import UserEditor from '../components/UserEditor'
import HomeLayout from '../layouts/HomeLayout'

class UserAdd extends React.Component{
  render(){
    return(
      <HomeLayout title="添加用户">
        <UserEditor />
      </HomeLayout>
    )
  }
}

export default UserAdd