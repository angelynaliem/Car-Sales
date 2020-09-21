//Step 4 - "Connect" the main component to other components and to index.js. Import 'connect' and action functions from action creators.
//Step 5 - Pass the action creators as props to other components.

import React from "react";

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions";

const App = props => {

  // const [state, dispatch] = useReducer(initialReducer, initialState);
  // console.log(state);

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
    // price: state.car.price,
    // name: state.car.name,
    // image: state.car.image,
    // features: state.car.features,
    additionalFeatures: state.additionalFeatures,
    // id: state.additionalFeatures.id,
    // name: state.additionalFeatures.name,
    // price: state.additionalFeatures.price
  };
};

const mapDispatchToProps = { addFeature, removeFeature };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);