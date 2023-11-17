import React, { useState } from 'react';
import { View, Text, FlatList, Button, Modal, TextInput , StyleSheet ,TouchableOpacity} from 'react-native';

const ContactsScreen = () => {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'John Doe', phone: '123-456-7890' },
    { id: '2', name: 'Jane Smith', phone: '987-654-3210' },
  ]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', phone: '' });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const addContact = () => {
    if (newContact.name && newContact.phone) {
      setContacts([...contacts, { id: String(Date.now()), ...newContact }]);
      setNewContact({ name: '', phone: '' });
      toggleModal();
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>Name: {item.name}</Text>
      <Text>Phone: {item.phone}</Text>
    </View>
  );


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
   


      marginTop: 22,
      padding:20
    
    },
    btn:{

      marginTop:10,
      borderRadius:5,
      backgroundColor: "blue",

      height:40,
      textAlign:'center',
      justifyContent:"center",
      alignItems:"center",
      
    },
    btnText:{
      color:"white"
    }
    ,
    inpText:{
      borderWidth:2,
      padding:2,
      marginTop:5
    },
  });

  return (
    <View>
    
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
  <Button title="Add Contact" onPress={toggleModal} />
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.container}>
          <View>
            <Text>Add New Contact</Text>
            <TextInput style={styles.inpText}
              placeholder="Name"
              onChangeText={(text) => setNewContact({ ...newContact, name: text })}
              value={newContact.name}
            />
            <TextInput style={styles.inpText}
              placeholder="Phone"
              onChangeText={(text) => setNewContact({ ...newContact, phone: text })}
              value={newContact.phone}
            />
            <View >
            <TouchableOpacity  onPress={addContact}  style={styles.btn}>
            <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={toggleModal}  style={styles.btn}>
            <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ContactsScreen;