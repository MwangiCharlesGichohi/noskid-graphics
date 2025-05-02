import React from 'react';
import { ArrowRight, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    title: "Top Design Trends in Nairobi's Corporate World 2024",
    excerpt: "Discover the latest design trends shaping Nairobi's corporate landscape and how businesses are leveraging them for success.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
    author: "Noskid Team",
    date: "March 15, 2024",
    category: "Design Trends",
    slug: "design-trends-nairobi-2024"
  },
  {
    title: "The Impact of Professional Branding for Kenyan Businesses",
    excerpt: "Learn how strategic branding can help your Kenyan business stand out in today's competitive market.",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg",
    author: "Noskid Team",
    date: "March 10, 2024",
    category: "Branding",
    slug: "professional-branding-impact-kenya"
  },
  {
    title: "Sustainable Printing Practices: A Guide for Eco-Conscious Businesses",
    excerpt: "Explore environmentally friendly printing solutions that don't compromise on quality or effectiveness.",
    image: "https://images.pexels.com/photos/5611544/pexels-photo-5611544.jpeg",
    author: "Noskid Team",
    date: "March 5, 2024",
    category: "Printing",
    slug: "sustainable-printing-practices"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in design, printing, and branding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary-500 text-white text-sm px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <a href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                    {post.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <a 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 
            text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
          >
            View All Posts <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;