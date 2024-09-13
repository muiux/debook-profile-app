import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/profileSlice";
import { RootState } from "../redux/store";

const ProfileForm: React.FC = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [bio, setBio] = useState(profile.bio);
  const [picture, setPicture] = useState(profile.picture);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Invalid email format");
      return;
    }
    dispatch(updateProfile({ name, email, bio, picture }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPicture(URL.createObjectURL(file));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Profile Picture</label>
        <input
          type="file"
          onChange={handleImageUpload}
          className="border p-2"
        />
        {picture && (
          <img src={picture} alt="Preview" className="mt-2 w-24 h-24" />
        )}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Save Profile
      </button>
    </form>
  );
};

export default ProfileForm;
