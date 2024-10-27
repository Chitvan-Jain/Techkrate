
function AboutPage() {
  return (
    <div>
        <section className="bg-blue-900 text-white px-10 py-16">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-8">
            We are a global leader in Engineering, Procurement, and Construction (EPC) services, committed to delivering innovative and sustainable solutions across multiple industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Completion Rate</h3>
              <p className="text-3xl font-bold">99%</p>
              <p>On-time Project Delivery across various global markets.</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
              <p className="text-3xl font-bold">95%</p>
              <p>Committed to clients through optimized engineering processes.</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Cost Efficiency</h3>
              <p className="text-3xl font-bold">20%</p>
              <p>Helping clients save through optimized engineering processes.</p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AboutPage