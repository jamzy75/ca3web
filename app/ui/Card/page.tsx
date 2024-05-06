'use client';
import Card from '../components/Card.js';

const MyPage = () => {
  return (
    <div>
      <h1>Sample Cards</h1>
      <div className="card-container">
        <Card
          title="Manchester United"
          description=" Manchester United holds the record for the most Premier League titles, with a total of 13 championships"
          imageUrl="/images/manu.png"
        />
        <Card
          title="Chelsea"
          description="Chelsea Football Club, commonly known as Chelsea, is a professional football club based in London, England. Founded in 1905, Chelsea has become one of the most prominent clubs in English and European football."
          imageUrl="/images/chelsea.png"
        />
         <Card
          title="Arsenal"
          description="Arsenal Football Club, commonly known as Arsenal, is a professional football club based in North London, England. Established in 1886, Arsenal has since become one of the most storied and successful clubs in English football history."
          imageUrl="/images/arsenal.png"
        />

<Card
          title="Manchester City"
          description="Manchester City Football Club, commonly referred to as Man City, is a professional football club based in Manchester, England. Established in 1880 as St. Mark's (West Gorton), it became Ardwick Association Football Club in 1887 and finally Manchester City in 1894."
          imageUrl="/images/mancity.png"
        />
        
        <Card
          title="Liverpool"
          description="Liverpool Football Club is a professional football club based in Liverpool, England. Founded in 1892, Liverpool has a rich history and is one of the most successful clubs in English football."
          imageUrl="/images/liverpool.png"
        />

      </div>
    </div>
  );
};

export default MyPage;
