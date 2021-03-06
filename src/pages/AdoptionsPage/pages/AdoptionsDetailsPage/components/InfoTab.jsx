import React, { useState } from 'react';

import arrow from '../../../../../assets/img/arrow-r.png';
import './InfoTab.scss';

export function InfoTab(){
    const [form, setForm] = useState({});
    const [img1, setImg1] = useState(null);
    const [img2, setImg2] = useState(null);
    const [img3, setImg3] = useState(null);
    const [imgPreview1, setImgPreview1] = useState(null);
    const [imgPreview2, setImgPreview2] = useState(null);
    const [imgPreview3, setImgPreview3] = useState(null);
    const [error, setError] = useState('');

    const formSubmit = async (ev) => {
        ev.preventDefault();        
        try {
            const formData = new FormData();
            formData.append('img', img1);

        } catch(error) {
            console.log('Entro por el catch');
            setError(error.message);
        }
    }

    const onFileSelect1 = (ev) => {
        console.log(ev.target.files);
        let reader = new FileReader();
        let file = ev.target.files[0];

        reader.onloadend = () => {
            setImg1(file);
            setImgPreview1(reader.result);
        }

        reader.readAsDataURL(file);

        console.log(file);
    }
    const onFileSelect2 = (ev) => {
        console.log(ev.target.files);
        let reader = new FileReader();
        let file = ev.target.files[0];

        reader.onloadend = () => {
            setImg2(file);
            setImgPreview2(reader.result);
        }

        reader.readAsDataURL(file);

        console.log(file);
    }
    const onFileSelect3 = (ev) => {
        console.log(ev.target.files);
        let reader = new FileReader();
        let file = ev.target.files[0];

        reader.onloadend = () => {
            setImg3(file);
            setImgPreview3(reader.result);
        }

        reader.readAsDataURL(file);

        console.log(file);
    }
    return(
        // <div className="flex flex-column align-items-center">
            <form onSubmit={formSubmit} encType="multipart/form-data" className="flex flex-column align-items-center">
            <div className="copy">
                <p className="copy__title s-body-2">Subir imágenes</p>
                <p className="s-detail-1">Necesitamos que nos subas algunas fotos de dónde va vivir tu nueva mascota para poder echarte una mano si necesitas algo más de información</p>
            </div>
            <div className="file-container">
            <div className="file">
            {!imgPreview1 && 
                <input
                    type="file"
                    name="img"
                    value={form.img1}
                    onChange={onFileSelect1}
                    accept="image/png, image/jpg, image/jpeg"
                    className="file-input"
                />
            }

            {imgPreview1 && <div>
                <img src={imgPreview1} alt="img" className="img-file"/>
            </div>}
            </div>
            <div className="file">
            {!imgPreview2 && 
                <input
                    type="file"
                    name="img"
                    value={form.img2}
                    onChange={onFileSelect2}
                    accept="image/png, image/jpg, image/jpeg"
                    className="file-input"
                />
            }

            {imgPreview2 && <div>
                <img src={imgPreview2} alt="img" className="img-file"/>
            </div>}
            </div>
            <div className="file">
            {!imgPreview3 && 
                <input
                    type="file"
                    name="img"
                    value={form.img3}
                    onChange={onFileSelect3}
                    accept="image/png, image/jpg, image/jpeg"
                    className="file-input"
                />
            }

            {imgPreview3 && <div>
                <img src={imgPreview3} alt="img" className="img-file"/>
            </div>}
            </div>
            </div>

            <div className="copy">
                <p className="copy__title s-body-2">¿Cómo quieres pagar las tasas?</p>
                <p className="s-detail-1">Para pagar las tasas de adopción puedes elegir o pagarlo mediante la app con un pago único o poniéndose en contacto con la protectora para fraccionar el pago</p>
            </div>
            <button className="btn s-body-2">
                <span className="btn__span">125€</span>
                <p className="btn__copy">Desglosar las tasas</p>
                <img src={arrow} alt="" className="btn__img"/>
            </button>

            <input type="submit" value="Enviar" className="c-button c-button__red"/>
        </form>


        // </div>
    );
}