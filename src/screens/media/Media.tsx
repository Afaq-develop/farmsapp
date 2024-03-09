import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-picker';

const Media = () => {
  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    // Initialize Firebase (make sure to replace with your config)
    const firebaseConfig = {
      apiKey: "AIzaSyCavoFlOS3VH8R_jLLxaPbO5svZysqdeeU",
      authDomain: "farmsapp-90f70.firebaseapp.com",
      databaseURL: "https://farmsapp-90f70-default-rtdb.firebaseio.com",
      projectId: "farmsapp-90f70",
      storageBucket: "farmsapp-90f70.appspot.com ",
      messagingSenderId: "332708160625",
      appId: "1:332708160625:android:86997da5959c996bb767d0",
      measurementId: "G-6YL41KJNMY",
    };

    if (!auth().apps.length) {
      auth().initializeApp(firebaseConfig);
    }
  }, []);

  const pickImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        uploadImage(response.uri);
      }
    });
  };

  const uploadImage = async (uri) => {
    const userId = auth().currentUser.uid;
    const fileName = `images/${userId}-${Date.now()}.jpg`;

    const reference = storage().ref(fileName);
    await reference.putFile(uri);

    const downloadUrl = await reference.getDownloadURL();
    setImageUri(downloadUrl);
  };

  return (
    <View>
      <Text>Last picture taken:</Text>
      {imageUri && <Image source={{ uri: imageUri }} style={{ width: 500, height: 500 }} />}
      <Button title="Pick Image" onPress={pickImage} />
    </View>
  );
};

export default Media;
