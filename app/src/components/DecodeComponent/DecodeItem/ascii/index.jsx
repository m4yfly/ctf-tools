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
    }
    handleInput(event){
        this.setState({content:event.target.value});
    }
    render() {
        return (
            <div className={commonStyles.main}>
                <header className={commonStyles.header}>ascii编码转换</header>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="ascii_text">文本</label>
                    <textarea id="ascii_text" value={this.state.content} onContextMenu={handleContextMenu}
                     onChange={this.handleInput} className={styles.contentText}></textarea>
                </div>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="utf_16_text">UTF-16</label>
                    <textarea id="utf_16_text" value={ascii.utf_16.encode(this.state.content)} onContextMenu={handleContextMenu}
                     readOnly className={styles.contentText}></textarea>
                </div>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="utf_32_text">UTF-32</label>
                    <textarea id="utf_32_text" value={ascii.utf_32.encode(this.state.content)} onContextMenu={handleContextMenu}
                     readOnly className={styles.contentText}></textarea>
                </div>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="unicode_text">Unicode</label>
                    <textarea id="unicode_text" value={ascii.unicode.encode(this.state.content)} onContextMenu={handleContextMenu}
                     readOnly className={styles.contentText}></textarea>
                </div>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="hex_text">Hex</label>
                    <textarea id="hex_text" value={ascii.hex.encode(this.state.content)} onContextMenu={handleContextMenu}
                     readOnly className={styles.contentText}></textarea>
                </div>
            </div>
        )
    }
}
