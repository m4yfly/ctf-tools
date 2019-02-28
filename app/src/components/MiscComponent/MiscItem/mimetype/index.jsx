import React, {Component}  from 'react' 
import commonStyles from '../../../Common/CommonDecodeItem/styles.css'
import CommonInput from '../../../Common/CommonInput'
import CommonButton from '../../../Common/CommonButton'
import styles from './styles.css'
import {detect} from './mimetype'

export default class MimeTypeItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            result: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.detectContent = this.detectContent.bind(this);
    }
    handleInput(event){
        this.setState({content:event.target.value});
    }
    detectContent(){
        this.setState({result:detect(this.state.content)});
    }
    render() {
        return (
            <div className={commonStyles.main}>
                <header className={commonStyles.header}>ascii编码转换</header>
                <div className={styles.contentItem}>
                    <CommonInput handleInput={this.handleInput} placeholder="文件名包括后缀名，如xxx.tar" />
                    <CommonButton onClick={this.detectContent} buttonName="获取" />
                </div>
                <input value={this.state.result} readOnly className={styles.input}/>
            </div>
        )
    }
}
