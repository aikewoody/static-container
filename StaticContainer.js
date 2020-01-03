import { Component, Children } from 'react';
import PropTypes from 'prop-types';

class StaticContainer extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.shouldUpdate;
    }

    render() {
        const child = this.props.children;
        return (child === null || child === false) ? null : Children.only(child);
    }
}

StaticContainer.propTypes = {
    shouldUpdate: PropTypes.bool.isRequired
};

export default StaticContainer;
