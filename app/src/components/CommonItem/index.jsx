import React, {Component}  from 'react'
import styles from './styles.css'
import InlineSelect from '../InlineSelect'
import CommonButton from '../CommonButton'
import {handleContextMenu} from '../Common/CommonContextMenu/ContextMenu'



export default class CommonItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleEncode = this.handleEncode.bind(this);
        this.handleDecode = this.handleDecode.bind(this);
    }
    handleInput(event){
        this.setState({content:event.target.value});
    }
    handleEncode(){
        this.setState({content:this.props.handleEncode(this.state.content)});
    }
    handleDecode(){
        this.setState({content:this.props.handleDecode(this.state.content)});
    }
    render() {
        var content = this.state.content;
        return (
            <div className={styles.main}>
                <header className={styles.header}>{this.props.header}</header>
                <div>
                    <textarea value={content} onContextMenu={handleContextMenu} onChange={this.handleInput} className={styles.mainTextArea}></textarea>
                    <div className={styles.inlineSelect}>
                        <InlineSelect label="编码"/>
                    </div>
                    <div className={styles.inlineButton}>
                        <CommonButton onClick={this.handleEncode} buttonName="编码"/>
                        <CommonButton onClick={this.handleDecode} buttonName="解码"/>
                    </div>
                </div>
            </div>
        )
    }
}
