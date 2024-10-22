'use client';

import { Transaction } from "@/DTOs/transactions.dto";
import Links from "@/components/Links/Links";
import Transactions from "@/components/Transactions/Transactions";
import {
  Button
} from "@/components/ui/button";
import { useState, useEffect } from "react";


export default function Home() {
  const [showTransactions, setShowTransactions] = useState<boolean>(true);
  const [showLoading, setShowLoading] = useState<boolean>(true);
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    const getTransactions = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/get-payments`, {cache: "force-cache"});
      const data = await res.json();
      if (data.data && data.data.length > 0){
        setTransaction(data.data);
        setShowLoading(false)
      } else {
        setShowLoading(true)
      }
    }
    getTransactions();
  }, []);

  return (
    <div>
      <div className="flex justify-around items-center gap-4">
        <Button
          className="w-3/4"
          onClick={() => setShowTransactions(true)}
        >
          Transactions
        </Button>
        <Button
          className="w-3/4"
          onClick={() => setShowTransactions(false)}
        >
          Links
        </Button>
      </div>
      {
        showTransactions ? (
          <Transactions transactions={transactions} showLoading={showLoading} />
        ) : (
          <Links />
        )
      }
    </div>
  );
}
