import React, {Component}  from 'react'
import {unicodeEncode,unicodeDecode} from './unicode.js'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'


export default class UnicodeItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={unicodeEncode} handleDecode={unicodeDecode}  header="unicode"/>
        )
    }
}
