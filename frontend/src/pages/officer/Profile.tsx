const Profile = () => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-2xl font-bold">
        Officer Profile
      </h1>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-slate-500">
            Name
          </p>

          <p className="font-medium">
            Officer User
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Email
          </p>

          <p className="font-medium">
            officer@gmail.com
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Role
          </p>

          <p className="font-medium">
            Officer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;