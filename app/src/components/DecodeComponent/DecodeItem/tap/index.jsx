import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {tapEncode,tapDecode} from './tap'


export default class TapItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={tapEncode} handleDecode={tapDecode} header="tap code"/>
        )
    }
}
