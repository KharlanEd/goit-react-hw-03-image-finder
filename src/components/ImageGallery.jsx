// import css from "components/styles.module.css"
import { Component } from "react"
import { Button } from "./Button"
import { ImageGalleryItem } from "./ImageGalleryItem"
import { Loader } from "./Loader"

import {getImage} from "./service/imgApi"

export class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    status: 'id',
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imgName;
    const nextName = this.props.imgName;

    
    
      if (prevName !== nextName) {
        this.setState({ status: 'pending' })
      try {  
        const newData = await getImage(nextName);
        this.setState({ images: newData, status: 'resolved' })
      } catch {
        this.setState({status:'error'})
      }
    }

        if (
          prevState.page !== this.state.page &&
          prevName === nextName) {
          const newPage = await getImage(nextName, this.state.page);

           this.setState(prevState => ({
        images: [...prevState.images, ...newPage],
      }));
      }

  }
  
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  

  render() {
      const{images,status}  = this.state
      
    if (status === 'pending') {
      return <Loader/>
    }
    
    if (status === 'rejected') {
      return (<h2>Ничего не найденно</h2>)
    }
    
    if (status === 'resolved') {
        return (
       <>
        <ImageGalleryItem
              nameImg={images}
              onClick={this.props.onClick}
        />
        
        {images.length >= 12 &&
          <Button onClick={this.handleLoadMore} />}
       
       </>         
          
            
    )
     }
   
    
  }
}
