import Link from 'next/link'
import React from 'react'

const lokasiOutlet = [
    {
        city: "Trunojoyo Madiun	Jl. Trunojoyo No.94, Nambangan Kidul, Kec. Manguharjo, Kota Madiun, Jawa Timur 63128",
        link: "https://maps.app.goo.gl/wLVaJ8NNCoF39LWP8",
    },
    {
        city: "Alfamart Mastrip	Jl. Mastrip No.150, Klegen, Kec. Kartoharjo, Kota Madiun, Jawa Timur 63117",
        link: "https://maps.app.goo.gl/FczpeXPfbeohNPyp6",
    },
    {
        city: "Alfamart Manguharjo	Jl. Campur Sari, Winongo, Kec. Manguharjo, Kota Madiun, Jawa Timur 63126",
        link: "https://maps.app.goo.gl/JfhoR2jaPKEidX22A",
    },
    {
        city: "Alfamart Jiwan	Jl. Raya Solo, Dukuh Mancaan No.69, RT.34/RW.09, Bragak, Bragak Kelurahan Jiwan, Kec. Maospati, Kabupaten Madiun, Jawa Timur 63392",
        link: "https://maps.app.goo.gl/W8SyRFCAiL8P4n1p6",
    },
    {
        city: "Alfamart Taman Praja	Jl. Taman Praja No.5, RW.78, Pandean, Kec. Taman, Kota Madiun, Jawa Timur 63133",
        link: "https://maps.app.goo.gl/YEe9kAYrywiJLDfU8",
    },
    {
        city: "Alfamidi Caruban	Jl. Panglima Sudirman Lingkungan Dua No.159, Caruban, Pandean, Kec. Mejayan, Kabupaten Madiun, Jawa Timur 63253",
        link: "https://maps.app.goo.gl/zkqVQS4U8nwsSmoT6",
    },
    {
        city: "Gorang - Gareng	Jl. Bhayangkara, RT.01/RW.01, Bulu, Genengan, Kec. Kawedanan, Kabupaten Magetan, Jawa Timur 63382",
        link: "https://maps.app.goo.gl/6wPyfREYrFU6Yxib8",
    },
    {
        city: "Maospati	Jl. Raya Maospati - Ngawi No.108, Kleco, Maospati, Kec. Maospati, Kabupaten Magetan, Jawa Timur 63392",
        link: "https://maps.app.goo.gl/Eqmp2kzwNAQeph1d8",
    },
    {
        city: "Ngawi	Jl. Trunojoyo No.117, Kerek, Margomulyo, Kec. Ngawi, Kabupaten Ngawi, Jawa Timur 63215",
        link: "https://maps.app.goo.gl/sBMyUMGTBoWLGYdGA",
    },
    {
        city: "Ponorogo	Jl. Jend. Ahmad Yani No.147, Pesantren, Surodikraman, Kec. Ponorogo, Kabupaten Ponorogo, Jawa Timur 63419",
        link: "https://maps.app.goo.gl/d51EoZGiEqWGsAnK9",
    }
]
const lokasiOutletPage = () => {
    return (
        <section className='bg-slate-100 min-h-screen'>
            <div className='bg-orange-500 text-white text-center py-20 pt-32'>
                <h1 className='text-3xl md:text-5xl font-semibold'>Lokasi Outlet Tursina Kebab</h1>
                <p>
                    Temukan outlet Tursina Kebab terdekat dari lokasi Anda dan nikmati kebab hangat kami dengan mudah!
                </p>
            </div>
            <div className="max-w-4xl mx-auto p-6 py-16">
                <div className="relative w-full overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d253931.35602327294!2d111.3509617146458!3d-7.6030450074984275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stursina%20kebab%20pandean!5e1!3m2!1sid!2sid!4v1758957227397!5m2!1sid!2sid"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-orange-200 pt-20 pb-10 px-4'>
                {lokasiOutlet.map((loc, index) => (
                    <div key={index} className='bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition'>
                        <h3 className=' text-amber-900 mb-2'>
                            {loc.city}
                        </h3>
                        <Link
                            href={loc.link}
                            target='_blank'
                            className='mt-2 px-4 py-2 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition'
                        >
                            Lihat Lokasi
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default lokasiOutletPage