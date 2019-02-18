import React, {Component}  from 'react'
import styles from './styles.css'
import CommonInput from '../../../Common/CommonInput'
import {handleContextMenu} from '../../../Common/CommonContextMenu/ContextMenu'
import {encode,decode} from './vigenere.js'


export default class VigenereItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:'',
            key:'vigenere key'
        }
        this.handleInput_content = this.handleInput_content.bind(this);
        this.handleInput_key = this.handleInput_key.bind(this);
        this.handleEncode = this.handleEncode.bind(this);
        this.handleDecode = this.handleDecode.bind(this);
    }
    handleInput_content(event){
        this.setState({content:event.target.value});
    }
    handleInput_key(event){
        this.setState({key:event.target.value});
    }

    handleEncode(){
        var result = encode(this.state.content,this.state.key);
        this.setState({content:result});
    }

    handleDecode(){
        var result =decode(this.state.content,this.state.key);
        this.setState({content:result});
    }
    render() {
        var content = this.state.content;
        var key= this.state.key;

        return (
            <div className={styles.main}>
                <header className={styles.header}>Vigenere</header>
                <div>
                    <div >
                        <input value={key} className={styles.input} onChange={this.handleInput_key} />
                    </div>
                    <div>
                        <textarea value={content} onContextMenu={handleContextMenu} onChange={this.handleInput_content} className={styles.mainTextArea}></textarea>
                    </div>
                    <div className={styles.inlineButton}>
                        <button className={styles.Button} onClick={this.handleEncode}>Encode</button>
                        <button className={styles.Button} onClick={this.handleDecode}>Decode</button>
                    </div>

                </div>
            </div>
        )
    }
}

