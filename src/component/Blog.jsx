import React from 'react';
import './blog.css'; // Create this CSS file for styling

const articles = [
  {
    id: 1,
    title: "Maximizing Your Job Search: Insider...",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    tags: ["Consultation", "Uncategorized"],
    imageUrl: "https://www.thehrdigest.com/wp-content/uploads/2023/09/Gen-Z-soft-skills-768x461.jpg",
  },
  {
    id: 2,
    title: "5 Common Retirement Fears And How...",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    tags: ["Education", "IT Companies"],
    imageUrl: "https://img.freepik.com/free-photo/authentic-group-therapy-meeting_23-2151083327.jpg",
  },
  {
    id: 3,
    title: "The Role Of Technology In Modern...",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    tags: ["Ecommerce", "IT Companies"],
    imageUrl: "https://block.codescandy.com/assets/images/about-img/about-value-img-3.jpg",
  },
  {
    id: 4,
    title: "The Role Of Technology In Modern...",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    tags: ["Ecommerce", "IT Companies"],
    imageUrl: "https://static.wixstatic.com/media/94529b508b40459fb23e9c35b7e7cc0c.jpg/v1/crop/x_0,y_585,w_5249,h_1977/fill/w_940,h_355,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94529b508b40459fb23e9c35b7e7cc0c.jpg",
  },
   {
    id: 5,
    title: "The Role Of Technology In Modern...",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    tags: ["Ecommerce", "IT Companies"],
    imageUrl: "https://assets.entrepreneur.com/content/3x2/2000/20170714185323-GettyImages-465841618.jpeg",
  },
   {
    id: 6,
    title: "The Role Of Technology In Modern...",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    tags: ["Ecommerce", "IT Companies"],
    imageUrl: "https://www.shutterstock.com/image-photo/laptop-ppt-presentation-business-meeting-260nw-2197737421.jpg",
  },
  {
    id: 7,
    title: "The Role Of Technology In Modern...",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    tags: ["Ecommerce", "IT Companies"],
    imageUrl: "https://tse3.mm.bing.net/th/id/OIP.kGPAYLyjiXjNuyAp2P-oVQAAAA?r=0&pid=ImgDet&w=465&h=280&rs=1&o=7&rm=3",
  },
   {
    id: 8,
    title: "The Role Of Technology In Modern...",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    tags: ["Ecommerce", "IT Companies"],
    imageUrl: "https://tse2.mm.bing.net/th/id/OIP.oRkfHowfgL9LwRULifDQHAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
   {
    id: 9,
    title: "The Role Of Technology In Modern...",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    tags: ["Ecommerce", "IT Companies"],
    imageUrl: "https://tse4.mm.bing.net/th/id/OIP.HLLjMaFebA2NSkvKqENcHgAAAA?r=0&pid=ImgDet&w=300&h=200&rs=1&o=7&rm=3",
  },
];


export  function Blog() {
  return (
    <section className="article-section">
      <div className='heading'>
          <h1>Blog : Lorem Ipsum Is Simply <br /> Dummy Text Of The Printing <br /> And Typesetting Industry.</h1>
      </div>
      <div className="article-container">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <img src={article.imageUrl} alt={article.title} className="article-image" />
            <div className="article-content">
              <div className="article-tags">
                {article.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <a href="#" className="read-more-link">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
