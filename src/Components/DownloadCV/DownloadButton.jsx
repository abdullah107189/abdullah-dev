import { useState } from "react";
import './dawnloadButton.css'
import { FaCloudDownloadAlt } from "react-icons/fa";
import downloading from '../../assets/donwloading.gif'
import Swal from 'sweetalert2'
import { IoIosCloudDone } from "react-icons/io";
const DownloadButton = () => {
    const [downloadState, setDownloadState] = useState('click')

    const handleDownlaodCV = () => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Download Resume",
            denyButtonText: `Just Show Resume`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setDownloadState('downloading')
                const link = document.createElement('a')
                link.href = '/abdullah107189 resume.pdf';
                link.download = 'abdullah107189 resume.pdf';
                console.log('object');
                link.click()
                setTimeout(() => {
                    setDownloadState('success')
                }, 2000);
            } else if (result.isDenied) {
                window.open('https://drive.google.com/file/d/1yjS1r5iH2gAoxBQ4_9mWHqGoEDvjiAr0/view', '_blank');
            }
        });
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