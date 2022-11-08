import React from 'react';
import { List } from 'semantic-ui-react';

class Bullets extends React.Component {
    

    render() {

        const styles = {
            "background-color": this.props.color
        }
        const useClasses = "Bullets " + `${this.props.useClass}`

        const list = this.props.list;
        // console.log("mylist",list);
        const renderList = () => {
            let listArr = [];
            console.log("list",list)
            for (let i = 0; i < list.length; i++) {
                listArr.push(<li key={i}>{list[i].textContent}</li>)
            }
            return listArr;
        }
        return (
            <div className={useClasses} style={styles}>
                <List ordered>
                    {renderList()}
                </List>
            </div>
        );
    }
}

export default Bullets;