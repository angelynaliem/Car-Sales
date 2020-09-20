import React, { useState, useReducer } from "react";
import { addFeature } from "../actions";
import { initialState, initialReducer } from "../reducers";
import AdditionalFeature from './AdditionalFeature';

// import { connect } from "react-redux";
// import { addFeature, removeFeature } from "../actions";

const AdditionalFeatures = props => {

  // const [state, dispatch] = useReducer(initialReducer, initialState);
  // console.log(state);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;

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
// )(AdditionalFeatures);