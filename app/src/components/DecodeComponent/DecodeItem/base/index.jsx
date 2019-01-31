import React, {Component}  from 'react'
import {baseEncode, baseDecode} from './base.js'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'


export default class BaseItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={baseEncode} handleDecode={baseDecode} 
            typeContent="base64 base32 base16 base36 base58 base62 base91 base92 base85" header="base"/>
        )
    }
}
