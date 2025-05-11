/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/CheckoutForm.tsx
import { useEffect } from 'react';
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { FaLock, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDinersClub } from 'react-icons/fa';

import styles from './CheckoutForm.module.css';

await loadMercadoPago();
const mp = new (window as any).MercadoPago('TEST-80f39e67-a4c2-46fe-bbea-d1a4ff5a7d3b');

export const CheckoutForm = () => {
  useEffect(() => {
    const cardForm = mp.cardForm({
      amount: 430,
      autoMount: true,
      form: {
        id: 'form-checkout',
        cardNumber: {
          id: 'form-checkout__cardNumber',
          placeholder: '1234 1234 1234 1234',
        },
        expirationDate: {
          id: 'form-checkout__expirationDate',
          placeholder: 'MM/AA',
        },
        securityCode: {
          id: 'form-checkout__securityCode',
          placeholder: '123',
        },
        cardholderName: {
          id: 'form-checkout__cardholderName',
          placeholder: 'Nome como no cartão',
        },
        issuer: {
          id: 'form-checkout__issuer',
        },
        installments: {
          id: 'form-checkout__installments',
        },
        identificationType: {
          id: 'form-checkout__identificationType',
        },
        identificationNumber: {
          id: 'form-checkout__identificationNumber',
          placeholder: 'Número do documento',
        },
        cardholderEmail: {
          id: 'form-checkout__cardholderEmail',
          placeholder: 'E-mail',
        },
      },
      callbacks: {
        onFormMounted: (error: any) => {
          if (error) return console.warn('Form error:', error);
        },
        onSubmit: async (event: any) => {
          event.preventDefault();
          const data = cardForm.getCardFormData();
          const res = await fetch('http://localhost:3000/createPayment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              installments: Number(data.installments),
              amount: Number(data.amount),
              paymentMethodId: data.paymentMethodId,
              token: data.token,
              description: 'Compra no site',
              identificationType: data.identificationType,
              identificationNumber: data.identificationNumber,
              cardholderEmail: data.cardholderEmail,
            }),
          });

          const result = await res.json();
          console.log('Resultado:', result);
        },
      },
    });
  }, []);

  return (
    <form id="form-checkout" className={styles.form}>
      <h2 className={styles.title}>
        Cartão de crédito ou débito
        <span className={styles.icons}>
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcAmex />
          <FaCcDinersClub />
        </span>
      </h2>

      <div className={styles.field}>
        <span>Número do cartão</span>
        <input type="text" id="form-checkout__cardNumber" placeholder="Ex: 5031 4332 1540 6351" />
      </div>

      <div className={styles.container}>
        <div>
          <span>Vencimento</span>
          <input type="text" id="form-checkout__expirationDate" placeholder="Ex: 09/25" />
        </div>
        <div>
          <span>Código de Segurança</span>
          <input type="text" id="form-checkout__securityCode" placeholder="Ex: 123" />
        </div>
      </div>


      <div>
        <span>Nome do titular como no cartão</span>
        <input type="text" id="form-checkout__cardholderName" placeholder="" />
      </div>
      <select id="form-checkout__issuer" />
      <select id="form-checkout__installments" />
      <div className={styles.container}>
        <select id="form-checkout__identificationType" className={styles.identificationType} />
        <input type="text" id="form-checkout__identificationNumber" placeholder="CPF" />
      </div>
      <input type="email" id="form-checkout__cardholderEmail" placeholder="E-mail" />

      <button type="submit" id="form-checkout__submit">
        <FaLock /> Pagar
      </button>

      <progress value="0" className={styles.progressBar}>Carregando...</progress>
    </form>
  );
};
