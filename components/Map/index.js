import { useState, useRef } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
  InfoWindow,
} from '@react-google-maps/api';
import PushPinIcon from '@mui/icons-material/PushPin';

const mapStyle = [
  {
    featureType: 'all',
    elementType: 'geometry.fill',
    stylers: [
      {
        weight: '2.00',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#9c9c9c',
      },
    ],
  },
  {
    featureType: 'all',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f2f2f2',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#7b7b7b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#46bcec',
      },
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#c8d7d4',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#070707',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
];

const Map = ({ cremationData }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchLngLat, setSearchLngLat] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const autocompleteRef = useRef(null);
  const [address, setAddress] = useState('');

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDNb9Ts4KsD_9Gd4c6J3KkvsnOKlpJuX4w',
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading....</div>;

  // static lat and lng
  const center = { lat: 51.0447, lng: -114.0719 };

  // handle place change on search
  //   const handlePlaceChanged = () => {
  //     const place = autocompleteRef.current.getPlace();
  //     setSelectedPlace(place);
  //     setSearchLngLat({
  //       lat: place.geometry.location.lat(),
  //       lng: place.geometry.location.lng(),
  //     });
  //     setCurrentLocation(null);
  //   };

  // get current location
  //   const handleGetLocationClick = () => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           const { latitude, longitude } = position.coords;
  //           setSelectedPlace(null);
  //           setSearchLngLat(null);
  //           setCurrentLocation({ lat: latitude, lng: longitude });
  //         },
  //         (error) => {
  //           console.log(error);
  //         },
  //       );
  //     } else {
  //       console.log('Geolocation is not supported by this browser.');
  //     }
  //   };

  // on map load
  //   const onMapLoad = (map) => {
  //     const controlDiv = document.createElement('div');
  //     // const controlUI = document.createElement('div');
  //     // controlUI.innerHTML = 'Get Location';
  //     // controlUI.style.backgroundColor = 'white';
  //     // controlUI.style.color = 'black';
  //     // controlUI.style.border = '2px solid #ccc';
  //     // controlUI.style.borderRadius = '3px';
  //     // controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  //     // controlUI.style.cursor = 'pointer';
  //     // controlUI.style.marginBottom = '22px';
  //     // controlUI.style.textAlign = 'center';
  //     // controlUI.style.width = '100%';
  //     // controlUI.style.padding = '8px 0';
  //     // controlUI.addEventListener('click', handleGetLocationClick);
  //     // controlDiv.appendChild(controlUI);

  //     // const centerControl = new window.google.maps.ControlPosition(
  //     //   window.google.maps.ControlPosition.TOP_CENTER,
  //     //   0,
  //     //   10
  //     // );

  //     map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
  //       controlDiv,
  //     );
  //   };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    cremationData.forEach(({ location }) =>
      bounds.extend({ lat: location.lat, lng: location.lng }),
    );
    map.fitBounds(bounds);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      {/* search component  */}
      {/* <Autocomplete
        onLoad={(autocomplete) => {
          console.log('Autocomplete loaded:', autocomplete);
          autocompleteRef.current = autocomplete;
        }}
        onPlaceChanged={handlePlaceChanged}
        options={{ fields: ['address_components', 'geometry', 'name'] }}
      >
        <input type="text" placeholder="Search for a location" />
      </Autocomplete> */}

      {/* map component  */}
      <GoogleMap
        mapContainerClassName="map"
        mapContainerStyle={{ width: '100%', height: '1120px', margin: 'auto' }}
        onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}
        options={{
          styles: mapStyle,
        }}
      >
        {selectedPlace && <Marker position={searchLngLat} />}
        {/* {center && (
          <Marker
            position={center}
            title="Your Location"
            icon={{
              url: '/images/Map location marker.svg',
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        )} */}
        {cremationData.map((data, id) => (
          <Marker
            key={id}
            title={data.title}
            position={{
              lat: data.location.lat,
              lng: data.location.lng,
            }}
            icon={{
              url: '/images/Map location marker.svg',
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{data.title}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
        {/* <Marker position={center} icon={<PushPinIcon />} /> */}
      </GoogleMap>
    </div>
  );
};

export default Map;
