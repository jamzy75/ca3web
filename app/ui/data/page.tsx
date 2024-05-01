// pages/index.js
import React from 'react';
import FootballDataTable from '../components/FootballDataTable';
import styles from '../components/FootballDataTable.module.css';

const footballData = [
  {
    name: 'Team A',
    played: 10,
    won: 6,
    drawn: 2,
    lost: 2,
    goalsFor: 20,
    goalsAgainst: 10,
    goalDifference: 10,
    points: 20,
  },
  {
    name: 'Team B',
    played: 10,
    won: 5,
    drawn: 3,
    lost: 2,
    goalsFor: 15,
    goalsAgainst: 12,
    goalDifference: 3,
    points: 18,
  },
  // Add more teams as needed
];

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Football Stats</h1>
      <FootballDataTable data={footballData} />
    </div>
  );
};

export default HomePage;
