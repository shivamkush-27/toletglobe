import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { NavLink } from "react-router-dom";

// Define Zod schema for validation
const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, { message: "Phone number must be 10 digits" }),
  message: z.string().min(2, { message: "Message is required" }),
});

const Get_In_Touch = () => {
  // Initialize react-hook-form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto p-6 text-white bg-black">
      <h2 className="text-5xl font-semiboldbold mb-4 text-[#04c4b1]">
        GET IN TOUCH
      </h2>
      <p className="mb-1 text-zinc-500">Have some questions?</p>
      <p className="mb-6 text-zinc-500">Feel free to ask them anytime</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="w-full px-3 py-2 border-0 border-b border-gray-300 bg-black  focus:outline-none focus:border-yellow-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full px-3 py-2 border-0 border-b border-gray-300 bg-black  focus:outline-none focus:border-yellow-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="tel"
            placeholder="Phone"
            {...register("phone")}
            className="w-full px-3 py-2 border-0 border-b border-gray-300 bg-black  focus:outline-none focus:border-yellow-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Message"
            {...register("message")}
            className="w-full px-3 py-2 border-0 border-b border-gray-300 bg-black  focus:outline-none focus:border-yellow-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <NavLink to='/contact'>
          <button type="submit" className="text-[#bda92a] text-lg font-semibold">
            Send Message →
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default Get_In_Touch;