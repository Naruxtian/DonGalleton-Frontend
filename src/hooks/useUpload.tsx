import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { storage } from "../app/firebaseConfig";

export const useUpload = () => {
    const [urlImage, setUrlImage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const uploadImage = async (file: File, path: string) => {
        setLoading(true);

        try {
            const imageRef = ref(storage, `images/${path}/${file.name}`);
            await uploadBytes(imageRef, file);
            const url = await getDownloadURL(imageRef);
            console.log(url);
            setUrlImage(url);
            setLoading(false);
            setError('');
        } catch (error) {
            console.log(error);
            setError('Ocurrió un error al subir la imagen');
            setLoading(false);
        }
    }
    return {
        urlImage,
        loading,
        error,
        uploadImage
    }
}