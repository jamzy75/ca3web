'use client';
import Card from '../components/Card.js';

const MyPage = () => {
  return (
    <div>
      <h1>Sample Cards</h1>
      <div className="card-container">
        <Card
          title="Card 1"
          description="This is the first card."
          imageUrl="/images/manu.png"
        />
        <Card
          title="Card 2"
          description="This is the second card."
          imageUrl="/images/chelsea.png"
        />
        {/* Add more Card components as needed */}
      </div>
    </div>
  );
};

export default MyPage;
