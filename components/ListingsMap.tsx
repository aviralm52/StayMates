import { View, StyleSheet } from "react-native";
import MapView from "react-native-map-clustering";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { defaultStyles } from "@/constants/Styles";
import { GeoListingType } from "@/interfaces/geoListing";

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 26.4974,
  longitude: 80.2514,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const ListingsMap = ({ listings }: Props) => {
  console.log("listings: ", listings);

  return (
    <View style={defaultStyles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
      >
        {listings?.features?.map((item: GeoListingType) => (
          <Marker
            key={item.properties.id}
            coordinate={{
              latitude: +item.properties.latitude,
              longitude: +item.properties.longitude,
            }}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListingsMap;
