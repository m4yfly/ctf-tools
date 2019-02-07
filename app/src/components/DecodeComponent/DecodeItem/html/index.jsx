import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {htmlEncode, htmlDecode} from './html'

export default class HtmlItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={htmlEncode} handleDecode={htmlDecode} header="html"/>
        )
    }
}
