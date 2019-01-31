import React, {Component}  from 'react'
import CommonCryptoItem from '../../../Common/CommonCryptoItem'
import CommonInput from '../../../Common/CommonInput'
import {encrypt,decrypt} from './a1z26'
export default class A1z26Item extends Component {
    render() {
        return (
            <CommonCryptoItem handleEncrypt={encrypt} handleDecrypt={decrypt} 
            header="A1z26密码">
            </CommonCryptoItem>
        )
    }
}
