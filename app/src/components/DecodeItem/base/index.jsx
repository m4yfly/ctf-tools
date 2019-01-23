import React, {Component}  from 'react'
import styles from './styles.css'
import InlineSelect from '../../InlineSelect'
import CommonButton from '../../CommonButton'


export default class BaseItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleDecode = this.handleDecode.bind(this)
    }
    handleInput(event){
        this.setState({content:event.target.value});
    }
    handleDecode(event){
        this.setState({content:'decode content:'+this.state.content});
    }
    render() {
        var content = this.state.content;
        return (
            <div className={styles.main}>
                <header className={styles.header}>base编码</header>
                <div>
                    <textarea value={content} onChange={this.handleInput} className={styles.mainTextArea}></textarea>
                    <div className={styles.inlineSelect}>
                        <InlineSelect label="编码"/>
                    </div>
                    <div className={styles.inlineButton}>
                        <CommonButton onClick={this.handleDecode} buttonName="编码"/>
                        <CommonButton buttonName="解码"/>
                    </div>
                </div>
            </div>
        )
    }
}
