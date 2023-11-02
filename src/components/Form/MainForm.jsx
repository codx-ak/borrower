import React from 'react'
import FinancialInfo from './FinancialInfo'
import FinanceType from './FinanceType'
import FinanceDetails from './FinanceDetails'
import IncomeInfo from './IncomeInfo'
import BusinessActivities from './BusinessActivities'
import CommercialInfo from './CommercialInfo'
import AccountInfo from './AccountInfo'

const MainForm = ({value}) => {
    switch(value){
        case 1:
            return <FinancialInfo/>
        case 2:
            return <FinanceType/>
        case 3:
            return <FinanceDetails/>
        case 4:
            return <IncomeInfo/>
        case 5:
            return <BusinessActivities/>
        case 6:
            return <CommercialInfo/>
        case 7:
            return <AccountInfo/>
        default:
            return <FinancialInfo/>
    }
}

export default MainForm