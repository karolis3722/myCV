import React from 'react';
import Text from './Text';

class Panel extends React.Component {

    render() {
        const styles = {
            "background-color": this.props.color
        }
            
        const possibleMagics = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
            "https://www.youtube.com/watch?v=6FQsIfE7sZM",
            "https://www.youtube.com/watch?v=0DPZ9b9ZZr4",
            "https://www.youtube.com/watch?v=eT5IGtWmQ-M"
            ]
        
        const useClasses = "Panel " + `${this.props.useClass}`
        const item = possibleMagics[Math.floor(Math.random()*possibleMagics.length)];
        const useMagic = this.props.magic ? <a href={item} target="_blank"><Text label={this.props.label} /></a> : <Text label={this.props.label} />

        return (
            <div className={useClasses} style={styles}>
                {useMagic}
            </div>
        );
    }
}

export default Panel;