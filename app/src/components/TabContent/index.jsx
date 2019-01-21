import React, {Component}  from 'react'
import styles from './styles.css'


export default class TabContent extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.left}></div>
                <div className={styles.right}>{this.props.children}</div>
            </div>
        )
    }
}
