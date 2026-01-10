export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 ${className}`}>
      {children}
    </div>
  )
}
