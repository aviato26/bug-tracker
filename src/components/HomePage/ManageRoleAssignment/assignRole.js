
import React from 'react';

const AssignRole = (props) =>
{
  return(
    <div>
      <p>Select the role to assign</p>
      <input list="roles" name="role" />
      <datalist id="roles">
        <option value="Admin" />
        <option value="Developer" />
        <option value="Demo" />
      </datalist>
      <input type="submit" />
    </div>
  )
}

export default AssignRole;
