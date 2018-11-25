import React from 'react'

export default () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="footer">
      <p>Copyright &copy; {year}
      </p>
    </div>
  )
}
