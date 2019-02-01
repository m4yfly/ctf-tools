import React, {Component}  from 'react'
import styles from './styles.css'
import {handleContextMenu} from '../../../Common/CommonContextMenu/ContextMenu'
import {rsakeyanalyse} from './rsakeyanalyse.js'

export default class RSAKeyAnalyseItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyAnalyse = this.handleKeyAnalyse.bind(this);

    }
    handleInput(event){
        this.setState({content:event.target.value});
    }

    handleKeyAnalyse(){
        this.setState({content: rsakeyanalyse(this.state.content)});
    }

    render() {
        var content = this.state.content;
        return (
            <div className={styles.main}>
                <header className={styles.header}>{this.props.header}</header>
                <div>
                    <textarea value={content} onChange={this.handleInput} onContextMenu={handleContextMenu}  className={styles.mainTextArea}></textarea>
                    <button className={styles.Button} onClick={this.handleKeyAnalyse}>analyse</button>
                </div>
            </div>
        )
    }
}
