import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ButtonModal = ({ children }) => (
  <div className="overlay">
    <div className="button-modal-content">
      <div className="button-modal">{children}</div>
    </div>
  </div>
);

class ButtonWithModal extends Component {
  state = {
    open: false
  };

  render = () => {
    return (
      <React.Fragment>
        <button
          className="button add-remove-report-button save-report"
          onClick={() => this.setState({ open: true })}
        >
          {this.props.children}
        </button>
        {this.state.open && (
          <ButtonModal>
            {this.props.render({
              close: () => this.setState({ open: false })
            })}
          </ButtonModal>
        )}
      </React.Fragment>
    );
  };
}
ButtonWithModal.propTypes = {
  render: PropTypes.func.isRequired
};
ButtonWithModal.defaultProps = {
  children: ['Click'] // button text
};

export default ButtonWithModal;
