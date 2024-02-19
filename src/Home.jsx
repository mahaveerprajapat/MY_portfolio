export default function Home(){
    return ( 
        <nav class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  py-4 fixed w-full">
        <div class="container mx-auto flex justify-between items-center px-4">
          <div class="flex items-center">
            <a href="#" class="text-white text-xl font-bold">Veer</a>
            <ul class="ml-8 flex space-x-4">
              <li><a href="#" class="text-white hover:text-gray-300">Home</a></li>
              <li><a href="#about" class="text-white hover:text-gray-300">About</a></li>
              <li><a href="#project" class="text-white hover:text-gray-300">portfolio</a></li>
              <li><a href="#contact" class="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <a href="#" class="text-white ml-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition duration-300">Login</a>
            <a href="#" class="text-white ml-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition duration-300">Sign Up</a>
          </div>
        </div>
      </nav>
     );
}