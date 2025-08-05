export default function TestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Test Page - Styling Check
      </h1>
      <p className="text-gray-600 mb-4">
        If you can see this page with proper styling, then Tailwind CSS is working correctly.
      </p>
      <div className="bg-blue-100 p-4 rounded-lg">
        <p className="text-blue-800">This should have a blue background.</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700">
        Test Button
      </button>
    </div>
  )
}