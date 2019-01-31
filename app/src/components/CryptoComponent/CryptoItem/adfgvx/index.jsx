import React, {Component}  from 'react'
import CommonCryptItem from '../../../Common/CommonCryptItem'
import CommonInput from '../../../Common/CommonInput'
import CommonButton from '../../../Common/CommonButton'
import styles from '../../../Common/CommonCryptItem/styles.css'
import {handleContextMenu} from '../../../Common/CommonContextMenu/ContextMenu'
import {encrypt,decrypt} from './adfgvx'

export default class AdfgvxItem extends CommonCryptItem {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            keysquare: '',
            keyword: ''
        }
        this.handleKeysquareInput = this.handleKeysquareInput.bind(this);
        this.handleKeywordInput = this.handleKeywordInput.bind(this);
        this.handleEncrypt = this.handleEncrypt.bind(this);
        this.handleDecrypt = this.handleDecrypt.bind(this);
    }
    handleEncrypt(){
        this.setState({content:encrypt(this.state.content)});
    }
    handleDecrypt(){
        this.setState({content:decrypt(this.state.content)});
    }
    handleKeysquareInput(event){
        this.setState({keysquare:event.target.value});
    }
    handleKeywordInput(event){
        this.setState({keyword:event.target.value});
    }
    render() {
        return (
            <div className={styles.main}>
                <header className={styles.header}>ADFGVX密码</header>
                <div>
                    <textarea value={this.state.content} onContextMenu={handleContextMenu} onChange={this.handleInput} className={styles.mainTextArea}></textarea>
                    <div className={styles.addition}>
                        <CommonInput value={this.state.keysquare} handleInput={this.handleKeysquareInput} placeholder="Keysquare,36bytes"/>
                        <CommonInput value={this.state.keyword} handleInput={this.handleKeywordInput} placeholder="Keyword,无限制"/>
                    </div>
                    <div className={styles.inlineButton}>
                        <CommonButton onClick={this.handleEncrypt} buttonName="加密"/>
                        <CommonButton onClick={this.handleDecrypt} buttonName="解密"/>
                    </div>
                </div>
            </div>
        )
    }
}
