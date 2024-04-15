import {useState} from 'react';
import axios from 'axios';

function GalleryItem({image, getGallery}) {

    const [descShow, setDescShow] = useState(true);
    
    const toggle = (id) => {
        axios.put(`api//gallery/like/${id}`).then((r) => {
            getGallery();
        }).catch((e) => {
            console.log('Error in client-side PUT request:', e);
        })
    }



    const Item = () => {
       //console.log(descShow);
        return (
        descShow 
       ?     <>
             <img data-testid="toggle" onClick={() => setDescShow(!descShow)} src={image.url} style={{width: "300px", height: "300px"}}/>
             <br/>
             </>
       
       :     <p data-testid="toggle" onClick={() => setDescShow(!descShow)} style={{width: "300px", height: "300px", backgroundColor: "lightcyan", marginTop: "0px", marginBottom: "4px"}}>
            {image.description}
             </p>
        )};

        

    return( 

         <section data-testid="galleryItem">
           <p style={{marginBottom: "0px", textAlign: "center", fontSize: "25px"}}>{image.title}</p>
           <br/>
           <Item />
           <button data-testid="like" onClick={()=> toggle(image.id)} style={{marginRight: "6px"}}>Like</button>
            {`Total Likes: ${image.likes}`}
         </section>

    )



};

export default GalleryItem;

