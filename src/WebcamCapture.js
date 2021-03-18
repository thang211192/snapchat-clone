import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Webcam from "react-webcam";
import { setCameraImage } from './features/cameraSlide';
import './WebcamCapture.css';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
}

function WebcamCapture() {
    const history = useHistory();
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            dispatch(setCameraImage(imageSrc));
            history.push("/preview");
        }, 
        [webcamRef, history, dispatch]
        );

    return (
        <div className='webcamCapture'>
            <Webcam
            audio={false}
            ref={webcamRef}
            height={videoConstraints.height}
            screenshotFormat="image/jpeg"
            width={videoConstraints.width}
            videoConstraints={videoConstraints}
            />
            <RadioButtonUncheckedIcon
            className='webcamCapture__button'
            onClick={capture}
            fontSize="large"
            />
        </div>
    )
}

export default WebcamCapture
