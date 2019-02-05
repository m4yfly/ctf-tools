import React, {Component}  from 'react'
import CommonDecodeItem from '../../../Common/CommonDecodeItem'
import {urlEncode, urlDecode} from './url'


export default class UrlItem extends Component {
    render() {
        return (
            <CommonDecodeItem handleEncode={urlEncode} handleDecode={urlDecode}
            typeContent="URL URL_ALL" header="url"/>
        )
    }
}
