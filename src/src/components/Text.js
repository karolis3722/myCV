import React from 'react';

class Text extends React.Component {

    render() {
        return (
            <div className="Text">
                {this.props.label}
            </div>
        );
    }
}

export default Text;