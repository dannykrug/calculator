import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button(props){
    const { value, onPress } = props
    return (
        <TouchableOpacity onPress={() => onPress(value)} style={styles.button}>
            <Text style={styles.buttonText}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
      },
      buttonText: {
          fontSize: 30,
          color: 'white'
      }
})