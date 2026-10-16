
function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-2xl text-white">
            ♡
          </span>
          <span className="text-xl font-semibold">Vital+Flow</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#services" className="hover:text-blue-500">Services</a>
          <a href="#doctors" className="hover:text-blue-500">Doctors</a>
          <a href="#blog" className="hover:text-blue-500">Blog</a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-blue-500 px-6 py-3 text-sm text-white transition hover:bg-blue-600"
        >
          Book a call
        </a>
      </nav>

      {/* Hero Section */}
      <main
        id="about"
        className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-10 md:grid-cols-2 md:py-8"
      >
        <section className="py-5 md:py-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="text-xl tracking-wider text-amber-400">
              ★★★★★
            </span>
            <span className="text-base">5.0 (980 Reviews)</span>
          </div>

          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Partner in health and wellness
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
            Providing advanced healthcare solutions with a
            compassionate touch for every patient.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Book a call
            </a>

            <a
              href="#video"
              className="flex items-center gap-3 text-sm font-medium hover:text-blue-500"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                ▶
              </span>
              Watch Video
            </a>
          </div>

          {/* Appointment Info */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/80?img=12"
                alt="Patient"
                className="h-11 w-11 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://i.pravatar.cc/80?img=13"
                alt="Patient"
                className="h-11 w-11 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://i.pravatar.cc/80?img=14"
                alt="Patient"
                className="h-11 w-11 rounded-full border-2 border-white object-cover"
              />
            </div>

            <div>
              <p className="font-medium">5000+ Appointments</p>
              <p className="mt-1 text-sm text-gray-500">
                Patients booked already
              </p>
            </div>
          </div>
        </section>

        {/* Doctor Image */}
        <div className="h-[420px] overflow-hidden rounded-[32px] sm:h-[520px] lg:h-[600px]">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1000&q=85"
            alt="Doctor wearing a white coat"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </main>
{/* بخش دوم  */}

      {/* Virtual Consultation */}
      <section className="mx-auto my-16 w-full max-w-6xl rounded-3xl bg-sky-50 px-6 py-10 sm:px-10">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
            Virtual Consultation
          </h2>

          <div className="flex items-center gap-2">
            <span className="text-xl tracking-wider text-amber-400">
              ★★★★★
            </span>
            <span className="text-sm sm:text-base">
              5.0 (980 Reviews)
            </span>
          </div>
        </div>

        <form
          className="mt-12 grid grid-cols-1 items-end gap-5 sm:grid-cols-2 lg:grid-cols-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="mb-3 block text-base text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full rounded-xl border border-transparent bg-white px-4 py-4 outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label className="mb-3 block text-base text-gray-700">
              Doctor
            </label>
            <input
              type="text"
              placeholder="Dr Maria Cleven"
              className="w-full rounded-xl border border-transparent bg-white px-4 py-4 outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label className="mb-3 block text-base text-gray-700">
              Location
            </label>
            <input
              type="text"
              placeholder="Amsterdam"
              className="w-full rounded-xl border border-transparent bg-white px-4 py-4 outline-none focus:border-blue-400"
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-blue-500 px-6 py-4 font-medium text-white transition hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <h3 className="text-5xl font-medium tracking-tight sm:text-6xl">
            200K+
          </h3>

          <p className="max-w-xs leading-7 text-gray-700">
            Cured satisfied patients
            <br />
            around the globe
          </p>
        </div>
      </section>
   {/* بخش سوم  */}
   
      {/* Why Choose VitalFlow */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <p className="mb-5 text-sm font-medium tracking-widest text-gray-600">
            <span className="mr-3 text-blue-500">—</span>
            WHY VITALFLOW
          </p>
<h2 className="max-w-lg text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
  Why choose VitalFlow for your healthcare?
</h2>

          <p className="mt-6 max-w-lg leading-8 text-gray-500">
            Our team of dedicated healthcare providers brings years of
            experience and expertise to deliver care.
          </p>

          <button className="mt-8 rounded-full border border-gray-300 px-6 py-4 font-medium text-green-950 hover:bg-gray-50">
            More about us
            <span className="ml-3 text-blue-500">↗</span>
          </button>
        </div>

        {/* Right Side: Four Cards */}
        <div className="grid gap-4 sm:grid-cols-2">

          {/* Card 1 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-500">
                ♧
              </span>
              <span className="text-sm text-gray-400">01</span>
            </div>
<h3 className="mt-8 text-xl font-bold text-gray-900">
  Experienced Professionals
</h3>

            <p className="mt-4 leading-7 text-gray-500">
              Our team of dedicated healthcare providers brings years of
              experience and expertise to deliver care.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-500">
                ⚕
              </span>
              <span className="text-sm text-gray-400">02</span>
            </div>

            <h3 className="mt-8 text-xl font-bold text-gray-900">
              Advanced Technology
            </h3>

            <p className="mt-4 leading-7 text-gray-500">
              We utilize cutting-edge medical technology to provide accurate
              diagnoses and effective treatments.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-500">
                ♡
              </span>
              <span className="text-sm text-gray-400">03</span>
            </div>

            <h3 className="mt-8 text-xl font-bold text-black-400">
              Care made for you
            </h3>

            <p className="mt-4 leading-7 text-gray-500">
              Personalized guidance shaped around your needs and goals.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl border border-gray-200 p-7">
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-500">
                ◷
              </span>
              <span className="text-sm text-gray-400">04</span>
            </div>

            <h3 className="mt-8 text-xl font-bold text-black">
              Here when you need us
            </h3>

            <p className="mt-4 leading-7 text-gray-500">
              Convenient appointments and clear support throughout your
              journey.
            </p>
          </div>

        </div>
      </section>






    </div>
  );
}

export default HomePage;
