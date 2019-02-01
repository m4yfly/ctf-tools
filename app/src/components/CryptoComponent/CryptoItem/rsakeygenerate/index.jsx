import React, {Component}  from 'react'
import styles from './styles.css'
import CommonInput from '../../../Common/CommonInput'
import {handleContextMenu} from '../../../Common/CommonContextMenu/ContextMenu'
import {generate_key_pkcs1,generate_key_pkcs8} from './rsakeygenerate.js'


export default class RSAKeyGenerateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n_length:'512',
            e:'65537',
            publick_key:'',
            private_key:'',
            rsa_parameters:''
        }
        this.handleInput_n_length = this.handleInput_n_length.bind(this);
        this.handleInput_e = this.handleInput_e.bind(this);
        this.handleGenerate_pkcs1 = this.handleGenerate_pkcs1.bind(this);
        this.handleGenerate_pkcs8 = this.handleGenerate_pkcs8.bind(this);
    }
    handleInput_n_length(event){
        this.setState({n_length:event.target.value});
    }
    handleInput_e(event){
        this.setState({e:event.target.value});
    }

    handleGenerate_pkcs1(){
        var [a,b,c] =generate_key_pkcs1(this.state.n_length,this.state.e);
        this.setState({publick_key:a,private_key:b,rsa_parameters:'n='+c[0]+'\nq='+c[1]+'\np='+c[2]+'\nd='+c[3]+'\ne='+c[4]});
    }

    handleGenerate_pkcs8(){
        var [a,b,c] =generate_key_pkcs8(this.state.n_length,this.state.e);
        this.setState({publick_key:a,private_key:b,rsa_parameters:'n='+c[0]+'\nq='+c[1]+'\np='+c[2]+'\nd='+c[3]+'\ne='+c[4]});
    }
    render() {
        var n_length = this.state.n_length;
        var e = this.state.e;
        var publick_key = this.state.publick_key;
        var private_key = this.state.private_key;
        var rsa_parameters = this.state.rsa_parameters;
        return (
            <div className={styles.main}>
                <header className={styles.header}>{this.props.header}</header>
                <div>
                    <div className={styles.inlineInput}>
                        <input value={n_length} className={styles.input1} onChange={this.handleInput_n_length} />
                        <input value={e} className={styles.input2} onChange={this.handleInput_e} />
                    </div>
                    <div className={styles.inlineButton}>
                        <button className={styles.Button1} onClick={this.handleGenerate_pkcs1}>生成pkcs1格式公私钥</button>
                        <button className={styles.Button2} onClick={this.handleGenerate_pkcs8}>生成pkcs8格式公私钥</button>
                    </div>
                    <div className={styles.inlineTextArea}>
                        <textarea value={publick_key} onContextMenu={handleContextMenu}  className={styles.PublicKeyArea} readOnly></textarea>
                        <textarea value={private_key} onContextMenu={handleContextMenu}  className={styles.PrivateKeyArea} readOnly></textarea> 
                    </div>
                    <textarea value={rsa_parameters} onContextMenu={handleContextMenu}  className={styles.ParameterArea} readOnly></textarea>
                </div>
            </div>
        )
    }
}
