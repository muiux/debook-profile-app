import React from "react";
import ProfileForm from "./components/ProfileForm";
import ProfileView from "./components/ProfileView";

const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-center">Profile Management</h1>
      <ProfileForm />
      <ProfileView />
    </div>
  );
};

export default App;
