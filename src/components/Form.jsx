import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {formSubmitted ? (
        <div className="text-center text-green-600 text-xl font-bold">
          Form submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required', 
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email address'
                }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              {...register('phone', { 
                required: 'Phone number is required', 
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Invalid phone number'
                }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Profile Picture</label>
            <input
              type="file"
              {...register('profilePicture', { required: 'Profile picture is required' })}
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            {errors.profilePicture && <p className="text-red-500 text-sm">{errors.profilePicture.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Interests</label>
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register('interests')}
                value="Coding"
                className="mr-2"
              />
              <label>Coding</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register('interests')}
                value="Music"
                className="mr-2"
              />
              <label>Music</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                {...register('interests')}
                value="Gaming"
                className="mr-2"
              />
              <label>Gaming</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <select
              {...register('gender', { required: 'Gender is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
