import { utils } from '@/lib/utils'
import { stockListTableHeaders } from '@/lib/data'

interface StockProps {
    stocks: Stock[]
}

const StockLIst = ({ stocks }: StockProps) => {
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default StockLIst