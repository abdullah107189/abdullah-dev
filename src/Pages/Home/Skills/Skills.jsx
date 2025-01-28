import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tilt from 'react-parallax-tilt';
import SectionHeader from '../../../Components/SectionHeader';
import 'react-tabs/style/react-tabs.css';
import './skill.css'
const Skills = () => {
    const skills = {
        Frontend: [
            { name: 'HTML5', bg: 'bg-[#f16529]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' },
            { name: 'CSS3', bg: 'bg-[#1572b6]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' },
            { name: 'Tailwind CSS', bg: 'bg-[#33a9dc]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'JavaScript', bg: 'bg-[#f0db4f]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'React', bg: 'bg-[#61dafb]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' },
            { name: 'React Router', bg: 'bg-[#121212]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original-wordmark.svg' },
        ],
        Backend: [
            { name: 'Firebase', bg: 'bg-[#ffa000]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg' },
            { name: 'Node.js', bg: 'bg-[#4b9742]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
            { name: 'Express', bg: 'bg-black/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg' },
            { name: 'MongoDB', bg: 'bg-[#46a037]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
        ],
        Tools: [
            { name: 'GitHub', bg: 'bg-gray-800/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' },
            { name: 'Git', bg: 'bg-[#f1502f]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'NPM', bg: 'bg-[#cb3837]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
            { name: 'Yarn', bg: 'bg-[#2c8ebb]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg' },
            { name: 'Postman', bg: 'bg-[#ff6c37]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
            { name: 'Netlify', bg: 'bg-[#00c7b7]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
            { name: 'Vercel', bg: 'bg-[#000000]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
            { name: 'Figma', bg: 'bg-[#a259ff]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'VSCode', bg: 'bg-[#0078d7]/20', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        ],
    };

    return (
        <div>
            <SectionHeader title={'Skills'}></SectionHeader>

            <Tabs className={'z-30'}>
                <TabList className={'flex justify-center  my-5 '}>
                    <Tab className="md:mx-3 z-30 mx-1 cursor-pointer md:px-6 px-1 focus:outline-none">Frontend</Tab>
                    <Tab className="md:mx-3 z-30 mx-1 cursor-pointer md:px-6 px-1 focus:outline-none">Backend</Tab>
                    <Tab className="md:mx-3 z-30 mx-1 cursor-pointer md:px-6 px-1 focus:outline-none">Tools</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-4 md:grid-cols-10 gap-5 items-center justify-center">
                        {
                            skills?.Frontend?.map((category, item) => (
                                <Tilt key={item} scale={1.3} transitionSpeed={2500} className={`w-full h-full border rounded-3xl p-2 hover:z-10 hover:${category.bg} `}>
                                    <img className='rounded-2xl' src={category.img} />
                                </Tilt>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 md:grid-cols-10 gap-5 items-center">
                        {
                            skills?.Backend?.map((category, item) => (
                                <Tilt key={item} scale={1.3} transitionSpeed={2500} className={`w-full border rounded-3xl p-2 hover:z-10 hover:${category.bg} `}>
                                    <img className='rounded-2xl' src={category.img} />
                                </Tilt>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-4 md:grid-cols-10 gap-5 items-center">
                        {
                            skills?.Tools?.map((category, item) => (
                                <Tilt key={item} scale={1.3} transitionSpeed={2500} className={`w-full border rounded-3xl p-2 hover:z-10 hover:${category.bg} `}>
                                    <img className='rounded-2xl' src={category.img} />
                                </Tilt>
                            ))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default Skills;