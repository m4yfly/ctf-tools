import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {bbencode,bbdecode} from './bubblebabble'


export default class BubbleBabbleItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={bbencode} handleDecode={bbdecode} header="BubbleBabble" />
        )
    }
}
