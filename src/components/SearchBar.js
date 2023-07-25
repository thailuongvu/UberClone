import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { ScrollView, View } from 'react-native';

const SearchBar = () => {
  return (
        
        <GooglePlacesAutocomplete
        placeholder='Search Destinations'
        styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          onPress={(data, details = null) => {
            console.log(data, details);

          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}

        query={{
            key:GOOGLE_MAPS_APIKEY,
            language: 'en',
        }}
        nearbyPlacesAPI='GooglePlacesSearch'

        />
      
  );
};

export default SearchBar;