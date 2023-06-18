import Header from "./Header";
import UserTable from "./UserTable";
const UserList = () => {
  return (
    <>
      <Header></Header>
      <main className="content">
        <UserTable />
      </main>
    </>
  );
};

export default UserList;
