import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Budget App</h1>
        <button className="link-button">Link Bank Account</button>
      </header>
      <main className="main-content">
        <section className="budget-overview">
          <h2 className="section-title">Budget Overview</h2>
          <div className="overview-grid">
            <div className="overview-item income">
              <h3 className="item-title">Income</h3>
              <p className="item-amount">$0.00</p>
            </div>
            <div className="overview-item expenses">
              <h3 className="item-title">Expenses</h3>
              <p className="item-amount">$0.00</p>
            </div>
            <div className="overview-item savings">
              <h3 className="item-title">Savings</h3>
              <p className="item-amount">$0.00</p>
            </div>
          </div>
        </section>
        <section className="recent-transactions">
          <h2 className="section-title">Recent Transactions</h2>
          <ul className="transaction-list">
            <li className="transaction-item">
              <span className="transaction-description">No transactions yet</span>
              <span className="transaction-amount">$0.00</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

