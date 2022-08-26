import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Button from './Button'

export default function Row(props){
    const { values, onPress } = props
    const buttonArr = values.map(value => <Button key={value} onPress={onPress} value={value} />)
    return(
        <View style={styles.row}>{buttonArr}</View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
      },
})
