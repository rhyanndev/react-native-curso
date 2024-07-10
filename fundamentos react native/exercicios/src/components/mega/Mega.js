import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends Component {
    
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    // constructor(props){
    //     super(props)

    //     // Bind significa que sempre que o this for chamado dentro da função
    //     // 'alterarQtdeNumero' ele vai apontar para o mesmo this que foi
    //     //passado como parâmetro
    //     //o this então sempre apontará para o objeto correto!
    //     this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    // }

    // alterarQtdeNumero(qtde){
    //     // this aqui vai apontar para o this passado em constructor(props)
    //     //exemplo, se fosse this.alterarQtdeNumero.bind(3), a função iria apontar para 3
    //     this.setState({ qtdeNumeros: qtde })
    // }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
        .fill()
        .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
        .sort((a,b)=> a -b) //ordenando os números de forma crescente
        this.setState({numeros: numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num}/>
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                    {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder='Qtde de números'
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText = {this.alterarQtdeNumero}
                />
                <Button
                title='Gerar'
                onPress={this.gerarNumeros}
                />

                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                {this.exibirNumeros()}

                </View>
            </>
        )
    }

}