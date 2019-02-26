import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {encode,decode} from './uuencode'

export default class UUencodeItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={encode} handleDecode={decode} header="uuencode" />
        )
    }
}
