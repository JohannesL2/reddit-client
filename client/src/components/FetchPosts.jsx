import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchPosts = () => {
  const [subreddit, setSubreddit] = useState('')
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = (e) => {
      e.preventDefault()

      
      if (!subreddit.trim()) return;

          setLoading(true);
          axios.get(`http://localhost:5000/api/reddit/${subreddit}`)
          .then(response => setPosts(response.data.data.children))
          .catch(error => setError("Could not fetch posts. Please try again."))
          .finally(() => setLoading(false))
  }

  return (
    <div className='bg-black/30 min-h-screen p-4 rounded-lg backdrop-blur-sm'>
    
<form className="max-w-md mx-auto mt-4" onSubmit={fetchPosts}>   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Choose subreddit' value={subreddit} onChange={e => setSubreddit(e.target.value)} required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

    <div>
      {posts.map((post, index) => {
        const title = post.data.title
        const imageUrl = post.data.preview?.images[0]?.source?.url?.replace(/&amp;/g, '&')
        const comments = post.data.num_comments
        const score = post.data.score
        const permalink = post.data.permalink
        
        return (
          <div key={index} className='bg-[#444444] rounded-lg p-4 mt-8'>
        <p className='text-3xl font-extrabold leading-none tracking-tight text-white md:text-2xl'>{title}</p>
        {imageUrl && <img src={imageUrl} className='w-full max-w-md mt-2 rounded' />}
        <p className='text-lg font-extrabold leading-none tracking-tight text-gray-300 md:text-md'>{score} points - {comments} comments</p>

        <a href={`https://reddit.com${permalink}`} target='_blank' rel='noopener noreferrer' className='text-white underline'>View on Reddit</a>
        </div>
              )
          })}
    </div>
    </div>
  )
}

export default FetchPosts