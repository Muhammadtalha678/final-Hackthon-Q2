import { Hero2 } from '@/components/resuable/Hero2';
import { Metadata } from 'next';
import React from 'react'
import BlogPage from './blogPage';

export const metadata: Metadata = {
  title: "Blog | Furniro",
  description: "Learn more about Furniro and our mission.",
};

const Blog = () => {
  return (
    <div>
      <Hero2 title='Blog' backgroundImage='/images/hero2.jpg' />
      <BlogPage />
    </div>
  )
}

export default Blog
