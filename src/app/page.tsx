export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Chicago Veterinary Clinic
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional care for your beloved pets
        </p>
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Welcome to our clinic!
          </h2>
          <p className="text-blue-700">
            We provide compassionate veterinary care for Chicago pets.
          </p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors">
          Call (555) 123-4567
        </button>
      </div>
    </div>
  )
}