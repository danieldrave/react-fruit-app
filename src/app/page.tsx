'use client';

import { useState, useEffect } from 'react';

import db from '../../public/db.json';
import styles from "./page.module.css";

import Search from './components/Search/Search';
import Fruit from './components/Fruit/Fruit';

export default function Home() {
  interface Fruit {
    name: string;
    id: number;
    genus: string;
    family: string;
    order: string;
  }

  const [fruits, setFruits] = useState<Fruit[]>([]);

  const handleSearchQuery = (query: string) => {
    alert(`Searching for: ${query}`);
  };

  const getData = async () => {
    const data = await fetch(`https://www.fruityvice.com/api/fruit/all`);
    const response = await data.json();
    return response.sort((a: Fruit, b: Fruit) => a.name.localeCompare(b.name));
  };

  useEffect(() => {
    getData().then(data => setFruits(data));
  }, []);


  return (
    <section className={`px-1 ${styles.wrapper}`}>
      <div className="card">
        <div className={`${styles.card__header} card__header`}>
          <h2>Fruits Catalogue</h2>
          {/* When you pass a click event as a parameter, both the components need to be client components */}
          <Search onSearch={handleSearchQuery} />
        </div>
        {fruits.length === 0 && (
          <div className={`card__body ${styles.card__body}`}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {fruits.map((fruit: Fruit) => (
                  <Fruit
                    key={fruit.id}
                    data={fruit}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <p className="text-align-center">
        <small>Scroll down to see more!</small>
      </p>
    </section>
  );
}