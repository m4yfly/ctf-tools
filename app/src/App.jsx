import React, {Component} from 'react'
import {render} from 'react-dom'
import MainTab from './components/MainTab'
import MainTabItem from './components/MainTabItem'
import TabContent from './components/TabContent'

export default class App extends Component {
    render() {
        return (
            <MainTab>
                <MainTabItem title="Decode/Encode">
                    <TabContent>Decode/Encode</TabContent>
                </MainTabItem>
                <MainTabItem title="Misc">
                    <TabContent>Misc</TabContent>
                </MainTabItem>
                <MainTabItem title="Crypto/Decrypt">
                    <TabContent>Crypto/Decrypt</TabContent>
                </MainTabItem>
            </MainTab>
        )
    }
}
