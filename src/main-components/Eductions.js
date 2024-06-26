import Education from '../components/Education';

export default function Educations({darkMode}) {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4 text-left pt-3 text-black dark:text-white">Education</h1>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border text-left">
                <Education degree="Bachelor of Science in Computer Science" institute="University of Central Punjab" date="2018 - 2022" darkMode={darkMode}/>
                <hr className="mb-4" style={{ borderTop: "1px solid lightgrey" }}></hr>
                <Education degree="Intermediate in Computer Science (ICS)" institute="Govt. Islamia College Civil lines" date="2015 - 2017" darkMode={darkMode}/>
            </div>
        </>
    );
}