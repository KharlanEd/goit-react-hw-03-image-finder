import axios from 'axios';

export const  getImage = async (name,page=1)=> {
   const response = await axios.get(`https://pixabay.com/api/?q=${name}&page=${page}&key=32824760-2796a443e813a0729e14c560b&image_type=photo&orientation=horizontal&per_page=12`)
               
  
   
    return response.data.hits
    
}