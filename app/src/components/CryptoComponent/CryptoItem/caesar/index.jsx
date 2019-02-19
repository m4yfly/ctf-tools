import React, {Component}  from 'react'
import styles from './styles.css'
import CommonInput from '../../../Common/CommonInput'
import {handleContextMenu} from '../../../Common/CommonContextMenu/ContextMenu'
import {encode,decode,decode_all} from './caesar.js'


export default class CaesarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:'',
            shift:''
        }
        this.handleInput_content = this.handleInput_content.bind(this);
        this.handleInput_shift = this.handleInput_shift.bind(this);
        this.handleEncode = this.handleEncode.bind(this);
        this.handleDecode = this.handleDecode.bind(this);
        this.handleDecode_all = this.handleDecode_all.bind(this);
    }
    handleInput_content(event){
        this.setState({content:event.target.value});
    }
    handleInput_shift(event){
        this.setState({shift:event.target.value});
    }

    handleEncode(){
        var result = encode(this.state.content,this.state.shift);
        this.setState({content:result});
    }

    handleDecode(){
        var result = decode(this.state.content,this.state.shift);
        this.setState({content:result});
    }

    handleDecode_all(){
        var result = decode_all(this.state.content);
        this.setState({content:result});
    }

    render() {
        var content = this.state.content;
        var shift= this.state.shift;

        return (
            <div className={styles.main}>
                <header className={styles.header}>Caesar</header>
                <div>
                    <div >
                        <input value={shift} className={styles.input} onChange={this.handleInput_shift} />
                    </div>
                    <div>
                        <textarea value={content} onContextMenu={handleContextMenu} onChange={this.handleInput_content} className={styles.mainTextArea}></textarea>
                    </div>
                    <div className={styles.inlineButton}>
                        <button className={styles.Button} onClick={this.handleEncode}>Encode</button>
                        <button className={styles.Button} onClick={this.handleDecode}>Decode</button>
                        <button className={styles.Button} onClick={this.handleDecode_all}>列举解密</button>
                    </div>

                </div>
            </div>
        )
    }
}
