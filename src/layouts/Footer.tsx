const Footer = () => (
    <footer
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            height: '15vh',
          
        }}
    >

        <div style={{ background: '#00339F', flex: 1, height: '100%', fontSize: '1rem', lineHeight: '0.2' }}>
            <p style={{ fontWeight: 'bold', paddingLeft: '120px' }}>164, avenue des Arènes de Cimiez</p>
            <p style={{ paddingLeft: '120px' }}>Ouvert tous les jours sauf le Mardi </p>
            <p style={{ paddingLeft: '120px' }}>10h - 18h</p>
        </div>

        <div style={{ background: '#F5E256', flex: 1, height: '100%' }}></div>

        <div style={{ background: '#00339F', flex: 2, height: '100%' }}>
            <p
            style={{
                background: '#CB181F',
                position: 'relative',
                fontSize: '2rem',
                color: 'white',
                width: '451px',
                height: '3rem',
                lineHeight: '51px',
                textAlign: 'end',
                paddingRight: '10px',
                left: '-10vh', // Réduit l'espace horizontal
                top: '-2rem', // Ajuste la position verticale
            }}
            >
            Musée Matisse
            </p>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%',
                    position: 'relative',
                    top: '-6rem',
                }}
            >
                <p style={{ fontWeight: 'bold', paddingLeft: '40px', alignSelf: 'center' }}>Mentions légales</p>
                <p style={{ paddingLeft: '20px', alignSelf: 'center' }}>Politique de cookies (UE)</p>
                <p style={{ paddingLeft: '20px', alignSelf: 'center' }}>Newsletter</p>
            </div>
        </div>


      </footer>
);

export default Footer;