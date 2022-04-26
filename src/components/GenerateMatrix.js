import React from 'react';
import './GenerateMatrix.css';

export default function GenerateMatrix() {
    return(
        <div className="row align-items-center g-lg-5 py-5 page-content form-container">
              <div className="col-lg-7 text-center text-lg-start">
                <h1 className="display-4 fw-bold lh-1 mb-3 form-title">Inserire il numero di Righe e Colonne di una matrice</h1>
                <p className=" form-subtitle">Inserendo i dati richiesti il server restituirà una matrice generata casualmente da cui si potranno scegliere quali dati visualizzare</p>
              </div>
              <div className="col-md-10 mx-auto col-lg-5">
                <form className="p-4 p-md-5  form-body">
                  <div className="form-floating mb-3">
                  <label htmlFor="numeroRighe">Numero righe</label>
                    <input type="number" className="form-control" id="numeroRighe" placeholder="Inserire numero righe..." required/>
                  </div>
                  <div className="form-floating mb-3">
                  <label htmlFor="numeroColonne">Numero colonne</label>
                    <input type="number" className="form-control" id="numeroColonne" placeholder="Inserire numero colonne..." required/>
                  </div>
                  <button className="w-100 btn btn-lg submit-button" type="submit">Genera matrice</button>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
    );
}