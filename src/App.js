import image from './images/IMG_20240806_110720_050-Photoroom.png';
import './App.css';

function App() {
  return (
    <div>
      <div className='flex justify-center items-center h-screen bg-secclr'>
        <div className='text-center text-3xl font-semibold font-lora'>
          <h1>
            Hey there! <br />
            I am <em className="Name">Suhas Koheda</em>,<br />
            a <em className="Animation text-accentclr"></em>
          </h1>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 p-12 gap-20'>
        <div className='flex justify-center'>
          <img src={image} alt='Suhas Koheda' className='rounded-full w-50 h-80 object-cover' />
        </div>
        <div>
          <p className='text-center text-xl font-semibold font-lora'>
            Namaste! I'm Suhas Koheda, a second-year student embarking on the exciting journey of flexuter
            Science at VIT Chennai with a specialized focus on Artificial Intelligence and Machine Learning.<br/><br/>
            • My coursework has begun laying the foundation for a flexrehensive understanding of Java and
            Python programming languages, setting the stage for my future in software development.<br/><br/>
          </p>
        </div>
      </div>
      <div className='my-12 border-y-accentclr border-t p-12'>
        <div className=' flex flex-col justify-normal items-center text-center font-semibold font-lora'>
          <h4 className=' text-2xl'>Skills</h4>
          <h2 className='text-l'>That give me Happiness and Money 😎</h2>
        </div>
        <div className="grid cols-1 md:flex ">
                <div className="p-4 my-12 sm:my-8">
                    <h3 className=" p-0 md:p-4 text-center shadow-lg">Java Developer</h3>
                    <p className='py-4 md:py-12'>Created robust and scalable applications using Java, focusing on enterprise solutions and backend
                        services. Proficient in Java SE, Java EE, and various frameworks such as Spring and
                        Hibernate.</p>
                </div>
                <div className="p-4 my-12 sm:my-8">
                    <h3 className=" p-0 md:p-4 text-center shadow-lg">Full Stack Web Developer</h3>
                    <p className='py-4 md:py-12'>Designed and developed full-stack web applications using modern technologies. Experienced in both
                        front-end (React, HTML/CSS) and back-end (Node.js, Express) development, ensuring seamless user
                        experiences and server-side functionality.</p>
                </div>
                <div className="p-4 my-12 sm:my-8">
                    <h3 className=" p-0 md:p-4 text-center shadow-lg">Machine Learning</h3>
                    <p className='py-4 md:py-12'>Applied machine learning techniques to build predictive models and data-driven solutions. Skilled
                        in Python, TensorFlow, and scikit-learn for tasks such as classification, regression, and
                        clustering.</p>
                </div>
                <div className="p-4 my-12 sm:my-8">
                    <h3 className=" p-0 md:p-4 text-center shadow-lg">UI/UX</h3>
                    <p className='py-4 md:py-12'>Developed intuitive user interfaces and engaging user experiences. Experience with tools like
                        Adobe XD and Figma to create wireframes, prototypes, and high-fidelity designs that meet user
                        needs and business goals.</p>
                </div>
            </div>
        </div>
        <div className='my-12 border-y-accentclr border-t p-12'>
        <div className=' flex flex-col justify-normal items-center text-center font-semibold font-lora'>
          <h4 className=' text-2xl'>Stacks I Know</h4>
          <h2 className='text-l'>Tools I Have Been Using Over Time for My Development</h2>
        </div>
        <div className='grid col-1 md:flex md:justify-around'>
        <div className="flex flex-col text-center items-center md:p-12 shadow-lg my-12">
                    <h4 className="shadow-lg">Languages</h4>
                    <div className="flex p-4 justify-center">
                        <img src="https://www.svgrepo.com/show/452234/java.svg" alt="Java" 
                             className="w-28 p-4"/>
                        <img src="https://www.svgrepo.com/show/452183/cpp.svg" alt="Cpp" 
                             className="w-28 p-4"/>
                        <img src="https://www.svgrepo.com/show/452091/python.svg" alt="Py" width="500" height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
                <div className="flex flex-col text-center p-12 shadow-lg my-12">
                    <h4 className="shadow-lg">Design</h4>
                    <div className="flex p-4 justify-center">
                        <img src="https://www.svgrepo.com/show/452202/figma.svg" alt="Figma" width="500" height="600"
                             className="w-28 p-4"/>
                        <img src="https://www.svgrepo.com/show/473499/adobe.svg" alt="Java" width="500" height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
                <div className="flex flex-col text-center p-12 shadow-lg my-12">
                    <h4 className="shadow-lg">Containers</h4>
                    <div className="flex  justify-center p-4">
                        <img src="https://www.svgrepo.com/show/452192/docker.svg" alt="Figma" width="500" height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
            </div>
            <div className=" grid col-1 md:flex justify-around">
                <div className="flex flex-col  justify-center text-center p-12 shadow-lg my-12">
                    <h4 className="shadow-lg">Version Control</h4>
                    <div className="flex  justify-center  p-4">
                        <img src="https://www.svgrepo.com/show/452210/git.svg" alt="Figma" width="500" height="600"
                             className="w-28 p-4"/>
                        <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="Figma" width="500"
                             height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
                <div className="flex flex-col   justify-center text-center p-12 shadow-lg my-12">
                    <h4 className="shadow-lg">Database</h4>
                    <div className="flex  justify-center  p-4">
                        <img src="https://www.svgrepo.com/show/373845/mongo.svg" alt="Figma" width="500" height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
                <div className="flex flex-col text-center p-12 shadow-lg my-12">
                   <h4 className="shadow-lg">IDE's</h4>
                    <div className="flex   justify-center p-4">
                        <img src="https://www.svgrepo.com/show/353906/intellij-idea.svg" alt="Figma" width="500"
                             height="600"
                             className="w-28 p-4"/>
                        <img src="https://www.svgrepo.com/show/452129/vs-code.svg" alt="Figma" width="500" height="600"
                             className="w-28 p-4"/>
                    </div>
                </div>
        </div>
        </div>
    </div>
  );
}

export default App;