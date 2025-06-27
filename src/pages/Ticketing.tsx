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
          height: '100%',
          position: 'relative'
        }}>
          <div style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
            <Card />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignSelf: 'end' }}>
            <Navbar />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Ticketing