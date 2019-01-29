import React, {Component}  from 'react'
import styles from './styles.css'


export default class CommonSelect extends Component {
    render() {
        var typeList = this.props.typeContent.split(" ");
        return (
            <div className={styles.main}>
                <label className={styles.mainLabel}>{this.props.label}</label>
                <select className={styles.mainSelect} onChange={this.props.onSelect}>
                    {   
                        
                        typeList.map(function(name,index){
                            return <option value ={name} key={index}>{name}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}
