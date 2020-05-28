import React from 'react'

const TranslationBlock = () => (
  <div class="bg-gray-200 border-l-4 border-gray-500 text-gray-800 p-4 mb-4 rounded" role="alert">
    <h6 className="mb-2">This page has been translated!</h6>
    <div className="text-sm">
      <p>You can now read this post in different languages. Thank you so much for those that put in the time and hard work to translate these thoughts so that others can value. If you want to translate this post to your native language, please shoot me a <a href="https://twitter.com/hashtagcoder" rel="noopener noreferrer" target="_blank">message on twitter (@hashtagcoder)</a>.</p>

      <ul>
        <li>
          <a 
            href="https://itnews.org/news_contents/director-of-engineering" 
            rel="noopener noreferrer" 
            target="_blank">
            View this post in Japanese
          </a>
        </li>

        <li>
          <a 
            href="https://www.infoq.cn/article/lmYWKQ7BUQ0YvDiqBpUd" 
            rel="noopener noreferrer" 
            target="_blank">
            View this post in Chinese
          </a>
        </li>
      </ul>      
    </div>
  </div>
)

export default TranslationBlock