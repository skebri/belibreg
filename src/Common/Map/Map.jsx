import React, { Component } from 'react';
import PigeonMap from 'pigeon-maps';
import Marker from 'pigeon-marker';

import './Map.scss';

class Map extends Component {
  render() {
    const position = [45.007889, 19.822540];

    return (
      <main id="map">
        <PigeonMap
          center={position}
          zoom={12}
          metaWheelZoom={true}
        >
          <Marker anchor={position} payload={1} onClick={({ event, anchor, payload }) => {}} />
        </PigeonMap>
      </main>
    )
  }
}

export default Map;
