import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Morales Home Glow Cleaning</title>
      </Head>
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-sky-700">Morales Home Glow</h1>
        <nav className="space-x-4">
          <a href="#services" className="hover:text-sky-600">Services</a>
          <a href="#reviews" className="hover:text-sky-600">Reviews</a>
          <a href="#contact" className="hover:text-sky-600">Contact</a>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section className="text-center py-12">
          <h2 className="text-4xl font-semibold">Because everyone deserves a glowing house ✨</h2>
          <p className="mt-4 text-lg text-gray-600">Serving Durham, Carrboro, Chapel Hill, and Raleigh</p>
          <a href="https://calendar.app.google/gMVsSi8q6PXBba1v7" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-sky-600 text-white px-6 py-3 rounded-lg">Book Now</a>
        </section>

        <section id="services" className="py-12">
          <h3 className="text-2xl font-semibold">Our Services</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✅ Standard Cleaning</li>
            <li>✅ Deep Cleaning</li>
            <li>✅ Move-In/Out</li>
            <li>✅ Post-Construction</li>
            <li>✅ Airbnb Turnover</li>
            <li>✅ Eco-Friendly Options</li>
          </ul>
        </section>

        <section id="reviews" className="py-12 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold">What Our Clients Say</h3>
          <div className="mt-4 space-y-4">
            <blockquote className="border-l-4 border-sky-600 pl-4">“My apartment has never looked better!”</blockquote>
            <blockquote className="border-l-4 border-sky-600 pl-4">“Fast booking and super friendly.”</blockquote>
            <blockquote className="border-l-4 border-sky-600 pl-4">“The deep clean was worth every penny.”</blockquote>
          </div>
        </section>

        <section id="contact" className="py-12">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p className="mt-2">📞 <a href="tel:9192598372" className="text-sky-600">919-259-8372</a></p>
          <p className="mt-1">📧 <a href="mailto:moraleshomeglowcleaning@gmail.com" className="text-sky-600">moraleshomeglowcleaning@gmail.com</a></p>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Morales Home Glow Cleaning. All rights reserved.</p>
      </footer>
    </>
  )
}
