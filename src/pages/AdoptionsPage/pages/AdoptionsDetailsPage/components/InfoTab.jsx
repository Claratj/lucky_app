import React, { useState } from 'react';

import arrow from '../../../../../assets/img/arrow-r.png';
import './InfoTab.scss';

export function InfoTab(){
    const [form, setForm] = useState({});
    const [img, setImg] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState('');

    const formSubmit = async (ev) => {
        ev.preventDefault();        
        try {
            const formData = new FormData();
            formData.append('img', img);

        } catch(error) {
            console.log('Entro por el catch');
            setError(error.message);
        }
    }

    const onFileSelect = (ev) => {
        console.log(ev.target.files);
        let reader = new FileReader();
        let file = ev.target.files[0];

        reader.onloadend = () => {
            setImg(file);
            setImgPreview(reader.result);
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
            {!imgPreview && 
                <input
                    type="file"
                    name="img"
                    value={form.img}
                    onChange={onFileSelect}
                    accept="image/png, image/jpg, image/jpeg"
                    className="file-input"
                />
            }

            {imgPreview && <div>
                <img src={imgPreview} alt="img" className="img-file"/>
            </div>}
            </div>
            <div className="file">
            {!imgPreview && 
                <input
                    type="file"
                    name="img"
                    value={form.img}
                    onChange={onFileSelect}
                    accept="image/png, image/jpg, image/jpeg"
                    className="file-input"
                />
            }

            {imgPreview && <div>
                <img src={imgPreview} alt="img" className="img-file"/>
            </div>}
            </div>
            <div className="file">
            {!imgPreview && 
                <input
                    type="file"
                    name="img"
                    value={form.img}
                    onChange={onFileSelect}
                    accept="image/png, image/jpg, image/jpeg"
                    className="file-input"
                />
            }

            {imgPreview && <div>
                <img src={imgPreview} alt="img" className="img-file"/>
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