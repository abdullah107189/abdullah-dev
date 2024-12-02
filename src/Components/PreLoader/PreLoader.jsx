const Preloader = () => (
    <div className="h-screen flex flex-col justify-center items-center bgWhite overflow-hidden">

        <h1 className="text-4xl text-center font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
            Md. Abdullah All Shamem
        </h1>

        <h2 className="mt-4 text-xl sm:text-3xl font-mono text-white animate-typing overflow-hidden border-r-4 border-green-400 whitespace-nowrap">

        </h2>

        <div className="mt-8 w-24 h-24 border-4 border-dotted border-purple-500 rounded-full animate-spin"></div>
    </div>
);

export default Preloader;
