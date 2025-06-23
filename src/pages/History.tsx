import AbstractShape from '../layouts/AbstractShape'
import Card from '../layouts/Card'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Navbar from '../layouts/Navbar'

function History() {
  return (
    <div>
    <Header/>
<div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    height: '72vh',
  }}>
    
      <div >
        <AbstractShape />
      </div>
    <Card />
      <div >
        <Navbar />
    </div>
    </div>
    <Footer/>
  </div>
  )
}

export default History