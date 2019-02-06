import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {qpEncode,qpDecode} from './qp'

export default class QPItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={qpEncode} handleDecode={qpDecode} header="Quoted-Printable"/>
        )
    }
}
