import {useState} from 'react'
import './App.css'

// Initial history list
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const App = () => {
  const [historyList, setHistoryList] = useState(initialHistoryList)
  const [searchTerm, setSearchTerm] = useState('')

  const deleteHistoryItem = id => {
    const updatedHistoryList = historyList.filter(item => item.id !== id)
    setHistoryList(updatedHistoryList)
  }

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
  }

  const filteredHistoryList = searchTerm
    ? historyList.filter(
        item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.domainUrl.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : historyList

  return (
    <div className="app">
      <div className="browser-history-container">
        <img
          className="image-h"
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
        />
        <h1>Browser History</h1>
        <div className="search-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
          <input
            type="search"
            placeholder="Search history"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        {filteredHistoryList.length > 0 ? (
          <ul className="history-list">
            {filteredHistoryList.map(item => (
              <li className="history-item" key={item.id}>
                <img src={item.logoUrl} alt="domain logo" />
                <div className="history-details">
                  <p>{item.timeAccessed}</p>
                  <p>{item.title}</p>
                  <p>{item.domainUrl}</p>
                </div>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => deleteHistoryItem(item.id)}
                  data-testid="delete"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                    alt="delete"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no history to show</p>
        )}
      </div>
    </div>
  )
}

export default App
