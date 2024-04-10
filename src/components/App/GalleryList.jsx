import axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryItem from './GalleryItem.jsx';



function GalleryList() {
    const [images, setImages] = useState([]);


    const getGallery = () => {
        axios.get('api/gallery').then((r) => {  
            setImages(r.data);
        }).catch((e) => {
            console.log('Error in client-side GET request', e);
        });
    };

    useEffect(() => {
        console.log('On page load');
        getGallery();
    }, []);




    return(

        <section data-testid="galleryList" style={{display: "flex", flexWrap: "Wrap", justifyContent: "space-evenly"}}>
        {
        images.map((image) => {
            return <div key={image.id}>
            <GalleryItem image={image} getGallery={getGallery}/>
            </div>
        })
        }
        </section>



    )
};

export default GalleryList;