import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {encode,decode} from './xxencode'

export default class XXencodeItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={encode} handleDecode={decode} header="xxencode" />
        )
    }
}
