import React, {Component}  from 'react'
import commonStyles from '../../../Common/CommonDecodeItem/styles.css'
import {handleContextMenu} from '../../../Common/CommonContextMenu/ContextMenu'
import styles from './styles.css'
import {ascii} from './ascii.js'

export default class AsciiItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleInputUtf16 = this.handleInputUtf16.bind(this);
        this.handleInputUtf32 = this.handleInputUtf32.bind(this);
    }
    handleInput(event){
        this.setState({content:event.target.value});
    }
    handleInputUtf16(event){
        this.setState({content:ascii.utf_16.decode(event.target.value)});
    }
    handleInputUtf32(event){
        this.setState({content:ascii.utf_32.decode(event.target.value)});
    }
    render() {
        var utf_16_value = this.state.content? ascii.utf_16.encode(this.state.content):"";
        var utf_32_value = this.state.content? ascii.utf_32.encode(this.state.content):"";
        return (
            <div className={commonStyles.main}>
                <header className={commonStyles.header}>ascii编码转换</header>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="ascii_text">文本</label>
                    <textarea id="ascii_text" value={this.state.content} onContextMenu={handleContextMenu}
                     onChange={this.handleInput} className={styles.contentText}></textarea>
                </div>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="ascii_text">UTF-16</label>
                    <textarea id="ascii_text" value={utf_16_value} onContextMenu={handleContextMenu}
                     onChange={this.handleInputUtf16} className={styles.contentText}></textarea>
                </div>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="ascii_text">UTF-32</label>
                    <textarea id="ascii_text" value={utf_32_value} onContextMenu={handleContextMenu}
                     onChange={this.handleInputUtf32} className={styles.contentText}></textarea>
                </div>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="ascii_text">Unicode</label>
                    <textarea id="ascii_text" value={this.state.content} onContextMenu={handleContextMenu}
                     onChange={this.handleInput} className={styles.contentText}></textarea>
                </div>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="ascii_text">Hex</label>
                    <textarea id="ascii_text" value={this.state.content} onContextMenu={handleContextMenu}
                     onChange={this.handleInput} className={styles.contentText}></textarea>
                </div>
            </div>
        )
    }
}
