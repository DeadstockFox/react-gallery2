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
          return <section data-testid="galleryItem">

          <p style={{marginBottom: "0px", textAlign: "center", fontSize: "25px"}}>{image.title}</p>
          <br/>

          <img data-testid="toggle" onClick={() => setDescShow(!descShow)} src={image.url} style={{width: "300px", height: "300px"}}/>
          <br/>

          <button data-testid="like" onClick={()=> toggle(image.id)} style={{marginRight: "6px"}}>Like</button>
          {`Total Likes: ${image.likes}`}
          </section>
          }
        else if (descShow === true) {
            return <section data-testid="galleryItem">

            <p style={{marginBottom: "0px", textAlign: "center", fontSize: "25px"}}>{image.title}</p>
            <br/>

            <div data-testid="toggle" onClick={() => setDescShow(!descShow)} style={{width: "300px", height: "300px", backgroundColor: "lightcyan"}}>
            {image.description}
            </div>
            <br/>

            <button data-testid="like" onClick={()=> toggle(image.id)} style={{marginRight: "6px"}}>Like</button>
            {`Total Likes: ${image.likes}`}
            </section>
        };
    }

    return(
        <>
         <Item descShow={descShow}/>
        </>

    )



};

export default GalleryItem;

