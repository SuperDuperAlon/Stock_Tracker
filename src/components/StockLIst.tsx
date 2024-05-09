import { utils } from '@/lib/utils'
import { stockListTableHeaders } from '@/lib/data'
import { stockService } from '@/services/stock.service'

interface StockProps {
    stocks: Stock[],
    onDeleteStock: (id: string) => void
}

const StockLIst = ({ stocks, onDeleteStock }: StockProps) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {stockListTableHeaders.map((header) => (
                            <th key={header}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock) => (
                        <tr key={stock.id}>
                            <td>{stock.ticker}</td>
                            <td>{stock.name}</td>
                            <td>${stock.price.toLocaleString()}</td>
                            <td>{utils.priceFromHigh52w(stock.price, stock.high_52w)}%</td>
                            <td><button onClick={() => onDeleteStock(stock.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default StockLIst