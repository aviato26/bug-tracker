
import React from 'react';

const AssignRole = (props) =>
{
  return(
    <div>
      <p>Select the assign</p>
      <select required id="roles" onChange={(e) => props.updateCurrentRole(e.target.value)} >
        <option value="Admin">Admin</option>
        <option value="Developer">Developer</option>
        <option value="Demo">Demo</option>
      </select>
    </div>
  )
}

export default AssignRole;
