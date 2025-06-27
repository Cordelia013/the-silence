const Footer = () => (
    <footer
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            height: '12vh',
            minHeight: '80px',
            position: 'relative',
        }}
    >
        {/* Left section - Address and hours */}
        <div style={{ 
            background: '#00339F', 
            flex: 1, 
            height: '100%', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '1.5rem',
        }}>
            <p style={{ 
                fontWeight: 'bold', 
                margin: '0.1rem 0',
                fontSize: '0.9rem',
                lineHeight: '1.1'
            }}>
                164, avenue des Arènes de Cimiez
            </p>
            <p style={{ 
                margin: '0.1rem 0',
                fontSize: '0.9rem',
                lineHeight: '1.1'
            }}>
                Ouvert tous les jours sauf le Mardi
            </p>
            <p style={{ 
                margin: '0.1rem 0',
                fontSize: '0.9rem',
                lineHeight: '1.1'
            }}>
                10h - 18h
            </p>
        </div>

        {/* Middle section - Yellow */}
        <div style={{ background: '#F5E256', flex: 1, height: '100%' }}></div>

        {/* Right section - Legal links */}
        <div style={{ 
            background: '#00339F', 
            flex: 2, 
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
        }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '1.5rem',
                    paddingLeft: '1.5rem',
                    paddingBottom: '1rem',
                }}
            >
                <p style={{ 
                    fontWeight: 'bold', 
                    margin: 0,
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                }}>
                    Mentions légales
                </p>
                <p style={{ 
                    margin: 0,
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                }}>
                    Politique de cookies (UE)
                </p>
                <p style={{ 
                    margin: 0,
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                }}>
                    Newsletter
                </p>
            </div>
        </div>

        {/* Musée Matisse banner - positioned absolutely */}
        <div
            style={{
                position: 'absolute',
                right: 0,
                top: 0,
                background: '#CB181F',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'normal',
                width: '350px',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '1.5rem',
                zIndex: 10,
            }}
        >
            Musée Matisse
        </div>
    </footer>
);

export default Footer;