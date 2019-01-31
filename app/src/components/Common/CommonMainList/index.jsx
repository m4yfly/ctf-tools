import React, {Component}  from 'react'
import styles from './styles.css'


export default class CommonMainList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.left}>
                    {   
                        React.Children.map(this.props.children,(element,index) => {
                            return(
                                <button onClick={() => {this.setState({currentIndex:index})}}
                                    className={[styles.listItem,index === this.state.currentIndex ? styles.listItemActive:null].join(" ")}>
                                    {element.props.title}
                                </button>
                            )
                        })
                    }
                </div>
                <div className={styles.right}>
                    {
                        React.Children.map(this.props.children,(element,index)=> {
                            return(
                                <div className={[styles.contentItem,index === this.state.currentIndex ? styles.contentItemActive:null].join(" ")}>
                                {element}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
