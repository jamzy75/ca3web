// Import necessary dependencies
import React from 'react';

// Define the Page component
export default function Page() {
    return (
        <div className="page-container">
            <div className="background"></div>
            <div className="content">
                <h1>Welcome to Football Central!</h1>
                <p>Stay tuned for all the latest updates, news, and excitement from the world of football.</p>
                <FootballMatchPreview />
                <FootballNewsFeed />
                {/* Add more football-related components here */}
            </div>
        </div>
    );
}

// Component to display a preview of an upcoming football match
function FootballMatchPreview() {
    return (
        <div>
            <h2>Upcoming Match</h2>
            <p>Team A vs. Team B</p>
            <p>Date: September 15, 2024</p>
            <p>Time: 3:00 PM (GMT)</p>
        </div>
    );
}

// Component to display a feed of football news articles
function FootballNewsFeed() {
    const newsArticles = [
        { title: 'Transfer Rumors: Star Player Linked with Move to Top Club', date: 'April 28, 2024' },
        { title: 'Injury Update: Team Captain Expected to Miss Next Two Matches', date: 'April 27, 2024' },
        { title: 'Match Recap: Dramatic Comeback Secures Victory for Underdog', date: 'April 26, 2024' }
    ];

    return (
        <div>
            <h2>Latest Football News</h2>
            <ul>
                {newsArticles.map((article, index) => (
                    <li key={index}>
                        <strong>{article.title}</strong> - {article.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Inline styles for the page component
const styles = {
    pageContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'url("https://example.com/background-image.jpg")',
        backgroundSize: 'cover',
        opacity: 1, // Adjust the opacity as needed
    },
    content: {
        zIndex: 1, // Ensure content is above background
        position: 'relative',
        padding: '20px',
    },
};
