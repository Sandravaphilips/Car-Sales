import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import * as actionCreators from "./state/actionCreators";

const App = ({add_Feature, remove_Feature, car, additionalPrice, store}) => {
  
  const removeFeature = feature => {
    // dispatch an action here to remove an item
    remove_Feature(feature)
  };

  const addFeature = feature => {
    // dipsatch an action here to add an item
    add_Feature(feature)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeItem={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={store} addFeature={addFeature} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}


export default connect(mapStateToProps, actionCreators)(App);
