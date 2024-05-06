'use client';
import Accordion from '../components/Accordion.js';

const items = [
  {
    title: 'What is Football?',
    content: 'The best sport in the world.',
  },
  {
    title: 'Who is the all-time leading goal scorer in the history of the Premier League?',
    content: 'As of my last update, Alan Shearer holds the record for the most goals scored in the history of the Premier League. He scored a total of 260 goals during his career, primarily playing for Blackburn Rovers and Newcastle United.',
  },
  {
    title: 'Which club has won the most Premier League titles?',
    content: ' Manchester United holds the record for the most Premier League titles, with a total of 13 championships',
  },
];

const MyPage = () => {
  return (
    <div>
      <h1>FAQ</h1>
      <Accordion items={items} />
    </div>
  );
};

export default MyPage;
