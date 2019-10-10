import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';
import * as actionCreators from "./state/actionCreators";

const App = ({buy_Item, remove_Feature, car, additionalPrice, store}) => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   store: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeFeature = feature => {
    // dispatch an action here to remove an item
    remove_Feature(feature)
  };

  const buyItem = feature => {
    // dipsatch an action here to add an item
    buy_Item(feature)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeItem={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures store={store} buyItem={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     additionalPrice: state.additionalPrice,
//     car: state.car,
//     store: state.store
//   }
// }


export default connect(state=> state, actionCreators)(App);
