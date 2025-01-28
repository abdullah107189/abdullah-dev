import cnpi from '../../../assets/cnpi.jpg'
import SectionHeader from '../../../Components/SectionHeader';
const EducationalQualifications = () => {
    const qualifications = [
        {
            title: "Diploma in Engineering",
            institution: "Chapainabganj Polytechnic Institute",
            department: "Computer Technology",
            year: "Expected Graduation: 2025",
            status: "Final Semester",
            duration: "4 Years",
            relevantCoursework: [
                "Data Structures and Algorithms",
                "Web Development",
                "Database Management Systems",
                "Networking",
                "Software Engineering"
            ],
            image: cnpi,
        },
    ];

    return (
        <>
            <SectionHeader title={'Educational'}></SectionHeader>
            <div className="dark:bg-gray-800 bg-gray-50 md:p-6 rounded-lg shadow-lg md:px-5">
                <div className="flex flex-col md:flex-row items-center justify-between dark:text-white p-5 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full md:w-1/2">
                        <img src={qualifications[0].image} alt={`${qualifications[0].title} Image`} className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="w-full md:w-1/2 md:ml-4 mt-4 md:mt-0">
                        <h3 className="text-2xl font-semibold text-blue-600">{qualifications[0].title}</h3>
                        <p className="dark:text-gray-50 text-gray-700">
                            <strong>Institution:</strong> {qualifications[0].institution}
                        </p>
                        <p className="dark:text-gray-50 text-gray-600 italic">
                            <strong>Department:</strong> {qualifications[0].department}
                        </p>
                        <p className="dark:text-gray-50 text-gray-600 ">
                            <strong>Year:</strong> {qualifications[0].year} <br />
                            <strong> Status:</strong> <span className="font-bold text-green-600">{qualifications[0].status}</span>
                        </p>
                        <p className="dark:text-gray-50 text-gray-600">
                            <strong>Duration:</strong> {qualifications[0].duration}
                        </p>
                        <div className="mt-4">
                            <strong>Relevant Coursework:</strong>
                            <ul className="list-disc list-inside dark:text-gray-50 text-gray-600">
                                {qualifications[0].relevantCoursework.map((course, index) => (
                                    <li key={index}>{course}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EducationalQualifications;