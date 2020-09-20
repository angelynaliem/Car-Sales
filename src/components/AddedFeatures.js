import React, { useState, useReducer } from "react";
// import { initialState, initialReducer } from "../reducers/titleReducer";

import AddedFeature from './AddedFeature';

import { connect } from "react-redux";
import { addFeature, removeFeature } from "../actions";

const AddedFeatures = props => {

  // const [state, dispatch] = useReducer(initialReducer, initialState);
  // console.log(state);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;

// const mapStateToProps = state => {
//   return {
//     additionalPrice: state.initialReducer.additionalPrice,
//     car: state.initialReducer.car,
//     price: state.initialReducer.car.price,
//     name: state.initialReducer.car.name,
//     image: state.initialReducer.car.image,
//     features: state.initialReducer.car.features,
//     additionalFeatures: state.initialReducer.additionalFeatures,
//     id: state.initialReducer.additionalFeatures.id,
//     name: state.initialReducer.additionalFeatures.name,
//     price: state.initialReducer.additionalFeatures.price
//   };
// };

// const mapDispatchToProps = { addFeature, removeFeature };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AddedFeatures);
