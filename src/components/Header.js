import React from "react";
import "../styles/Header.scss";

const Header = props => {
  const { front, back } = props.winningObject;

  return (
    <div className='header'>
      <h1>関東中部東北自治</h1>
      <h2>宝くじ番号当て</h2>
      <table className='table'>
        <thead className='table-header'>
          <tr>
            <th>等級</th>
            <th>当せん金額</th>
            <th>組</th>
            <th>番号</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='table-td'>1等</td>
            <td className='table-td'>1.5億円</td>
            <td className='table-td'>
              <strong>{front}組</strong>
            </td>
            <td className='table-td'>
              <strong>{back.first}番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>1等の前後賞</td>
            <td className='table-td'>2500万円</td>
            <td className='table-td'>
              <strong></strong>
            </td>
            <td className='table-td'>
              <strong>1等の前後の番号</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>1等の組違い賞</td>
            <td className='table-td'>10万円</td>
            <td className='table-td'>
              <strong></strong>
            </td>
            <td className='table-td'>
              <strong>1等の組違い同番号</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>2等</td>
            <td className='table-td'>100万円</td>
            <td className='table-td'>
              <strong>各組共通</strong>
            </td>
            <td className='table-td'>
              <strong>183170番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>2等</td>
            <td className='table-td'>100万円</td>
            <td className='table-td'>
              <strong>各組共通</strong>
            </td>
            <td className='table-td'>
              <strong>158583番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>2等</td>
            <td className='table-td'>100万円</td>
            <td className='table-td'>
              <strong>各組共通</strong>
            </td>
            <td className='table-td'>
              <strong>126274番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>3等</td>
            <td className='table-td'>3000円</td>
            <td className='table-td'>
              <strong>下3ケタ</strong>
            </td>
            <td className='table-td'>
              <strong>600番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>3等</td>
            <td className='table-td'>3000円</td>
            <td className='table-td'>
              <strong>下3ケタ</strong>
            </td>
            <td className='table-td'>
              <strong>257番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>3等</td>
            <td className='table-td'>3000円</td>
            <td className='table-td'>
              <strong>下3ケタ</strong>
            </td>
            <td className='table-td'>
              <strong>449番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>4等</td>
            <td className='table-td'>1000円</td>
            <td className='table-td'>
              <strong>下2ケタ</strong>
            </td>
            <td className='table-td'>
              <strong>30番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>5等</td>
            <td className='table-td'>200円</td>
            <td className='table-td'>
              <strong>下1ケタ</strong>
            </td>
            <td className='table-td'>
              <strong>4番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>お年玉賞</td>
            <td className='table-td'>3万円</td>
            <td className='table-td'>
              <strong>下4ケタ</strong>
            </td>
            <td className='table-td'>
              <strong>4643番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>お年玉賞</td>
            <td className='table-td'>3万円</td>
            <td className='table-td'>
              <strong>下4ケタ</strong>
            </td>
            <td className='table-td'>
              <strong>0478番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>お年玉賞</td>
            <td className='table-td'>3万円</td>
            <td className='table-td'>
              <strong>下4ケタ</strong>
            </td>
            <td className='table-td'>
              <strong>2716番</strong>
            </td>
          </tr>
          <tr>
            <td className='table-td'>お年玉賞</td>
            <td className='table-td'>3万円</td>
            <td className='table-td'>
              <strong>下4ケタ</strong>
            </td>
            <td className='table-td'>
              <strong>3507番</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Header;
