import { isFocusable } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import NumList from "./NumList";

const Numbers = props => {
  const [frontNumber, setFrontNumber] = useState("");
  const [backNumber, setBackNumber] = useState("");
  const [submitLottoList, setSubmitLottoList] = useState([]);
  const { front, back } = props.winningObject;

  const onFrontNumberChange = e => {
    const sliceFront = e.target.value.slice(0, 3);
    setFrontNumber(sliceFront);
  };
  const onBackNumberChange = e => {
    setBackNumber(e.target.value);
  };
  //이게 뒤에있으면 왜 안되지?
  const onKeyPress = e => {
    if (e.key == "Enter") {
      onClickButton();
    }
  };

  const onClickButton = () => {
    const getRank = () => {
      console.log("hi");
      //1등
      if (
        front.some(number => {
          return frontNumber === number;
        }) &&
        back.first.some(number => {
          return backNumber === number;
        })
      ) {
        return <span>1等</span>;
      }
      //1等の前後賞
      if (
        front.some(number => {
          return frontNumber === number;
        }) &&
        back.nearFirst.some(number => {
          return backNumber === number;
        })
      ) {
        return "1等の前後賞";
      }
      //1等の組違い賞
      if (
        back.first.some(number => {
          return backNumber === number;
        })
      ) {
        return "特別償";
      }
      //2등
      if (
        front.some(number => {
          return frontNumber === number;
        }) &&
        back.second.some(number => {
          return backNumber === number;
        })
      ) {
        return "2等";
      }
      //특별상
      if (
        back.extra.some(number => {
          return backNumber.slice(-4) === number;
        })
      ) {
        return "特別償";
      }
      //3등
      if (
        back.third.some(number => {
          return backNumber.slice(-3) === number;
        })
      ) {
        return "3等";
      }
      //4등
      if (
        back.forth.some(number => {
          return backNumber.slice(-2) === number;
        })
      ) {
        return "4等";
      }
      //5등
      if (
        back.fifth.some(number => {
          return backNumber.slice(-1) === number;
        })
      ) {
        return "5等";
      }

      return "";
    };

    const lottoInfo = { front: frontNumber, back: backNumber, rank: getRank() };
    const tempList = [...submitLottoList];

    tempList.push(lottoInfo);
    setSubmitLottoList(tempList);

    setFrontNumber("");
    setBackNumber("");
  };

  return (
    <div>
      <div>
        <input
          type='number'
          onChange={onFrontNumberChange}
          value={frontNumber}
        />
        <input
          type='number'
          onChange={onBackNumberChange}
          onKeyPress={onKeyPress}
          value={backNumber}
          maxLength={6}
        />
        <button onClick={onClickButton}>登録</button>
      </div>
      {submitLottoList.map((submitLotto, index) => {
        return (
          <NumList
            front={submitLotto.front}
            back={submitLotto.back}
            rank={submitLotto.rank}
          />
        );
      })}
    </div>
  );
};

export default Numbers;
