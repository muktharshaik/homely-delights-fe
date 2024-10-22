import { Transaction, TransactionStatus } from "@/DTOs/transactions.dto";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "../ui/badge";

interface TransactionsProps {
    transactions: Transaction[];
    showLoading: boolean;
}

export default function Transactions({ transactions, showLoading }: TransactionsProps) {
    const tile = "bg-white rounded-xl p-3 h-3/4 shadow-lg";
    return (
        <div>
            {
                showLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ScrollArea className="h-[500px] mt-5">
                        {
                            transactions.map((transaction, index) => (
                                <div key={index} className={`flex justify-between items-center gap-4 mb-2 rounded-md h-8 p-7 ${tile}`}>
                                    <p>{transaction.amount}</p>
                                    <p>{transaction.name}</p>
                                    <p>{transaction.email}</p>
                                    <Badge className={transaction.status == TransactionStatus.SUCCESS ? "bg-green-400" : "bg-red-400"}>{transaction.status}</Badge>
                                </div>
                            ))
                        }
                    </ScrollArea>
                )
            }
        </div>
    )
}