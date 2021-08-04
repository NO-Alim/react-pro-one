import React, { useState } from 'react'
import './Scss/VideoPlayer.scss'
import {FaPlay,FaTimes} from 'react-icons/fa'
import ReactPlayer from 'react-player'
import Modal from 'react-modal';
import { useWindowWidth } from '@react-hook/window-size'


Modal.setAppElement("#root");

const VideoPlayer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onlyWidth = useWindowWidth();
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div className="videoPlayer-container">
            <div className="videoPlayer">
                <div className="img-container" onClick={() => toggleModal()}>
                    <button><FaPlay /></button>
                    <Modal
                    isOpen={isModalOpen}
                    onRequestClose={toggleModal}
                    contentLabel="My dialog" className="modal">
                        <div>
                            <div className="modal-content">
                                <ReactPlayer width={`${onlyWidth > 700 ? '640px' : '300px'}`} url='https://www.youtube.com/watch?v=TP4VQTUbypM' />
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer
