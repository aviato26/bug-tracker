
import React from 'react';

const CreateProjectDescription = (props) => {
  return(
    <div>
      <input placeholder="Enter Project Description" onChange={(e) => props.updateProjectDescrition(e.target.value)} />
    </div>
  )
}

export default CreateProjectDescription;
