import IMG1 from './assets/ims1.jpeg'
import IMG2 from './assets/ims2.jpg'
import "./Imsec_imgs.css";
function Imsec_imgs(){
    return (
        <>
            <div className='Ims'>
                <img src={IMG1}></img>
                <img src={IMG2}></img>
            </div>
        </>
    );
}

export default Imsec_imgs;