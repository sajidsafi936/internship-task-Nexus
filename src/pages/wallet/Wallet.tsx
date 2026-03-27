import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';

const transactions = [
  {
    id: 1,
    amount: '$500',
    sender: 'Investor',
    receiver: 'You',
    status: 'Completed'
  },
  {
    id: 2,
    amount: '$1200',
    sender: 'You',
    receiver: 'Startup A',
    status: 'Pending'
  },
  {
    id: 3,
    amount: '$300',
    sender: 'Investor',
    receiver: 'You',
    status: 'Failed'
  }
];

const Wallet: React.FC = () => {

  const [showModal, setShowModal] = useState<string | null>(null);
  const [amount, setAmount] = useState('');

  return (
    <div className="space-y-6 animate-fade-in">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Wallet</h1>
        <p className="text-gray-600">Manage your payments and transactions</p>
      </div>

      {/* BALANCE CARD */}
      <Card>
        <CardBody className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Available Balance</p>
            <h2 className="text-3xl font-bold text-gray-900">$12,500</h2>
            <p className="text-xs text-gray-400 mt-1">Last updated just now</p>
          </div>

          <div className="flex gap-3">
            <Button onClick={() => setShowModal('deposit')}>Deposit</Button>
            <Button variant="outline" onClick={() => setShowModal('withdraw')}>
              Withdraw
            </Button>
            <Button variant="outline" onClick={() => setShowModal('transfer')}>
              Transfer
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* FUNDING BUTTON */}
      <div className="flex justify-end">
        <Button onClick={() => setShowModal('fund')}>
          Fund Startup
        </Button>
      </div>

      {/* TRANSACTION TABLE */}
      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium text-gray-900">
            Transaction History
          </h2>
        </CardHeader>

        <CardBody>
          <div className="overflow-x-auto">
            <table className="w-full text-left">

              <thead>
                <tr className="text-gray-500 text-sm border-b">
                  <th className="py-2">Amount</th>
                  <th>Sender</th>
                  <th>Receiver</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map(tx => (
                  <tr key={tx.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 font-medium">{tx.amount}</td>
                    <td>{tx.sender}</td>
                    <td>{tx.receiver}</td>
                    <td>
                      <Badge
                        className={
                          tx.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : tx.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }
                      >
                        {tx.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </CardBody>
      </Card>

      {/* MODAL (Deposit / Withdraw / Transfer / Fund) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg w-96">

            <h2 className="text-lg font-semibold mb-4 capitalize">
              {showModal} Amount
            </h2>

            <input
              type="number"
              placeholder="Enter amount"
              className="w-full border p-3 rounded-lg mb-4"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
              onClick={() => {
                alert(`${showModal} successful!`);
                setShowModal(null);
                setAmount('');
              }}
            >
              Confirm
            </button>

            <button
              className="w-full mt-2 text-red-500"
              onClick={() => setShowModal(null)}
            >
              Cancel
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Wallet;