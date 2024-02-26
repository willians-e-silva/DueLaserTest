import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    bodyContainer: {
      paddingTop: 100,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#ffffff",
    },

    buttonContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    buttonText:{
      padding: 30,
      // position: 'absolute',
      // left: '40%',
      // top: '25%',
      color: "#2a57bf",
      fontSize: 20
      
    },

    buttonIcon:{
      height: "100%",
      color: "#2a57bf",
      backgroundColor: '#f0f0f0',
      borderRadius: 20
    }
  });