import React, {Component}  from 'react'
import styles from './styles.css'


export default class CommonInput extends Component {
    render() {
        return (
            <input value={this.props.value} className={styles.input} onChange={this.props.handleInput} placeholder={this.props.placeholder}/>
        )
    }
}
