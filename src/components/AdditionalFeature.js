//Step 6 - Add onClick to buttons using the action creator props and item props 'feature'

import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
       onClick={() => props.addFeature(props.feature)}
      className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
