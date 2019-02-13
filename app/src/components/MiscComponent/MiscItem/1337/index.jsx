import React, {Component}  from 'react'
import CommonMiscItem from '../../../Common/CommonMiscItem'
import {leetEncode} from './1337'

export default class One337Item extends Component {
    render() {
        return (
            <CommonMiscItem handleEncode={leetEncode} header="Leet Code"/>
        )
    }
}
