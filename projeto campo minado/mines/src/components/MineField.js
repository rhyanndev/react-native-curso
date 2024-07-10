import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
    //Tranformar um array de objetos em um array do mesmo tamanho, que ao invés de objetos, terá elementos JSX
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} 
                onOpen={() => props.onOpenField(r, c)} 
                onSelect={e => props.onSelectField(r, c)} />
        })
        return <View key={r}
            // Representa as colunas do tabuleiro
            style={{flexDirection: 'row'}}>{columns}</View>
    })
            // Representa as linhas do tabuleiro
        return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    }
})