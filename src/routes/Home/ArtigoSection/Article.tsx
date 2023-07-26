import React, { useState } from 'react';
import './Article.css'

export function ArticleSection () {
  const [cards] = useState([
    {
      num: "01",
      title: "HTML Syntax",
      description: "The syntax of a language is how it works. How to actually write it. Learn HTML syntax…",
      date: "6 Oct 2017",
    },
    {
      num: "02",
      title: "Basic types of HTML tags",
      description: "Learn about some of the most common HTML tags…",
      date: "9 Oct 2017",
    },
    {
      num: "03",
      title: "Links, images and about file paths",
      description: "Learn how to use links and images along with file paths…",
      date: "14 Oct 2017",
    },
  ]);

  return (
    <div className="cards-wrapper">
      {cards.map((card) => (
        <a key={card.num} className="cardArticle" href={`https://codetheweb.blog/${card.date}`} style={{ background: `url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/${card.title.replace(/ /g, '-').toLowerCase()}/cover.jpg')` }}>
          <div>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <div className="date">{card.date}</div>
            <div className="tags">
              <div className="tag">HTML</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}