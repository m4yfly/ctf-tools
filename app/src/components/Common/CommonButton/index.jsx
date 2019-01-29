import React, {Component}  from 'react'
import styles from './styles.css'


export default class CommonButton extends Component {
    render() {
        return (
            <button className={styles.mainButton} onClick={this.props.onClick}>{this.props.buttonName}</button>
        )
    }
}
