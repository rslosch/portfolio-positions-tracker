import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const InvestmentForm = ({ loggedIn }) => {
    const navigate = useNavigate()

    useEffect(() => {
        if(!loggedIn){
            return navigate('/login')
        } 
    }, [loggedIn])

  return (
    <div>investmentform</div>
  )
}

export default InvestmentForm