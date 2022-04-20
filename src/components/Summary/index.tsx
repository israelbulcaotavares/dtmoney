import React, {useContext} from 'react';
import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
    const transactions = useContext(TransactionsContext);
    
    console.log(transactions)

    return(
        <Container> 
            <div>
                <header> 
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p> 
                    <img src={outComeImg} alt="Saídas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p> 
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>

    ) 
}