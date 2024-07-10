import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor='#a0bf2f' lado={20}/>
            <Quadrado cor='#dc421e' lado={30}/>
            <Quadrado cor='#0a0bc2' lado={40}/>
            <Quadrado cor='#0572e8' lado={50}/>
            <Quadrado cor='#c52a8b' lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})