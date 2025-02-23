import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const topics = [
  {
    text: 'Python',
    img: '/Python.svg.png',
    desc: "Let's discuss everything related to Python",
    slug: 'python'
  },
  {
    text: 'JavaScript',
    img: '/Javascript-logo.png',
    desc: "Let's discuss everything related to JavaScript",
    slug: 'js'
  },
  {
    text: 'React',
    img: '/react-1.svg',
    desc: "Dive into the world of React and discuss its ecosystem.",
    slug: 'react'
  },
  {
    text: 'Node.js',
    img: '/nodejs.png',
    desc: "Explore server-side JavaScript with Node.js.",
    slug: 'node'
  },
  {
    text: 'Data Science',
    img: '/ds.png',
    desc: "Discuss data analysis, machine learning, and data visualization.",
    slug: 'ds'
  },
  {
    text: 'Cloud Computing',
    img: '/cc.png',
    desc: "Let's explore the world of cloud computing, AWS, Azure, GCP and more.",
    slug: 'cc'
  },
];

const Forums = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <h1 className="text-4xl text-center font-bold mb-12 text-gray-800">Discussion Forums</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <div
            key={topic.img}
            className="bg-white rounded-xl shadow-sm border border-gray-200 transition-transform duration-300 transform hover:scale-105 hover:shadow-md p-6 flex flex-col items-center justify-center"
          >
            <div className="mb-4">
              <Image src={topic.img} alt={topic.text} width={64} height={64} />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">{topic.text}</h2>
            <p className="text-gray-700 text-center mb-4">{topic.desc}</p>
            <Link href={`/forum/${topic.slug}`}>
            <Button  className="bg-indigo-200 text-indigo-700 py-2 px-6 rounded-full font-semibold hover:bg-indigo-300 transition-colors duration-300">
              Discuss Now
            </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;