
function Home () {
  const homeSrc: string = ''
  
  return (
    <div className="home">
      <iframe 
        className="third-frame"
        title="iframe"
        src={homeSrc}
      >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  )
}

export default Home