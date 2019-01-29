import React, {Component} from 'react'
import {render} from 'react-dom'
import MainTab from './components/MainTab'
import MainTabItem from './components/MainTab/MainTabItem'
import DecodeComponent from './components/DecodeComponent'
import CryptoComponent from './components/CryptoComponent'
import MiscComponent from './components/MiscComponent'

export default class App extends Component {
    render() {
        return (
            <MainTab>
                <MainTabItem title="Decode/Encode">
                    <DecodeComponent/>
                </MainTabItem>
                <MainTabItem title="Misc">
                    <MiscComponent/>
                </MainTabItem>
                <MainTabItem title="Crypto/Decrypt">
                    <CryptoComponent/>
                </MainTabItem>
            </MainTab>
        )
    }
}
