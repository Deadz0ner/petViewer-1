import React from 'react';
import { View,  StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PetDropdown = ({ pets, selectedPet, onSelectPet }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedPet}
        style={styles.picker}
        onValueChange={(itemValue) => onSelectPet(itemValue)}
      >
        {pets.map((pet) => (
          <Picker.Item key={pet.id} label={pet.name} value={pet.id} />
        ))}
      </Picker> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:5
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default PetDropdown;
