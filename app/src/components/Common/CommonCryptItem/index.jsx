import React, {Component}  from 'react'
import styles from './styles.css'
import CommonButton from '../CommonButton'
import {handleContextMenu} from '../CommonContextMenu/ContextMenu'



export default class CommonCryptItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleEncrypt = this.handleEncrypt.bind(this);
        this.handleDecrypt = this.handleDecrypt.bind(this);
    }
    handleInput(event){
        this.setState({content:event.target.value});
    }
    handleEncrypt(){
        this.setState({content:this.props.handleEncrypt(this.state.content)});
    }
    handleDecrypt(){
        this.setState({content:this.props.handleDecrypt(this.state.content)});
    }
    render() {
        var content = this.state.content;
        return (
            <div className={styles.main}>
                <header className={styles.header}>{this.props.header}</header>
                <div>
                    <textarea value={content} onContextMenu={handleContextMenu} onChange={this.handleInput} className={styles.mainTextArea}></textarea>
                    <div className={styles.inlineButton}>
                        <CommonButton onClick={this.handleEncrypt} buttonName="加密"/>
                        <CommonButton onClick={this.handleDecrypt} buttonName="解密"/>
                    </div>
                </div>
            </div>
        )
    }
}
