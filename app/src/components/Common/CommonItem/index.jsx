import React, {Component}  from 'react'
import styles from './styles.css'
import CommonSelect from '../CommonSelect'
import CommonButton from '../CommonButton'
import {handleContextMenu} from '../CommonContextMenu/ContextMenu'



export default class CommonItem extends Component {
    constructor(props) {
        super(props);
        var defaultType = this.props.typeContent.split(" ")[0];
        this.state = {
            content: '',
            typeName: defaultType == "" ? null: defaultType
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleEncode = this.handleEncode.bind(this);
        this.handleDecode = this.handleDecode.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleInput(event){
        this.setState({content:event.target.value});
    }
    handleEncode(){
        this.setState({content:this.props.handleEncode(this.state.content,this.state.typeName)});
    }
    handleDecode(){
        this.setState({content:this.props.handleDecode(this.state.content,this.state.typeName)});
    }
    handleSelect(event){
        this.setState({typeName:event.target.value});
    }
    render() {
        var content = this.state.content;
        if (this.props.typeContent){
            var type_table = (
                <div className={styles.inlineSelect}>
                    <CommonSelect label="编码" typeContent={this.props.typeContent} onSelect={this.handleSelect}/>
                </div>  
            );
        }else{
            var type_table=( 
                <div></div>
            );
        }
        return (
            <div className={styles.main}>
                <header className={styles.header}>{this.props.header}</header>
                <div>
                    <textarea value={content} onContextMenu={handleContextMenu} onChange={this.handleInput} className={styles.mainTextArea}></textarea>
                    { type_table }
                    <div className={styles.inlineButton}>
                        <CommonButton onClick={this.handleEncode} buttonName="编码"/>
                        <CommonButton onClick={this.handleDecode} buttonName="解码"/>
                    </div>
                </div>
            </div>
        )
    }
}
