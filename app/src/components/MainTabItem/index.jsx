import React, {Component}  from 'react'
import styles from './styles.css'


export default class MainTabItem extends Component {
    render() {
        return (
            <div className={styles.tabContent}>
                {this.props.children}
            </div>
        )
    }
}
