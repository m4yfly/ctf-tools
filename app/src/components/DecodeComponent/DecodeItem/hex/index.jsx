import React, {Component}  from 'react'
import {hexEncode,hexDecode} from './hex.js'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'


export default class HexItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={hexEncode} handleDecode={hexDecode}  header="hex"/>
        )
    }
}
