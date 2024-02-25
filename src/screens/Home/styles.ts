import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    bodyContainer: {
      paddingTop: 100,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#171719",
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
      color: "#C4C4CC",
      fontSize: 20
      
    },

    buttonIcon:{
      height: "100%",
      color: "#C4C4CC"
    }
  });