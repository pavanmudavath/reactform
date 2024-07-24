import  { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profilePicture: null,
    interests: [],
    gender: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  //

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        interests: checked ? [...prevState.interests, value] : prevState.interests.filter(interest => interest !== value)
      }));
    } else if (type === 'file') {
      setFormData(prevState => ({
        ...prevState,
        profilePicture: files[0]
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {formSubmitted ? (
        <div className="text-center text-green-600 text-xl font-bold">
          Form submitted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Profile Picture</label>
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Interests</label>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="interests"
                value="Coding"
                onChange={handleChange}
                className="mr-2"
              />
              <label>Coding</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="interests"
                value="Music"
                onChange={handleChange}
                className="mr-2"
              />
              <label>Music</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="interests"
                value="Gaming"
                onChange={handleChange}
                className="mr-2"
              />
              <label>Gaming</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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
