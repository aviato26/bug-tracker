
import React from 'react';

const UserSelection = (props) =>
{
  return(
    <div>
      <p>Select User</p>
      <input list="Users" name="user" />
      <datalist id="Users">
        {
          props.users.map((users, key) => <option value={users.UserName} key={key}/>)
        }
      </datalist>
      <input type="submit" />
    </div>
  )
}

export default UserSelection;
