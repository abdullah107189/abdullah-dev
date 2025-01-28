import SectionHeader from "../../../Components/SectionHeader";

const About = () => {
    return (
        <div>
            <SectionHeader title={'About Me'}></SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5">
                <div className="card bg-base-100 shadow-xl p-4 dark:bg-gray-800 hover:scale-105 transform duration-300">
                    <h1 className="text-xl mb-2 font-bold">About me</h1>
                    <p>Hi, I&apos;m Abdullah—a passionate developer and problem solver with an insatiable curiosity for technology. My journey into programming started as a simple fascination with how websites worked and has since grown into a full-fledged love for creating user-friendly and impactful digital solutions.</p>
                </div>
                <div className="card bg-base-100 shadow-xl p-4 dark:bg-gray-800 hover:scale-105 transform duration-300">
                    <h1 className="text-xl mb-2 font-bold">My Journey</h1>
                    <p>
                        My programming journey began with writing simple HTML pages and has evolved into building complex projects with React, Tailwind CSS, and other modern technologies. What keeps me going is the thrill of learning new tools and frameworks, solving challenging problems, and seeing my ideas come to life through code.
                    </p>
                </div>
                <div className="card bg-base-100 shadow-xl p-4 dark:bg-gray-800 hover:scale-105 transform duration-300">
                    <h1 className="text-xl mb-2 font-bold">What I Love Doing</h1>
                    <p>I specialize in front-end development and take pride in creating clean, responsive, and visually appealing designs. My favorite part of any project is ensuring a seamless user experience. However, I also enjoy diving into backend development, learning new algorithms, and exploring how databases work.
                        Beyond coding, I find joy in collaboration and problem-solving. Brainstorming with a team to tackle a difficult issue or refine a project is something I truly enjoy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;