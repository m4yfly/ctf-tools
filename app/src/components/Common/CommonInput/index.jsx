import React, {Component}  from 'react'
import styles from './styles.css'


export default class CommonInput extends Component {
    render() {
        return (
            <input className={styles.input} onInput={this.props.onInput} placeholder={this.props.placeholder}/>
        )
    }
}
