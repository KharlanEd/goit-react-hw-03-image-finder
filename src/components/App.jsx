import { Component } from "react"
import { Searchbar } from "./Searchbar"
import css from "components/styles.module.css"
import { ImageGallery } from "./ImageGallery"
import { ToastContainer } from 'react-toastify';
import { Modal } from "./Modal";



export class App extends Component {
  state ={
    isOpenModal: false,
    currentImage: null,
    nameChange:''
  }

  formSubmit = imgName => {
    
    this.setState({nameChange:imgName})
  }
 
  toggleModal = evt => {
    this.setState(prevState => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  openModal = largeImage => {
    this.setState({
      currentImage: largeImage,
      isOpenModal: true,
    });
  };

 render(){
  return(
    <div
      className={css.App}
     
    >
      <Searchbar onSubmit={this.formSubmit} />
      <ImageGallery imgName={this.state.nameChange} 
      onClick={this.openModal}  
      
      />
        

      {this.state.isOpenModal && (
          <Modal
         onClose={this.toggleModal} currentImage={this.state.currentImage}
          />
        )}
      <ToastContainer autoClose={3000}/>
    </div>
  )}
};
