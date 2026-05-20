export default function WearzaWebsite() {
  // Flexible Dynamic Website System
  // You can fully customize products, texts, links, banners, and sections later.

  const products = [
    {
      title: "Premium T-Shirt",
      price: "$25",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Fashion Hoodie",
      price: "$40",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Modern Jacket",
      price: "$55",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const websiteSettings = {
    brandName: "WEARZA CLOTHING",
    slogan: "Premium Black & White Fashion Brand",
    whatsapp: "8801930030083",
    facebook:
      "https://business.facebook.com/latest/home?nav_ref=bm_home_redirect&business_id=106317495464818&asset_id=108614151967427",
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-5 border-b border-gray-800 sticky top-0 bg-black/95 backdrop-blur z-50 gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/mnt/data/Wearza.png"
            alt="Wearza Logo"
            className="w-14 h-14 object-contain"
          />
          <h1 className="text-3xl font-bold tracking-[6px]">WEARZA</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-sm md:text-lg">
          <a href="#home" className="hover:text-gray-400 transition">Home</a>
          <a href="#products" className="hover:text-gray-400 transition">Products</a>
          <a href="#about" className="hover:text-gray-400 transition">About</a>
          <a href="#reviews" className="hover:text-gray-400 transition">Reviews</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-b from-black via-gray-950 to-black"
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-5xl">
          <img
            src="/mnt/data/Wearza.png"
            alt="Wearza"
            className="w-40 mx-auto mb-8 drop-shadow-2xl"
          />

          <h2 className="text-5xl md:text-8xl font-extrabold tracking-[8px] mb-6 leading-tight">
            WEARZA
            <br />
            CLOTHING
          </h2>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-2xl leading-relaxed">
            Premium black & white aesthetic fashion brand with modern streetwear,
            elegant outfits, and high-quality clothing collections.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="px-8 py-4 bg-white text-black rounded-2xl text-lg font-semibold hover:scale-105 transition duration-300 shadow-2xl">
              Shop Now
            </button>

            <a
              href="https://wa.me/8801930030083"
              target="_blank"
              className="px-8 py-4 border border-white rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-6 md:px-10 py-24 bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-5">
          <h3 className="text-4xl md:text-5xl font-bold tracking-wide">
            Featured Products
          </h3>

          <input
            type="text"
            placeholder="Search Product"
            className="bg-gray-900 border border-gray-700 rounded-xl px-5 py-3 w-full md:w-80 outline-none"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.03] transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-2xl font-semibold">{product.title}</h4>
                  <span className="text-xl font-bold text-gray-300">
                    {product.price}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Premium quality fashion wear with aesthetic and modern design.
                </p>

                <div className="flex gap-4">
                  <button className="flex-1 bg-white text-black py-3 rounded-xl font-semibold hover:scale-105 transition">
                    Add to Cart
                  </button>

                  <a
                    href="https://wa.me/8801930030083"
                    target="_blank"
                    className="flex-1 border border-white py-3 rounded-xl font-semibold text-center hover:bg-white hover:text-black transition"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upload System Section */}
      {/* Flexible Admin Features */}
      <section className="px-6 md:px-10 py-20 bg-black border-t border-gray-800 border-b">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Flexible Website Control System
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
            This website is designed to be fully flexible so you can easily edit
            products, images, banners, texts, pricing, colors, contact details,
            and fashion collections anytime after publishing.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              "Add Unlimited Products",
              "Change Banner Anytime",
              "Edit Price & Description",
              "Upload New Product Images",
              "WhatsApp Order System",
              "Facebook Integration",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-950 border border-gray-800 rounded-3xl p-8 shadow-2xl"
              >
                <p className="text-xl font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-4xl mx-auto bg-gray-950 border border-gray-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-4xl font-bold mb-6">Product Upload System</h3>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Easily upload your new fashion products with image, title, price,
            and description.
          </p>

          <div className="grid md:grid-cols-2 gap-5 text-left">
            <input
              type="text"
              placeholder="Product Name"
              className="bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Product Price"
              className="bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none"
            />

            <input
              type="file"
              className="bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none col-span-1 md:col-span-2"
            />

            <textarea
              placeholder="Product Description"
              rows="5"
              className="bg-black border border-gray-700 rounded-xl px-5 py-4 outline-none col-span-1 md:col-span-2"
            ></textarea>
          </div>

          <button className="mt-8 px-10 py-4 bg-white text-black rounded-2xl text-lg font-bold hover:scale-105 transition">
            Upload Product
          </button>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="px-6 md:px-10 py-24 bg-black text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-16">Customer Reviews</h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Amazing quality and aesthetic design.",
            "Best clothing brand for modern fashion lovers.",
            "Premium quality with fast delivery service.",
          ].map((review, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-3xl p-8 shadow-xl"
            >
              <p className="text-gray-300 text-lg leading-relaxed">“{review}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 md:px-10 py-24 bg-gradient-to-b from-gray-950 to-black text-center"
      >
        <h3 className="text-4xl md:text-5xl font-bold mb-8">About Wearza</h3>

        <p className="max-w-4xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
          Wearza Clothing is a premium black & white aesthetic fashion brand.
          We provide stylish, trendy, and high-quality clothing collections for
          modern lifestyle lovers. Our mission is to bring elegant streetwear
          fashion with comfort, confidence, and uniqueness.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-10 py-24 bg-black text-center">
        <h3 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h3>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Connect with Wearza Clothing through Facebook or WhatsApp.
          <br />
          WhatsApp: +88 01930030083
          <br />
          WhatsApp: +88 01608941005
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://business.facebook.com/latest/home?nav_ref=bm_home_redirect&business_id=106317495464818&asset_id=108614151967427"
            target="_blank"
            className="px-8 py-4 bg-white text-black rounded-2xl text-lg font-bold hover:scale-105 transition"
          >
            Facebook Page
          </a>

          <a
            href="https://wa.me/8801930030083"
            target="_blank"
            className="px-8 py-4 border border-white rounded-2xl text-lg font-bold hover:bg-white hover:text-black transition"
          >
            WhatsApp Order
          </a>
        </div>
      </section>

      {/* Footer */}
      {/* Future Upgrade Section */}
      <section className="px-6 md:px-10 py-24 bg-gray-950 text-center border-t border-gray-800">
        <h3 className="text-4xl md:text-5xl font-bold mb-8">
          Future Upgrade Ready
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-14">
          {[
            "Online Payment Gateway",
            "Customer Login System",
            "Admin Dashboard",
            "Order Tracking",
            "Inventory Management",
            "Discount Coupon System",
            "Dark & Light Mode",
            "International Shipping",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-3xl p-6 shadow-xl"
            >
              <p className="text-lg font-semibold text-gray-200">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        © 2026 Wearza Clothing — Premium Black & White Fashion Brand.
      </footer>
    </div>
  );
}
