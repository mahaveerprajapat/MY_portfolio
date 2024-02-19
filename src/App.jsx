// import './App.css'

import Image1 from './pic.jpg';
import Image2 from './cer.png';
import Home from './Home';
function App() {


  return (
    <>

      <Home />

      <div className="flex bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  h-96 rounded-br-full">

        <div className=" flex mx-32 my-24   text-center  text-gray-50">
          <div className="font-semibold">
            <h1 className='text-4xl'>Full Stack Developer</h1>
            <h1 className='text-4xl'>& MERN Stack</h1>
            <p className='text-2xl'>Hi, I am mahaveer prajapat</p>
            <p className='text-2xl'>focusing on creating </p>
            <p className='text-2xl'> web application</p>
          </div>

          <div>
            <img src={Image1} alt="mahaveer image" className="rounded-full w-80 h-60 mx-96" />
          </div>

        </div>

      </div>


      <section id="about">

        <h1 className='text-center text-6xl text-gray-50 font-semibold mt-20'>ABOUT MYSELF</h1>

        <div className='flex justify-around mt-20'>
          <div className='flex font-semibold text-gray-50 h-60 w-96 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-r-full text-2xl py-20 px-4'>
            <p>Full Stack Developer</p>
            <p>Mern Stack Developer</p>
            <p>React.JS Developer</p>

          </div>
          <div className='h-60 w-96  text-center text-gray-50 text-2xl font-semibold pt-4'>
            <p>hii,i am mahaveer prajapat i have completed my BCA  gradution and i have completed my internship MERN STACK DEVELOPER  from Apna college. right now i am learning new technology </p>
          </div>
        </div>

      </section>


      <section class="flex pl-52 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-16 my-20 rounded-l-full">


        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-semibold text-white mb-8">Education</h2>
          <div class="max-w-4xl mx-auto">
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-white">Bachelor's Degree in Computer Science(BCA)</h3>
              <p class="text-lg text-white">MDSU  University, 2020 - 2023 (8 + CGPA)</p>
            </div>
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-white">Internship MERN STACK DEVELOPER </h3>
              <p class="text-lg text-white">Apna college, 2023 - 2024</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white">Others Courses</h3>
              <ul class="list-disc list-inside text-lg text-white">
                <li> Web Development - Apna College</li>
                <li>RS-CIT STAR COLLEGE</li>
                <li>Tally-9 </li>
              </ul>
            </div>
          </div>
        </div>


        <div>

          <img src={Image2} alt="mahaveer image" className="rounded-full w-80 h-96 mx-96" />
        </div>

      </section>




      <section class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-16 my-20 rounded-r-full" id="project">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-semibold text-white mb-8">ACADEMIC PROJECT</h2>
          <div class="max-w-4xl mx-auto">
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-white">Wanderlust - like a Airbnb Clone </h3>
              <p class="text-lg text-white">Holiday rentals,cabins,beach,house & more.</p>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-white">Features</h3>
              <ul class="list-disc list-inside text-lg text-white">
                <li> Worked on the Wanderlust application development on Frontend-Backend.</li>
                <li>Wanderlust project uses multiple restful APIs.</li>
                <li>Technologies: html, css, javascript, NodeJS, ExpressJS, MongoDB, BootStrap,ejs,mvs tool. </li>
                <a href="https://wanderlust-web-project-0k20.onrender.com/listings">project link</a>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section id="contact">



        <h2 class="text-6xl font-semibold text-center my-20 ">Contact Us</h2>
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full rounded-l-full">
          <div class="max-w-md mx-auto py-20">
            <form>
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-white">Name</label>
                <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-white">Email</label>
                <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>
              <div class="mb-4">
                <label for="message" class="block text-sm font-medium text-white">Message</label>
                <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
              </div>
              <div class="mt-6">
                <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>


      <footer class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-12 mt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-center font-semibold">
            <a href="#" class="text-white hover:text-gray-300 px-3 py-2">Home</a>
            <a href="#" class="text-white hover:text-gray-300 px-3 py-2">About</a>
            <a href="#" class="text-white hover:text-gray-300 px-3 py-2">Services</a>
            <a href="#" class="text-white hover:text-gray-300 px-3 py-2">Contact</a>
          </div>
          <div class="mt-8">
            <p class="text-center text-white">&copy; 2024 Mahaveer prajapat. All rights reserved.</p>
          </div>
        </div>
      </footer>



    </>
  )
}

export default App
