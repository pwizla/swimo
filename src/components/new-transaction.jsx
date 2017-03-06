import React from 'react';

class  NewTransaction extends React.Component {

  render() {
    return (
        <div className="new-transac-container">
          <div className="title-box">
            Ajouter une transaction
          </div>
          <div className="form-box">
            <form>
              <div>
                <label className="new-transac-form-item">
                  <span className="label-title">Date :&nbsp;</span>
                  <input type="text" name="date" className="input-box"/>
                </label>
              </div>
              <div>
                <label className="new-transac-form-item">
                  <span className="label-title">Description :&nbsp;</span>
                  <input type="text" name="description" className="input-box"/>
                </label>
              </div>
              <div>
                <label className="new-transac-form-item">
                  <span className="label-title">Montant :&nbsp;</span>
                  <input type="text" name="amount" className="input-box"/>
                </label>
              </div>
            </form>
          </div>
        </div>
      );
  }
}

export default NewTransaction;
