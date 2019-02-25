import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {pyencode,pydecode} from './punycode'


export default class PunyCodeItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={pyencode} handleDecode={pydecode} header="punycode" />
        )
    }
}
