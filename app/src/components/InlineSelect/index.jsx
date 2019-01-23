import React, {Component}  from 'react'
import styles from './styles.css'


export default class InlineSelect extends Component {
    render() {
        return (
            <div className={styles.main}>
                <label className={styles.mainLabel}>{this.props.label}</label>
                <select className={styles.mainSelect}>
                    <option value ="volvo">Volvo</option>
                    <option value ="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        )
    }
}
