import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchPosts from './components/FetchPosts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
<h1 class="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Reddit</span> Client</h1>
<p class="p-4 text-lg font-normal text-gray-100 lg:text-xl">We focus on building a smarter way to browse Reddit — where technology, design, and curiosity come together to unlock meaningful content and enhance the way users connect with online communities.

  <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Try searching for a subreddit below!</span>
</p>


    <FetchPosts/>
    </>
  )
}

export default App
