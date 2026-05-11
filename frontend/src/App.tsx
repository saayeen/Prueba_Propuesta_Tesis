import { useEffect, useState } from 'react'

function App() {
  const [backendStatus, setBackendStatus] = useState<string>('Verificando...')
  const [mensaje, setMensaje] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => {
        setBackendStatus(' Conectado')
        setMensaje(data.message || 'Backend funcionando')
      })
      .catch(() => {
        setBackendStatus('❌ Desconectado')
        setMensaje('No se pudo conectar al backend')
      })
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb4d)',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '50px',
        borderRadius: '20px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        <h2>Frontend funcionando</h2>
        <p>{backendStatus}</p>
        <p>{mensaje}</p>
      </div>
    </div>
  )
}

export default App