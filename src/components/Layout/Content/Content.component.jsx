

const ContentComponent = ({ children }) => {
  return (
    <>
      <section id='Content' className='content component'>
        <div className='content-container component-container'>
          { children }
        </div>
      </section>
    </>
  )
}

export default ContentComponent