export function TwitterFollowCard ({ formatUserName , userName, name, isFollowing}) {

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
  
  const imageSrc = `https://unavatar.io/${userName}`
  
  return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img
        className="tw-followCard-avatar"
        src={imageSrc}
        alt="avatar de midudev" />
      <div className='tw-followCard-info'>
        <strong>{name}</strong>
        <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
      </div>
    </header>

    <aside>
      <button className={buttonClassName}>
        {text}
      </button>
    </aside>

  </article>
  )
}