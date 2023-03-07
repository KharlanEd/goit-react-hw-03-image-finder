import css from "components/styles.module.css"


export const ImageGalleryItem = ({ nameImg,onClick } ) => {
    
    return (
        <ul className={css.ImageGallery}>
            {nameImg.map(({ id, webformatURL,largeImageURL }) =>
            (<li key={id}
              onClick={() => onClick(largeImageURL)}  
            className={css.ImageGalleryItem}>
                <img className={css.ImageGalleryItem_image}   src={webformatURL} alt="" />
            </li>)
            )}
      
        </ul>
    )
}