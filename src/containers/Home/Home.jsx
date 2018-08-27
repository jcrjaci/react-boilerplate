import React from 'react';
import './Home.scss';

const Home = () => <div>Hello React!</div>;

async function test() {
  const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
  const json = await response.json();
  console.log({ json });
}
test();

export default Home;
