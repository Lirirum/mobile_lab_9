import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const GalleryScreen = () => {
  const [images, setImages] = useState([
    { id: '1', source: require('./images/1.jpg') },
    { id: '2', source: require('./images/2.webp') },
    { id: '3', source: require('./images/3.webp') },
    { id: '4', source: require('./images/4.webp') },
    { id: '4', source: require('./images/5.webp') },
    // Додавайте інші зображення за необхідністю
  ]);

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)}>
      <Image source={item.source} style={styles.thumbnail} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList style={styles.flatContainer}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3} // Вказуємо кількість стовпців в галереї
      />

      <Modal visible={selectedImage !== null} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <Image source={selectedImage?.source} style={styles.modalImage} />
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
mainContainer:{
    
    
    alignItems:"center"

},
flatContainer:{

    marginTop:20,
    backgroundColor:"#e3e2e1",
    padding:10,
    borderRadius:10
},

  thumbnail: {
    width: 110,
    height: 110,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default GalleryScreen;