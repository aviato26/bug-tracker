
import React from 'react';
import LoggedInUserName from './loggedInUserName.js';
import NavSearchBar from './navSearchBar.js';
import HeaderNotifications from './notifications.js';
import UserActions from './userActions.js';

const MainHomePageHeader = (props) =>
{
  return(
    <div className='homePageHeader item-b'>
      <LoggedInUserName />
      <NavSearchBar />
      <HeaderNotifications />
      <UserActions />
    </div>
  )
}

export default MainHomePageHeader;
