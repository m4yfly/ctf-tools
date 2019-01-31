import React, {Component}  from 'react'
import CommonCryptItem from '../../../Common/CommonCryptItem'
import {encrypt,decrypt} from './a1z26'
export default class A1z26Item extends Component {
    render() {
        return (
            <CommonCryptItem handleEncrypt={encrypt} handleDecrypt={decrypt} 
            header="A1z26密码">
            </CommonCryptItem>
        )
    }
}
