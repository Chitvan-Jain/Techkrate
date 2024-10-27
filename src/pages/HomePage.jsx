import Appbar from "../components/Appbar"
import AboutPage from "./AboutPage"

function HomePage() {
  return (
    <>
        <div>
            <Appbar/>
        </div>
        
        <div className=" flex px-10 py-16 bg-gray-50 text-gray-900">
            <div className="flex flex-col md:flex-row items-center">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold leading-tight">
                        Engineering for Sustainable Future
                    </h1>
                    <p className="text-lg">
                        Discover how our innovative EPC solutions are transforming industries and creating a more sustainable world.
                    </p>
                    <button className="px-6 py-3 mt-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                        Get Started
                    </button>
                    <div className="flex space-x-4 mt-4">
                        <span className="text-blue-600">● Engineering</span>
                        <span className="text-blue-600">● Construction</span>
                        <span className="text-blue-600">● Procurement</span>
                    </div>
                </div>
                
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 relative">
                <img
                    src="https://via.placeholder.com/500"
                    alt="Sustainable Engineering"
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
        <AboutPage/>
        
    </>
  )
}

export default HomePage