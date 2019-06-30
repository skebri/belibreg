import React, { Component } from 'react'

import './Map.scss';

class Map extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyA0BiHbBy4ruyda8CCdgMKWO_Fmh4BfZwQ&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    // Create A Map
    const position = {lat: 45.007889, lng: 19.822540};
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: position,
      zoom: 15
    })
    const marker = new window.google.maps.Marker({position, map: map})
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    )
  }
}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default Map;
