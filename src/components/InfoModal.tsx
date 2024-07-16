import { Modal } from "antd"
import { useNavigate } from "react-router-dom"

interface IProps {
  closeModal: () => void
}

export const InfoModal = ({closeModal}: IProps) => {
  const navigate = useNavigate()
  return (
    <Modal 
      style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#f4f4f4',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }} 
      open={true} 
      footer={null} 
      onCancel={() => closeModal()}
  >
      <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' }}>
          Welcome to Memecoinmama.com - Where we give birth to the hottest Memecoins on Solana!
      </h2>

      <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
          At Memecoinmama.com, we are dedicated to democratizing the world of digital currency by offering an intuitive, user-friendly platform for creating memecoins on the Solana blockchain. Our mission is to make the exciting realm of digital currency accessible to everyone, regardless of technical expertise.
      </p>

      <h3 style={{ color: '#333', fontSize: '20px', marginTop: '20px' }}>What We Offer:</h3>

      {/* Simplified Memecoin Creation */}
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ color: '#333', fontSize: '18px', marginBottom: '10px' }}>Simplified Memecoin Creation:</h4>
        <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
            Our platform provides a straightforward, 4-step process to create and launch your memecoin. With just a few clicks, you can mint your token, establish liquidity, and set your memecoin up for success.
        </p>
      </div>

      {/* Customizable Options */}
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ color: '#333', fontSize: '18px', marginBottom: '10px' }}>Customizable Options:</h4>
        <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
            Tailor your memecoin to fit your vision. Our interface allows you to adjust various parameters, ensuring that your memecoin aligns with your goals and objectives.
        </p>
      </div>

      {/* Secure and Trustworthy */}
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ color: '#333', fontSize: '18px', marginBottom: '10px' }}>Secure and Trustworthy:</h4>
        <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
            Security is paramount in the world of digital currencies. We ensure that your memecoin creation process is secure and reliable, giving you peace of mind.
        </p>
      </div>

      {/* No Coding Required */}
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ color: '#333', fontSize: '18px', marginBottom: '10px' }}>No Coding Required:</h4>
        <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
            Our platform eliminates the need for coding skills, making it easy for anyone to create a memecoin. We handle the technical details, so you can focus on your memecoin's concept and growth.
        </p>
      </div>

      {/* Community and Support */}
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ color: '#333', fontSize: '18px', marginBottom: '10px' }}>Community and Support:</h4>
        <p style={{ color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
            Join a vibrant community of memecoin creators. Share ideas, get insights, and receive support from fellow enthusiasts. Our dedicated support team is also here to help you with any queries or challenges you may face.
        </p>
      </div>

      {/* How It Works */}
      <div style={{ marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
        <h4 style={{ color: '#333', fontSize: '18px', marginBottom: '10px' }}>How It Works:</h4>
        <ul style={{ listStyleType: 'none', padding: '0', color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
            <li>Create and Mint Your Token: Design your token with our easy-to-use tools.</li>
            <li>Revoke Mint and Freeze Authority: Ensure the integrity and trustworthiness of your coin.</li>
            <li>Create a Liquidity Pool on a DEX: Enhance trading potential and liquidity.</li>
            <li>Burn LP Tokens: Manage your token's scarcity and potential value.</li>
        </ul>
      </div>
      <div style={{ marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
        <button 
          style={{ 
              backgroundColor: '#008CBA', 
              color: 'white', 
              padding: '10px 20px', 
              fontSize: '16px', 
              border: 'none', 
              borderRadius: '5px',
              cursor: 'pointer'
          }}
          onClick={() => {
            navigate('/create') 
            closeModal()
          }}
        >
          Start Building Your Memecoin Dream Today!
        </button>
      </div>
  </Modal>
  )
}