import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { styles } from './styles'
import * as Icon from 'phosphor-react-native';

export function Home(){
  // Declare button click count base value
  const [upClickCount, upSetCount] = useState(0);
  const [homeClickCount, homeSetCount] = useState(0);
  const [downClickCount, downSetCount] = useState(0);

  // Declare button click function
  const handleClick = (clickCount, setCount) => {
    setCount(clickCount + 1);
  };

  // Declare Alert function
  const showAlert = () => {
    Alert.alert('Alerta', 'O botão HOME foi alterado');
  };

  // Declare UseEffect to call alert function when homeClickCount is changed ignoring first render
  useEffect(() => {
    if (homeClickCount != 0) {
      showAlert();
    }
  }, [homeClickCount]);

  // Return HomePage
  return(
    <View style={styles.bodyContainer}>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleClick(upClickCount, upSetCount)}>
          <Icon.CaretUp style={styles.buttonIcon} size={150}/>
        </TouchableOpacity>
        <Text style={styles.buttonText}>{upClickCount} Cliques</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleClick(homeClickCount, homeSetCount)}>
          <Icon.HouseSimple style={styles.buttonIcon} size={150} />
        </TouchableOpacity>
        <Text style={styles.buttonText}>{homeClickCount} Cliques</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleClick(downClickCount, downSetCount)}>
          <Icon.CaretDown style={styles.buttonIcon} size={150}/>
        </TouchableOpacity>
        <Text style={styles.buttonText}>{downClickCount} Cliques</Text>
      </View>
    </View>
  )
}
