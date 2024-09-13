import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ProfileView: React.FC = () => {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <div>
        <strong>Name: </strong> {profile.name}
      </div>
      <div>
        <strong>Email: </strong> {profile.email}
      </div>
      <div>
        <strong>Bio: </strong> {profile.bio}
      </div>
      {profile.picture && (
        <img src={profile.picture} alt="Profile" className="mt-2 w-24 h-24" />
      )}
    </div>
  );
};

export default ProfileView;
