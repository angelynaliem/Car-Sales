import React from 'react';

import { connect } from "react-redux";
import { addFeature, removeFeature } from "../actions";

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

export default Header;

// const mapStateToProps = state => {
//   return {
//     // additionalPrice: state.initialReducer.additionalPrice,
//     car: state.initialReducer.car,
//     // price: state.initialReducer.car.price,
//     // name: state.initialReducer.car.name,
//     // image: state.initialReducer.car.image,
//     // features: state.initialReducer.car.features,
//     // additionalFeatures: state.initialReducer.additionalFeatures,
//     // id: state.initialReducer.additionalFeatures.id,
//     // name: state.initialReducer.additionalFeatures.name,
//     // price: state.initialReducer.additionalFeatures.price
//   };
// };

// const mapDispatchToProps = { addFeature, removeFeature };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Header);
