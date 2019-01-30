import React, {Component}  from 'react'
import {hexEncode,hexDecode} from './hex.js'
import CommenItem from '../../../Common/CommonItem'
import styles from './styles.css'


export default class HexItem extends Component {
    render() {
        return (
            <CommenItem handleEncode={hexEncode} handleDecode={hexDecode}  typeContent="" header="hex"/>
        )
    }
}
