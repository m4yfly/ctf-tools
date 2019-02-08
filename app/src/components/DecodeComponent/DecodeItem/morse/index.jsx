import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {morseEncode,morseDecode} from './morse'


export default class MorseItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={morseEncode} handleDecode={morseDecode} header="morse code"/>
        )
    }
}
