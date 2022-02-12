
import React from 'react';

const UserSelection = (props) =>
{
  return(
    <div>
      <p>Select user for project</p>
      <input list="Users" name="user" onChange={(e) => props.updateCurrentUser(e.target.value)}/>
      <datalist id="Users">
        {
          props.users.map((users, key) => <option value={users.UserName} key={key}/> )
        }
      </datalist>
    </div>
  )
}

export default UserSelection;
