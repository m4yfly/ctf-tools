import React, {Component}  from 'react'
import {hexEncode,hexDecode} from './hex.js'
import CommenItem from '../../../Common/CommonItem'


export default class HexItem extends Component {
    render() {
        return (
            <CommenItem handleEncode={hexEncode} handleDecode={hexDecode}  header="hex"/>
        )
    }
}
