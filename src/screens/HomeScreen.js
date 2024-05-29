import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import PetDropdown from '../components/PetDropdown';
import PetDetails from '../components/PetDetails';

const HomeScreen = () => {
  const [pets, setPets] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        // console.log('Fetching pets...');
        const response = await fetch('https://run.mocky.io/v3/0a30adc2-a96a-4cd6-895d-17da7cced66d');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log('Data fetched:', data);
        setPets(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  const selectedPet = pets.find((pet) => pet.id === selectedPetId);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <PetDropdown pets={pets} selectedPet={selectedPetId} onSelectPet={setSelectedPetId} />
      <PetDetails pet={selectedPet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ccc',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default HomeScreen;
