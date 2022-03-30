import './index.css';
import Dolar from '../Componentes/Dolar/index'
import Euro from '../Componentes/Euro/index'
import Bitcoin from '../Componentes/Bitcoin';
import { useEffect, useState } from 'react';

export default function Home(){

    const [checkDolar, setCheckDolar] = useState(false);
    
    const checarDolar = (e) => {
        setCheckDolar(e.target.checked);
    }
    
    const [checkEuro, setCheckEuro] = useState(false); 
    
    const checarEuro = (e) => {
        setCheckEuro(e.target.checked);
    } 

    const [checkBitcoin, setCheckBitcoin] = useState(false); 
    
    const checarBitcoin = (e) => {
        setCheckBitcoin(e.target.checked);
    } 

    return(    
        <>
            <div className="card text-white bg-primary mb-3">
                <div className="card-header titulo">PAINEL DE COTAÇÃO DE MOEDA</div>
                <div className="card-body bg-info text-black">
                    <div className='card-title painelCotacao'>
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan={3}>
                                        <h4 className="titulo">Painel Informativo</h4>
                                        <br/>
                                        <p className='titulo'>
                                            Selecione a cotação a ser exibida
                                        </p>                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="Dolar" id="checkDolar" 
                                             checked={checkDolar}
                                             onChange={checarDolar}/>
                                        <label className="form-check-label">
                                            Cotação do Dólar
                                        </label>
                                    </td>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="Euro" id="checkEuro"
                                        checked={checkEuro}
                                        onChange={checarEuro}/>
                                        <label className="form-check-label">
                                            Cotação do Euro
                                        </label>
                                    </td>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="Bitcoin" id="checkBitcoin"
                                        checked={checkBitcoin}
                                        onChange={checarBitcoin}/>
                                        <label className="form-check-label">
                                            Cotação do Biticoin
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                    </div>
                    <div className='tabela'>
                            <table id='moeda'>
                                <tbody>
                                    <tr>
                                        <td>{checkDolar ? <Dolar/> : ''}</td> 
                                        <td>{checkEuro ? <Euro/> : ''}</td> 
                                        <td>{checkBitcoin ? <Bitcoin/> : ''}</td>   
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </>
    );
}