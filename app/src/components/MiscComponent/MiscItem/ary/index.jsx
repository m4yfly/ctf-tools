import React, {Component}  from 'react'
import commonStyles from '../../../Common/CommonDecodeItem/styles.css'
import {handleContextMenu} from '../../../Common/CommonContextMenu/ContextMenu'
import CommonButton from '../../../Common/CommonButton'
import styles from './styles.css'
import {ary} from './ary.js'

export default class AryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content10: '',
            content2:'',
            content8:'',
            content16:''
        }
        this.handle2Input = this.handle2Input.bind(this);
        this.handle8Input = this.handle8Input.bind(this);
        this.handle10Input = this.handle10Input.bind(this);
        this.handle16Input = this.handle16Input.bind(this);
    }
    handle2Input(event){
        this.setState({
            content2:event.target.value,
            content10:ary.parse_2(event.target.value),
            content8:ary.convert_8(ary.parse_2(event.target.value)),
            content16:ary.convert_16(ary.parse_2(event.target.value))
        });
    }
    handle8Input(event){
        this.setState({
            content8:event.target.value,
            content10:ary.parse_8(event.target.value),
            content2:ary.convert_2(ary.parse_8(event.target.value)),
            content16:ary.convert_16(ary.parse_8(event.target.value))
        });
    }
    handle10Input(event){
        this.setState({
            content10:event.target.value,
            content2:ary.convert_2(event.target.value),
            content8:ary.convert_8(event.target.value),
            content16:ary.convert_16(event.target.value)
        });
    }
    handle16Input(event){
        this.setState({
            content16:event.target.value,
            content10:ary.parse_16(event.target.value),
            content8:ary.convert_8(ary.parse_16(event.target.value)),
            content2:ary.convert_2(ary.parse_16(event.target.value))
        });
    }
    render() {
        return (
            <div className={commonStyles.main}>
                <header className={commonStyles.header}>进制转换(因Js精度问题仅供参考)</header>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="decimal_text">10进制</label>
                    <textarea id="decimal_text" value={this.state.content10} onContextMenu={handleContextMenu}
                     onChange={this.handle10Input} className={styles.contentText}></textarea>
                </div>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="binary_text">2进制</label>
                    <textarea id="binary_text" value={this.state.content2} onContextMenu={handleContextMenu}
                     onChange={this.handle2Input} className={styles.contentText}></textarea>
                </div>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="octal_text">8进制</label>
                    <textarea id="octal_text" value={this.state.content8} onContextMenu={handleContextMenu}
                     onChange={this.handle8Input} className={styles.contentText}></textarea>
                </div>
                <div className={styles.contentItem}>
                    <label className={styles.contentLabel} htmlFor="hex_text">16进制</label>
                    <textarea id="hex_text" value={this.state.content16} onContextMenu={handleContextMenu}
                     onChange={this.handle16Input} className={styles.contentText}></textarea>
                </div>
            </div>
        )
    }
}
