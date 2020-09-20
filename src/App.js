import React, { useState, useReducer } from "react";
import { initialState, initialReducer } from "./reducers";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions";



const App = props => {

  const [state, dispatch] = useReducer(initialReducer, initialState);
  console.log(state);



    console.log("App renders")
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car}/>
        <AddedFeatures car={props.car} removeFeature={props.removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice}   />
      </div>
    </div>
  );
}

// export default App;

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    price: state.car.price,
    name: state.car.name,
    image: state.car.image,
    features: state.car.features,
    additionalFeatures: state.additionalFeatures,
    id: state.additionalFeatures.id,
    name: state.additionalFeatures.name,
    price: state.additionalFeatures.price
  };
};

const mapDispatchToProps = { addFeature, removeFeature };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// const initialState = {
//   additionalPrice: 0,
//   car: {
//     price: 26395,
//     name: '2019 Ford Mustang',
//     image:
//       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//     features: []
//   },
//   additionalFeatures: [
//     { id: 1, name: 'V-6 engine', price: 1500 },
//     { id: 2, name: 'Racing detail package', price: 1500 },
//     { id: 3, name: 'Premium sound system', price: 500 },
//     { id: 4, name: 'Rear spoiler', price: 250 }
//   ]
// };
