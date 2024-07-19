// src/components/Blog.js
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Ways to Reduce Waste in Kathmandu",
      excerpt: "Learn simple techniques to minimize waste in your daily life in Nepal's capital.",
      image: "../../public/assets/kwm.jpg",
      date: "May 15, 2024"
    },
    {
      title: "The Impact of Plastic on Nepal's Rivers",
      excerpt: "Discover the long-term effects of plastic pollution on Nepal's waterways and what we can do about it.",
      image: "../../public/assets/river-plastic.jpg",
      date: "June 2, 2024"
    },
    {
      title: "Upcycling: Nepali Artisans Turn Trash into Treasure",
      excerpt: "Explore how local artisans are repurposing waste materials into beautiful crafts.",
      image: "../../public/assets/nepali-upcycling.jpg",
      date: "June 20, 2024"
    },
    {
      title: "Community-led Recycling Initiatives in Pokhara",
      excerpt: "Learn about successful community recycling programs in Nepal's second-largest city.",
      image: "../../public/assets/pokhara-recycling.jpeg",
      date: "July 5, 2024"
    },
    {
      title: "E-waste Management: A Growing Challenge in Nepal",
      excerpt: "Understand the rising issue of electronic waste and innovative solutions being implemented.",
      image: "../../public/assets/cover.jpg",
      date: "July 18, 2024"
    },
    {
      title: "Composting: A Sustainable Solution for Organic Waste",
      excerpt: "Discover how composting is helping Nepali communities reduce waste and improve agriculture.",
      image: "../../public/assets/nepal-composting.jpg",
      date: "August 1, 2024"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    document.querySelectorAll('.blog-post').forEach((post) => {
      observer.observe(post);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header/>
      <div className="blog-container">
        <h1 className="blog-title">Waste Management & Recycling in Nepal</h1>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-date">{post.date}</p>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-read-more">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;