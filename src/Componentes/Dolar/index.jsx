import Card from '../Card/index'
import axios from 'axios';
import React, {useEffect, useState, Component} from 'react';
import './index.css'


export default function Dolar(){

    
    const [registro, setRegistro] = useState([]);

    const buscarCotacao = () => {
        
        fetch('https://economia.awesomeapi.com.br/json/USD-BRL/1')               
            
        .then((res) => {
                if (res.status === 200) {
                    return res.json();
                }
            })
    
            .then((data) => {
                setRegistro(data);
                console.log(data)
            })  
    };

    const rows = registro.map(registro => {
        return(
           <>
                <tr>Código da moeda: {registro.code}</tr>
                <tr>Compra da moeda: {registro.bid}</tr>
                <tr>Venda da moeda: {registro.ask}</tr>
                <tr>Variação da moeda: {registro.varBid}</tr>
                <tr>Percentual da moeda: {registro.pctChange}%</tr>                
            </>          
        )
    })

    useEffect(()=>{
        buscarCotacao()
    })

    const titulo = registro.map(registro => {
        return(
            <h6>{registro.name}</h6>
        )
    })

    return(
        <>
            
            <Card title={titulo}>
                <table className="table table-dark" id='dados'>
                    <br/>
                    <tbody>
                        <br/> 
                        {rows}                   
                    </tbody> 
                </table>                                
            </Card>       
        </>


    );
}