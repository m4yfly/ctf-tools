import React, {Component}  from 'react'
import DecodeList from './DecodeList'
import BaseItem from './DecodeItem/base/'
import HexItem from './DecodeItem/hex/'

export default class DecodeComponent extends Component {
    render() {
        return (
            <DecodeList>
                <BaseItem title="Base编码"/>
                <HexItem title="Hex编码"/>
            </DecodeList>
        )
    }
}
