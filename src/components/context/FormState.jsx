import React, { createContext} from 'react'

export const FormData=createContext()
const FormState = ({children}) => {
    let FormModel={
        FinancialInfoDt:{
            Q1:'',
            Q2:''
        },
        FinanceTypeDt:{
            Q3:''
        },
        FinanceDetailDt:{
            Q4:'',
            Q5:'',
            Q6:''
        },
        IncomeInfoDt:{
            Q7:'',
            Q8:'',
            Q9:''
        },
        BusinessActivitieDt:{
            Q10:'',
            Q11:''
        },
        CommercialInfoDt:{
            Q12:''
        },
        AccountInfoDt:{
            Q13:'',
            Q14:'',
            Q15:'',
            Q16:''
        }
    }
  return (
    <FormData.Provider value={FormModel}>
        {children}
    </FormData.Provider>
  )
}

export default FormState