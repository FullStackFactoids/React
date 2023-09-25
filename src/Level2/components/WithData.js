import React from 'react';

function withData(WrappedComponent) {
    return class extends React.Component {
        render() {
            return <WrappedComponent data="some data" {...this.props} />;
        }
    };
}

export default withData;
