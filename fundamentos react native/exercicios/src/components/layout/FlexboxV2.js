import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#a0bf2f' />
            <Quadrado cor='#dc421e' />
            <Quadrado cor='#0a0bc2' />
            <Quadrado cor='#0572e8' />
            <Quadrado cor='#c52a8b' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        backgroundColor: '#000'
    }
})