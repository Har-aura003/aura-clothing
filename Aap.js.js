import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AURA Clothing Company</h1>
        <div className="space-x-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#products" className="hover:text-gray-400">Products</a>
          <a href="#categories" className="hover:text-gray-400">Categories</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-[url('https://source.unsplash.com/1600x900/?fashion,clothing')] bg-cover bg-center h-[500px] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">AURA Clothing Company</h1>
          <p className="text-xl mt-4">Elevate Your Style with Modern Fashion</p>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200">Shop Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="p-6">
        <h2 className="text-3xl font-semibold text-center mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <img src="https://source.unsplash.com/300x300/?shirt" alt="Shirt" className="w-full h-60 object-cover rounded-t-lg" />
            <h3 className="mt-2 font-medium">Casual White Shirt</h3>
            <p className="text-red-500 font-bold">₹399</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <img src="https://source.unsplash.com/300x300/?jacket" alt="Jacket" className="w-full h-60 object-cover rounded-t-lg" />
            <h3 className="mt-2 font-medium">Denim Jacket</h3>
            <p className="text-red-500 font-bold">₹699</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <img src="https://source.unsplash.com/300x300/?jeans" alt="Jeans" className="w-full h-60 object-cover rounded-t-lg" />
            <h3 className="mt-2 font-medium">Skinny Blue Jeans</h3>
            <p className="text-red-500 font-bold">₹499</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="p-6 bg-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-4">Shop by Category</h2>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-4 py-2 rounded">Shirts</button>
          <button className="bg-black text-white px-4 py-2 rounded">Jeans</button>
          <button className="bg-black text-white px-4 py-2 rounded">Jackets</button>
          <button className="bg-black text-white px-4 py-2 rounded">Accessories</button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 mb-4 border rounded" rows="4"></textarea>
          <button className="bg-black text-white px-4 py-2 rounded w-full">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4">
        <p>© 2025 AURA Clothing Company | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
