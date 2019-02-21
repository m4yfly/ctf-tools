import React, {Component}  from 'react'
import CommonMiscItem from '../../../Common/CommonMiscItem'
import {jjencode,jjdecode} from './jjencode'

export default class JJencodeItem extends Component {
    render() {
        return (
            <CommonMiscItem handleEncode={jjencode} header="jjencode" />
        )
    }
}
