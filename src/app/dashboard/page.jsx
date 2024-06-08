"use client"
import Head from 'next/head';

const Dashboard = () => {
  const userData = JSON.parse(window.localStorage.getItem('userData'));

  if (!userData) {
    return <p>You need to register first!</p>;
  }

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1>Dashboard</h1>
      <p>Email: {userData.email}</p>
      <p>Name: {userData.name}</p>
      <p>Username: {userData.username}</p>
      <p>Age: {userData.age}</p>
    </div>
  );
};

export default Dashboard;