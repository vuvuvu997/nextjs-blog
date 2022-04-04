import React from "react";
import Footer from "./components/Footer";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}

const ListUsers = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h1>List user:</h1>
      <div>
        {users.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListUsers;

ListUsers.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
