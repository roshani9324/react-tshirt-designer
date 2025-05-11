import { useFormContext } from "react-hook-form";

export default function FormPanel() {
  const { register } = useFormContext();

  return (
    <div className="p-6 bg-white shadow-xl rounded-2xl space-y-5 transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-xl font-bold text-gray-800">Your Body Info</h2>

      <input
        {...register("height")}
        placeholder="Height (cm)"
        defaultValue="180"
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <input
        {...register("weight")}
        placeholder="Weight (kg)"
        defaultValue="80"
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <select
        {...register("build")}
        defaultValue="athletic"
        className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      >
        <option value="lean">Lean</option>
        <option value="regular">Regular</option>
        <option value="athletic">Athletic</option>
        <option value="big">Big</option>
      </select>
    </div>
  );
}
