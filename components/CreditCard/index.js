import React from 'react'
import Input from '../Input'
import { ContainerCreditCard, ContainerForm, NameCard, NumberCard, SelectDate, TitleCard, VencCard } from './styles'

const CreditCard = ({year, month, numberCard, monthCard, yearCard, codeCard, monthAmount, onChangeMA, total}) => {

 return(
    <>
        <ContainerCreditCard>
            <TitleCard>
                Credit Card
            </TitleCard>
            <div style={{height: '55%', width: '100%', padding: '0 20px'}}>
                <NumberCard>
                    
                        {numberCard.value[0]? numberCard.value[0] : "X"}
                        {numberCard.value[1]? numberCard.value[1] : "X"}
                        {numberCard.value[2]? numberCard.value[2] : "X"}
                        {numberCard.value[3]? numberCard.value[3] : "X"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {numberCard.value[4]? numberCard.value[4] : "X"}
                        {numberCard.value[5]? numberCard.value[5] : "X"}
                        {numberCard.value[6]? numberCard.value[6] : "X"}
                        {numberCard.value[7]? numberCard.value[7] : "X"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {numberCard.value[8]? numberCard.value[8] : "X"}
                        {numberCard.value[9]? numberCard.value[9] : "X"}
                        {numberCard.value[10]? numberCard.value[10] : "X"}
                        {numberCard.value[11]? numberCard.value[11] : "X"}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {numberCard.value[12]? numberCard.value[12] : "X"}
                        {numberCard.value[13]? numberCard.value[13] : "X"}
                        {numberCard.value[14]? numberCard.value[14] : "X"}
                        {numberCard.value[15]? numberCard.value[15] : "X"}
                </NumberCard>
                <VencCard>
                    <div style={{margin: '0 10px'}}>Venc</div>
                    <div style={{margin: '0 10px'}}>{monthCard.value}/{yearCard.value}</div>
                </VencCard>
                <NameCard>
                    <div style={{textTransform: 'uppercase'}}>Jose Matias Zurita</div>
                    <div>Code: {codeCard.value}</div>
                </NameCard>
            </div>
        </ContainerCreditCard>
        <ContainerForm>
            <Input placeHolder={'Numero de tarjeta'} input={numberCard} max={'16'} />
            <div>
                Date expiry : 
                <div>
                    <SelectDate defaultValue={monthCard.value} {...monthCard}>
                        {
                            month.map(item=><option value={item} key={item}>{item < 10 ? "0"+item : item }</option>)
                        }
                    </SelectDate>
                    <SelectDate defaultValue={yearCard.value} {...yearCard}>
                        {
                            year.map(item=><option value={item} key={item}>{item < 10 ? "0"+item : item }</option>)
                        }
                    </SelectDate>
                </div>
                <div style={{width: '60%'}}>
                    <Input placeHolder={'Codigo de seguridad'} input={codeCard} max={'3'}/>
                </div>
                Cuotas :
                <SelectDate value={monthAmount} onChange={onChangeMA}>
                    <option value={1}>1 x $ {total}</option>
                    <option value={3}>3 x $ {(parseFloat(total)/3).toFixed(2)}</option>
                    <option value={6}>6 x $ {(parseFloat(total)/6).toFixed(2)}</option>
                    <option value={12}>12 x $ {(parseFloat(total)/12).toFixed(2)}</option>
                </SelectDate>
            </div>
        </ContainerForm>
    </>
 )
}
 
export default CreditCard