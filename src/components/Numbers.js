import { isFocusable } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import NumList from "./NumList";

const Numbers = props => {
  const [frontNumber, setFrontNumber] = useState("");
  const [backNumber, setBackNumber] = useState("");
  const [submitLottoList, setSubmitLottoList] = useState([]);
  const { front, back } = props.winningObject;

  const digitRegex = /[0-9]/g;

  const onFrontNumberChange = e => {
    if (frontNumber.length <= 1) {
      if (digitRegex.test(`${e.target.value}`)) {
        setFrontNumber(e.target.value);
      } else if (e.target.value.length === 0) {
        setFrontNumber("");
      }
    } else if (
      e.target.value.length < 4 &&
      digitRegex.test(`${e.target.value[e.target.value.length - 1]}`)
    ) {
      setFrontNumber(e.target.value);
      console.log("hi");
    }
  };

  const onBackNumberChange = e => {
    if (backNumber.length <= 1) {
      if (digitRegex.test(`${e.target.value[e.target.value.length - 1]}`)) {
        setBackNumber(e.target.value);
      } else if (e.target.value.length === 0) {
        setBackNumber("");
      }
    } else if (
      e.target.value.length < 7 &&
      digitRegex.test(`${e.target.value[e.target.value.length - 1]}`)
    ) {
      setBackNumber(e.target.value);
    }
  };

  const onKeyPress = e => {
    if (e.key == "Enter") {
      onClickButton();
    }
  };

  const onClickButton = () => {
    const getRank = () => {
      //１等
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
        return "1等の組違い賞";
      }
      //２等
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
      //特別償
      if (
        back.extra.some(number => {
          return backNumber.slice(-4) === number;
        })
      ) {
        return "特別償";
      }
      //3等
      if (
        back.third.some(number => {
          return backNumber.slice(-3) === number;
        })
      ) {
        return "3等";
      }
      //4等
      if (
        back.forth.some(number => {
          return backNumber.slice(-2) === number;
        })
      ) {
        return "4等";
      }
      //5等
      if (
        back.fifth.some(number => {
          return backNumber.slice(-1) === number;
        })
      ) {
        return "5等";
      }

      return "外れ";
    };
    //length가 3
    if (frontNumber.length !== 3 || backNumber.length !== 6) {
      if (frontNumber.length !== 3 && backNumber.length !== 6) {
        alert("組番号は３形態になります。\n裏数字は６形態になります。");
      } else if (frontNumber.length !== 3) {
        alert("組番号は３形態になります。");
      } else if (backNumber.length !== 6) {
        alert("裏数字は６形態になります。");
      }
    } else {
      const lottoInfo = {
        front: frontNumber,
        back: backNumber,
        rank: getRank(),
      };
      const tempList = [...submitLottoList];

      tempList.push(lottoInfo);
      setSubmitLottoList(tempList);

      setFrontNumber("");
      setBackNumber("");
    }
  };

  useEffect(() => {
    //주소값 비교하면 안되니까 submitLottolist !==[]가 아님
    if (submitLottoList.length !== 0) {
      window.scrollTo(0, document.body.scrollHeight, "smooth");
    }
  }, [submitLottoList]);

  return (
    <div>
      <div>
        <input type='text' onChange={onFrontNumberChange} value={frontNumber} />
        <input
          type='text'
          onChange={onBackNumberChange}
          onKeyPress={onKeyPress}
          value={backNumber}
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
