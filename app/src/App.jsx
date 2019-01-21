import React, {Component} from 'react'
import {render} from 'react-dom'
import MainTab from './components/MainTab'
import MainTabItem from './components/MainTabItem'

export default class App extends Component {
    render() {
        return (
            <MainTab>
                <MainTabItem title="Decode/Encode">Decode/Encode</MainTabItem>
                <MainTabItem title="Misc">Misc</MainTabItem>
                <MainTabItem title="Crypto/Decrypt">Crypto/Decrypt</MainTabItem>
            </MainTab>
        )
    }
}
