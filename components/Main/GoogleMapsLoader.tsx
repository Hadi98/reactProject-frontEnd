import React from 'react';
import ScriptTag from 'react-script-tag';

interface GoogleMapsLoaderProps {
  apiKey: string;   
}

const GoogleMapsLoader: React.FC<GoogleMapsLoaderProps> = ({ apiKey }) => {
  return (
    <ScriptTag
      type="text/javascript"
      src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
    />
  );
};

export default GoogleMapsLoader;



