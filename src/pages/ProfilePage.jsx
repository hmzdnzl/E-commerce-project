export default function ProfilePage() {
  const userState =
    JSON.parse(localStorage.getItem("user")) ||
    JSON.parse(sessionStorage.getItem("user")) ||
    {};

function RoleShown() {
    if (userState.role_id == "1") {
        return "Admin";
    } else if (userState.role_id == "2") {
        return "Seller";
    } else if (userState.role_id == "3") {
        return "Customer";
    }
}

  return (
    <div className="">
        <section className="flex flex-col items-center mx-auto font-montserrat gap-y-3">
          <h1 className="[#252B42] font-bold">User Information</h1>
          <div className="flex flex-col gap-y-2 text-gray-600 font-bold">
        <div>
            <span>Name: </span><span>{userState.name}</span>
        </div>
        <div>
            <span>Email: </span><span>{userState.email}</span>
        </div>
        <div>
            <span>Role: </span><span>{RoleShown()}</span>
        </div>
        </div>
        </section>
    </div>
  );
}