import React, {Component}  from 'react'
import CommonMiscItem from '../../../Common/CommonMiscItem'
import {fppencode} from './ppencode'

export default class PPencodeItem extends Component {
    render() {
        return (
            <CommonMiscItem handleEncode={fppencode} header="ppencode" />
        )
    }
}
