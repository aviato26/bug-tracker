
import React from 'react';

const Personnel = (props) =>
{
  return(
    <div>
      <table>
      <tbody>
        <tr>
          <th>User Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
          {
            props.users.map((user, key) =>
              {
              return <tr key={key}>
                      <td key={key}>{ user.UserName }</td>
                      <td key={key + 1}>{ user.Email }</td>
                      <td key={key + 2}>{ user.Role }</td>
                     </tr>
              }
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Personnel;
