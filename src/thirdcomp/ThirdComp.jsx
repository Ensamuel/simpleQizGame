import React from 'react'
import './ThirdComp.css'
import {AiFillApple} from 'react-icons/ai'
const ThirdComp = () => {
    return (
        <div>
            <table>
                <tbody className='t-body'>
                    <tr className='table-head'>
                        <td className='table-head-td'>SYMBOL</td>
                        <td>PRICE</td>
                        <td>%RETURN</td>
                        <td>TOTAL NET COST</td>
                        <td>MARKET VALUE</td>
                        <td>TOTAL GAIN</td>
                        <td>DAILY GAIN</td>
                        <td>%PORTFOLIO</td>
                    </tr>
                    <tr className='table-rows'>
                        <td> <AiFillApple/> AAPL</td>
                        <td> -234.00%</td>
                        <td> $45.43 </td>
                        <td> $1234.00 </td>
                        <td>$1345.87 </td>
                        <td>$456.34 </td>
                        <td>-3.45</td>
                        <td>13.45%</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default ThirdComp