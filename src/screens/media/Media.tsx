import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import database from '@react-native-firebase/database';

const Media = () => {
const [imageUrl, setImageUrl] = useState(null); // State to store the latest image URL

  const listenForNewImages = () => {
    const imagesRef = database().ref('/images');
    imagesRef.limitToLast(1).on('child_added', (snapshot) => {
      const newImageUrl = snapshot.val().url; // Assuming the URL is stored in the 'url' field
      setImageUrl(newImageUrl); // Update state with the new image URL
    });
  };

  useEffect(() => {
   // listenForNewImages();
   getImage()
  }, []);
  const getImage = async () => {
    try {
      const url = await storage()
        .ref('photo0.jpg') // Replace 'images/image.jpg' with the path to your image in Firebase Storage
        .getDownloadURL();

     // setImageUrl(url);
     console.log('my url is',url)
    } catch (error) {
      console.error('Error getting image from Firebase Storage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to Media Component!</Text>
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: '50%', // Adjust the size as needed
    marginTop: 20,
  },
  // Define other styles here as needed
});

export default Media;
