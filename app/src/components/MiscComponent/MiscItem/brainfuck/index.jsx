import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {bfencode,bfdecode} from './brainfuck'


export default class BrainFuckItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={bfencode} handleDecode={bfdecode} header="brainfuck(不支持中文)" />
        )
    }
}
