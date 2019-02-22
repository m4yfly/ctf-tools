import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {jfencode,jfdecode} from './jsfuck'


export default class JSFuckItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={jfencode} handleDecode={jfdecode} header="jsfuck" />
        )
    }
}
