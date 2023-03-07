import { Component } from 'react';
import css from "components/styles.module.css"



export class Modal extends Component {
 componentDidMount() {
    window.addEventListener('keydown', this.handleKeyModalClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyModalClose);
  }

  handleKeyModalClose = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };


  render() {
    const { currentImage } = this.props;
    return (
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div className={css.Modal}>
          <img src={currentImage} alt="" />
        </div>
      </div>
    );
  }
}
