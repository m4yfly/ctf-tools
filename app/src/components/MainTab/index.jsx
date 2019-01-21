import React, {Component}  from 'react'
import styles from './styles.css'

export default class MainTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }
    render() {
        return (
            <main className={styles.mainTab}>
                <nav className={styles.tabNav}>
                {
                    React.Children.map(this.props.children,(element,index) => {
                        return(
                            <button onClick={() => {this.setState({currentIndex:index})}}
                             className={[styles.tabNavItem,index === this.state.currentIndex ? styles.tabNavItemActive:null].join(" ")}>
                             {element.props.title}
                             </button>
                        )
                    })
                }
                </nav>
                <div className={styles.tabContent}>
                    {
                        React.Children.map(this.props.children,(element,index)=> {
                            return(
                                <div className={[styles.tabContentItem,index === this.state.currentIndex ? styles.tabContentItemActive:null].join(" ")}>
                                {element}
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        )
    }
}
