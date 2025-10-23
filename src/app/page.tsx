'use client';

import db from '../../public/db.json';
import styles from "./page.module.css";

import Search from './components/Search/Search';
import Fruit from './components/Fruit/Fruit';

export default function Home() {
  // TODO Get fruits from API and react to search queries
  interface Fruit {
    name: string;
    id: number;
    genus: string;
    family: string;
    order: string;
  }

  const fruits: Fruit[] = db.sort((a, b) => a.id - b.id);

  const handleSearchQuery = (query: string) => {
    alert(`Searching for: ${query}`);
  };

  return (
    <section className={`px-1 ${styles.wrapper}`}>
      <div className="card">
        <div className={`${styles.card__header} card__header`}>
          <h2>Fruits Catalogue</h2>
          <Search onSearch={handleSearchQuery} />
        </div>
        <div className={`card__body ${styles.card__body}`}>
          <table>
            <thead>
              <tr>
                <th>#</th>
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
      </div>
      <p className="text-align-center">
        <small>Scroll down to see more!</small>
      </p>
    </section>
  );
}
