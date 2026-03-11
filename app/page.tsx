export default function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          <div>
            <h1 className="text-5xl font-bold mb-6">
              OMCO Battery Service
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Buy Battery & Get Doorstep Installation Service.
              Fast, Reliable and Affordable Battery Solutions.
            </p>

            <button className="bg-yellow-400 px-6 py-3 rounded-md font-semibold hover:bg-yellow-300">
              Explore Products
            </button>
          </div>

          <div>
            <img
              src="https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
              className="rounded-lg shadow-lg"
            />
          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="py-20 bg-gray-100">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10 px-6">

            <div className="shadow-lg rounded-lg overflow-hidden bg-white">
              <img src="https://blueprint.cdn.cloud.searchoptics.net/eaefdc28c0e03f70284fd5cdbe8b76cb/services/boschautoservice_services_battery_contentimg_04_why_car_battery_replacement_610x440.webp" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Battery Replacement
                </h3>
                <p className="text-gray-600">
                  Quick battery replacement for cars and bikes.
                </p>
              </div>
            </div>

            <div className="shadow-lg rounded-lg overflow-hidden bg-white">
              <img src="https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Doorstep Service
                </h3>
                <p className="text-gray-600">
                  Battery delivery and installation at your home.
                </p>
              </div>
            </div>

            <div className="shadow-lg rounded-lg overflow-hidden bg-white">
              <img src="https://blueprint.cdn.cloud.searchoptics.net/eaefdc28c0e03f70284fd5cdbe8b76cb/services/boschautoservice_services_battery_contentimg_04_why_car_battery_replacement_610x440.webp" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Battery Checkup
                </h3>
                <p className="text-gray-600">
                  Free battery health checkup and consultation.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


{/* FEATURED PRODUCTS */}
<section className="py-20">

<div className="max-w-6xl mx-auto text-center">

<h2 className="text-3xl font-bold mb-12">
Featured Batteries
</h2>

<div className="grid md:grid-cols-3 gap-10 px-6">

{/* Car Battery */}
<div className="shadow-lg p-6 rounded-lg bg-white">
<img
src="https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg" 
className="mx-auto mb-4 h-40 object-contain"
/>
<h3 className="font-semibold text-lg">
Car Battery
</h3>
<p className="text-gray-600">
High performance battery for cars
</p>
<button className="mt-4 bg-yellow-400 px-4 py-2 rounded">
View Details
</button>
</div>

{/* Bike Battery */}
<div className="shadow-lg p-6 rounded-lg bg-white">
<img
src="https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
className="mx-auto mb-4 h-40 object-contain"
/>
<h3 className="font-semibold text-lg">
Bike Battery
</h3>
<p className="text-gray-600">
Long lasting battery for bikes
</p>
<button className="mt-4 bg-yellow-400 px-4 py-2 rounded">
View Details
</button>
</div>

{/* Inverter Battery */}
<div className="shadow-lg p-6 rounded-lg bg-white">
<img
src="https://content.jdmagicbox.com/comp/def_content/automobile-electric-repair-and-services/automobile-electric-repair---services-3-1-automobile-electric-repair-and-services-3-c6cns.jpg"
className="mx-auto mb-4 h-40 object-contain"
/>
<h3 className="font-semibold text-lg">
Inverter Battery
</h3>
<p className="text-gray-600">
Reliable power backup battery
</p>
<button className="mt-4 bg-yellow-400 px-4 py-2 rounded">
View Details
</button>
</div>

</div>
</div>
</section>


      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-12">
            Why Choose OMCO Battery
          </h2>

          <div className="grid md:grid-cols-3 gap-10 px-6">

            <div>
              <h3 className="text-xl font-semibold">Fast Service</h3>
              <p className="text-gray-600">
                Battery installation within 30 minutes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Best Price</h3>
              <p className="text-gray-600">
                Affordable battery prices with warranty.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Doorstep Support</h3>
              <p className="text-gray-600">
                Battery delivery and service at your home.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CUSTOMER REVIEWS */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-12">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-10 px-6">

            <div className="shadow-lg p-6 rounded">
              <p>"Very fast service. Battery replaced in 20 minutes."</p>
              <h4 className="mt-4 font-semibold">Rahul Sharma</h4>
            </div>

            <div className="shadow-lg p-6 rounded">
              <p>"Affordable price and professional technician."</p>
              <h4 className="mt-4 font-semibold">Amit Singh</h4>
            </div>

            <div className="shadow-lg p-6 rounded">
              <p>"Best doorstep battery service in city."</p>
              <h4 className="mt-4 font-semibold">Vikas Gupta</h4>
            </div>

          </div>

        </div>

      </section>


      {/* CONTACT CTA */}
      <section className="bg-black text-white py-16 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Need Battery Service?
        </h2>

        <p className="mb-6">
          Contact us today for fast and reliable service.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold">
          Contact Now
        </button>

      </section>

    </div>
  );
}