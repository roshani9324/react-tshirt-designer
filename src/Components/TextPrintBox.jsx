import { useFormContext } from "react-hook-form";

export default function TextPrintBox() {
  const { register } = useFormContext();

  return (
    <div className="mt-6">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        T-shirt Text (max 3 lines)
      </label>
      <textarea
        {...register("printText")}
        rows={3}
        maxLength={300}
        placeholder="Type your text here..."
        className="w-full p-4 border border-gray-300 rounded-lg resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      />
    </div>
  );
}
