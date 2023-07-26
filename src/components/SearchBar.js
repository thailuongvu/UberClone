import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { ScrollView, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'

const SearchBar = () => {
  const dispatch = useDispatch()

  return (
    <View>
    <GooglePlacesAutocomplete
      placeholder='Search Destinations'
      keepResultsAfterBlur={true}
      styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
      onPress={(data, details = null) => {
        dispatch(setOrigin({
           location: details.geometry.location,
           description: data.description
        }))
        dispatch(setDestination(null))
 

      }}
      fetchDetails={true}
      enablePoweredByContainer={false}
      minLength={2}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
        components: 'country:vn',
      }}
      nearbyPlacesAPI='GooglePlacesSearch'
    />
    </View>
  )
}

export default SearchBar
