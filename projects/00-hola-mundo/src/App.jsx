import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App () {

  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="microsoft" 
        name="Microsoft" 
        isFollowing={false}
      />

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="midudev" 
        name="Miguel Angel Duran"
        isFollowing
      />

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="elxokas" 
        name="XOKAS"
        isFollowing
      />

    </section>
  )
}