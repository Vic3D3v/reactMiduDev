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
      />

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="midudev" 
        name="Miguel Angel Duran"
      />

      <TwitterFollowCard 
        formatUserName={formatUserName} 
        userName="elxokas" 
        name="XOKAS"
      />

    </section>
  )
}