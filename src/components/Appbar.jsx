
function Appbar() {
  return (
    <div>
        <header className="flex text-black justify-between items-center px-10 py-4 ">
          <div className="flex items-center space-x-8">
              <a href="#products" className="hover:text-gray-500">Home</a>
              <a href="#products" className="hover:text-gray-500">About Us</a>
              <a href="#products" className="hover:text-gray-500">Products</a>
          </div>
          <div>
              <a href="#home" className="text-lg font-bold">Techkrate</a>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#solutions" className="hover:text-gray-500">Solutions</a>
            <a href="#services" className="hover:text-gray-500">Services</a>
            <a href="#contact" className="hover:text-gray-500">Contact Us</a>
          </div>
        </header>
    </div>
  )
}

export default Appbar