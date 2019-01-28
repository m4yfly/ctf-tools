import React, {Component}  from 'react'
import {base64encode, base64decode} from './base.js'
import CommenItem from '../../CommonItem'


export default class BaseItem extends Component {
    render() {
        return (
            <CommenItem handleEncode={base64encode} handleDecode={base64decode}  header="base"/>
        )
    }
}
