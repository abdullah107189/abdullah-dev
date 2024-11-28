import { useState } from "react";
import './dawnloadButton.css'
import { FaCloudDownloadAlt } from "react-icons/fa";
import downloading from '../../assets/donwloading.gif'
import { IoIosCloudDone } from "react-icons/io";
const DownloadButton = () => {
    const [downloadState, setDownloadState] = useState('click')

    const handleDownlaodCV = () => {
        setDownloadState('downloading')
        const link = document.createElement('a')
        // link.href = '/resume.pdf';
        // link.download = 'hello bro';
        console.log('object');
        link.click()
        setTimeout(() => {
            setDownloadState('success')
        }, 2000);
    }
    return (
        <button
            className={`bgBlue px-5 py-2 font-semibold rounded-full white relative overflow-hidden
                ${downloadState === 'downloading' ? 'bg-[#f39c12]' :
                    downloadState === 'success' ? 'bg-[#60f318]' : 'bgBlue'
                }
                `}
            onClick={handleDownlaodCV}>

            {downloadState === 'click' && <div className="flex  items-center  gap-3 "><FaCloudDownloadAlt className="w-5 h-5" />Download Resume</div>}
            {downloadState === 'downloading' && <div className="flex  items-center  gap-3 "><img className="rounded-full w-8 h-8" src={downloading} alt="" />downLoading</div>}

            {downloadState === 'success' && <div className="flex  items-center  gap-1 "><IoIosCloudDone />Download Complete!</div>}
            {
                downloadState === 'downloading' && (
                    <span
                        style={{ animation: 'loadingAnimation 1s infinite' }}
                        className="absolute top-0 left-0 w-full h-full bg-white/30"
                    ></span>
                )
            }
        </button>
    );
};

export default DownloadButton;