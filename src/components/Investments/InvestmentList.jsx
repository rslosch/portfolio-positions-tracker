import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const InvestmentList = ({ currentUser, loggedIn }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if(!loggedIn){
            navigate('/login')
        }
    }, [loggedIn])

    const handleCreateInvestmentBtn = () => {
        navigate('/investments/new')
    }
  return (
    <div>
        <h1>{currentUser.username} Investments</h1>
        <button onClick={handleCreateInvestmentBtn} >Add New Investment</button>

    </div>
  )
}

export default InvestmentList