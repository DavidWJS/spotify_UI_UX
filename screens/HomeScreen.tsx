import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import {API, graphqlOperation} from 'aws-amplify';
import {listAlbumCategorys} from '../graphql/queries';
import {useEffect, useState} from 'react';

export default function HomeScreen() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        console.log(data.data.listAlbumCategorys.items);
        setCategories(data.data.listAlbumCategorys.items);
      } catch (e) {
        console.log(e);
      }
    }

    fetchAlbumCategories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={albumCategories}
        renderItem={({item}) => (
          <AlbumCategory 
            title={item.title}
            albums={item.albums}
        />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
})