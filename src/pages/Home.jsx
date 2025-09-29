import React from 'react';
import Hero from '../components/Hero/Hero';
import ContentSection from '../components/ContentSection/ContentSection';
import Features from '../components/Features/Features';
import './Home.css';

const Home = () => {
  const trendingItems = [
    {
      title: "Shadow Protocol",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3",
      year: "2023",
      duration: "2h 18m",
      badge: "HOT"
    },
    {
      title: "Neon Dreams",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3",
      year: "2023",
      duration: "1h 52m"
    },
    {
      title: "The Last Stand",
      image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3",
      year: "2023",
      duration: "2h 5m"
    },
    {
      title: "Echoes of Time",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3",
      year: "2023",
      duration: "1h 48m",
      badge: "NEW"
    }
  ];

  const continueWatchingItems = [
    {
      title: "Cyber Revolution",
      image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3",
      episode: "S2:E5",
      timeLeft: "32 min left"
    },
    {
      title: "Dark Matter",
      image: "https://images.unsplash.com/photo-1551524164-6ca5f2c05364?ixlib=rb-4.0.3",
      episode: "S1:E8",
      timeLeft: "18 min left"
    },
    {
      title: "Ancient Mysteries",
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3",
      episode: "S3:E2",
      timeLeft: "45 min left"
    }
  ];

  return (
    <div className="home">
      <Hero />
      <div className="container">
        <ContentSection 
          title="Trending Now"
          viewAllLink="/trending"
          items={trendingItems}
          type="movie"
        />
        <ContentSection 
          title="Continue Watching"
          viewAllLink="/continue-watching"
          items={continueWatchingItems}
          type="series"
        />
        <Features />
      </div>
    </div>
  );
};

export default Home;