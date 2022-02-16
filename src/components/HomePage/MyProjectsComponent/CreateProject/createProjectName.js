
import React from 'react';

const CreateProjectName = (props) => {
  //console.log(props)
  return(
    <div>
      <input placeholder="Enter Project Name" onChange={(e) => props.updateProjectName(e.target.value)}/>
    </div>
  )
}

export default CreateProjectName;
