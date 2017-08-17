import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import icon from './RedMtn3_35px_2.png';

export class MapContainer extends Component {
    
    constructor() {
        super();
        
        this.state = {
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#E0E0E0"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "hue": "#ff0000"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": "-100"
                        },
                        {
                            "saturation": "-100"
                        },
                        {
                            "gamma": "0.00"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "offon"
                        },
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "poi.government",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "poi.medical",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "poi.sports_complex",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ],
            marker: {name: 'Lonely Mountain Winery', 
                    lat: 47.657362, 
                    lng: -121.824340}
        }
        
    }

    render() {

        const style ={width: '70vw',
                height: '60vh',
                margin: '0 auto'};
        
        return(
            <div className="mapContain">
                <Map className="map" style={style} google={this.props.google} zoom={9} center={ {lat: 47.641635, lng: -121.993942}} styles={this.state.styles}>
                    <Marker icon={icon} name={this.state.marker.name} position={{lat: this.state.marker.lat, lng: this.state.marker.lng}} /> 
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'YOUR_API_KEY'
})(MapContainer)
