export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1628]">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <h1 className="text-2xl font-bold text-[#0a1628] mb-2">Sign Up</h1>
        <p className="text-gray-500 text-sm mb-6">Create your account</p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200
                       focus:outline-none focus:border-[#f5a623]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200
                       focus:outline-none focus:border-[#f5a623]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl border border-gray-200
                       focus:outline-none focus:border-[#f5a623]"
          />
          <button className="w-full py-3 rounded-xl bg-[#f5a623] text-white font-bold">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}