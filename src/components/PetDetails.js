import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PetDetails = ({ pet }) => {
  if (!pet) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Details</Text>
      <Text>Name: {pet.name}</Text>
      <Text>Type: {pet.type}</Text>
      <Text>Breed: {pet.breed}</Text>
      <Text>Weight: {pet.weight}</Text>
      <Text>Color: {pet.color}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PetDetails;
