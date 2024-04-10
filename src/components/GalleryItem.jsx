import {useState} from 'react';
import axios from 'axios';

function GalleryItem({image, getGallery}) {

    const [descShow, setDescShow] = useState(false);
    
    const toggle = (id) => {
        axios.put(`api//gallery/like/${id}`).then((r) => {
            getGallery();
        }).catch((e) => {
            console.log('Error in client-side PUT request:', e);
        })
    }



    const Item = () => {

        if (descShow === false) {
          return <>
          <img onClick={() => setDescShow(!descShow)} src={image.url} style={{width: "300px", height: "300px"}}/>
          <br/>
          <button onClick={()=> toggle(image.id)}></button>{image.likes}
          </>
          }
        else if (descShow === true) {
            return <div onClick={() => setDescShow(!descShow)}>
            {image.description}
            <br/>
            <button onClick={()=> toggle(image.id)}></button>{image.likes}
            </div>
        };
    }

    return(
        <>
         {image.title}
         <br/>
         <Item descShow={descShow}/>
        </>

    )



};

export default GalleryItem;

