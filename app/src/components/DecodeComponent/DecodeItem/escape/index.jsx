import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {escapeEncode, escapeDecode} from './escape'


export default class EscapeItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={escapeEncode} handleDecode={escapeDecode} header="escape"/>
        )
    }
}
