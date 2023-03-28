import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('sk.eyJ1IjoiYTY3NTc5NDExNSIsImEiOiJjbGZnaWI3ZHkxb21tM3FwZ2NjcW1sZnEwIn0.rJniOBij8EUZJy8ZwjJnZQ');

const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView 
        style={styles.map}
        logoEnabled={true}
        zoomEnabled={true}
        compassEnabled={true}
        compassFadeWhenNorth={true}
        compassPosition={{top: 8, right: 8}}
        
         />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '90%',
    width: '90%',
  },
  map: {
    flex: 1
  }
});