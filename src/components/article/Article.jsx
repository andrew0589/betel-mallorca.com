import React from 'react'
import './article.css'

const Article = ({imgUrl,name, title}) => {
  return (
    <div className='betel__conducere-container_article'>
      <div className='betel__conducere-container_article-image'>
        <img src={imgUrl} alt='slujitor'/>
      </div>
      <div className='betel__conducere-container_article-content'>
        <div>
          <h1>{name}</h1>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default Article