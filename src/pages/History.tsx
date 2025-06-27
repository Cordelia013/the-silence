import AbstractShape from '../layouts/AbstractShape'
import Card from '../layouts/Card'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Navbar from '../layouts/Navbar'

function History() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header/>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        flex: 1,
        minHeight: 0,
        padding: '2rem',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AbstractShape />
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateRows: '1fr auto',
          gap: '2rem',
          height: '100%'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Navbar />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default History