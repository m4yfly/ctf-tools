import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {aaencode,aadecode} from './aaencode'

export default class AAencodeItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={aaencode} handleDecode={aadecode} header="aaencode" />
        )
    }
}
