import AbstractShape from '../layouts/AbstractShape'
import Card from '../layouts/Card'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Navbar from '../layouts/Navbar'

function Ticketing() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header/>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        flex: 1,
        minHeight: 0,ACV
      }}>
        <div>
          <AbstractShape />
        </div>
        <Card />
        <div>
          <Navbar />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Ticketing