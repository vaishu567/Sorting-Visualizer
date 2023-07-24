// import React, { useCallback } from 'react';
import Header from './components/Header';
import Bars from './components/Bars';
import { useState, useEffect } from 'react';
import './styles/Sorting.css';

function App() {
  const [array, setArray] = useState([]);
  const [val, setVal] = useState(5);
  const [speed, setSpeed] = useState(100);
  const [name, setName] = useState('');
  const [barColors, setBarColors] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isSDisplay, setSDisplay] = useState(false);
  const colors = {
    current1: '#ffd60a',
    current2: '#9381ff',
    current3: '#3fa34d',
    current4: '#d183c9',
    current5: '#b56576',
    sorted: '#f28482',
    unsorted: '#6c757d',
  };

  // To get size of array when changed:
  const getValue = x => {
    setVal(x);
  };
  // change speed function:
  const changeSpeed = x => {
    setSpeed(x);
    console.log(speed);
  };

  useEffect(() => {
    if (array.length > 0 && isSorting) {
      runSortF();
    }
  }, [speed, isSorting]);

  // To generate a new array:
  const GenerateArray = () => {
    const newArray = [];
    const newColors = [];

    for (let i = 0; i < val; i++) {
      newArray.push(randomIntGenerator(2, 400));
      newColors.push(colors.unsorted);
    }
    setArray(newArray);
    setBarColors(newColors);
  };
  // to reset array:
  const resetArray = x => {
    const newArray = [];
    const newColors = [];

    for (let i = 0; i < x; i++) {
      newArray.push(randomIntGenerator(2, 400));
      newColors.push(colors.unsorted);
      console.log('i worked');
    }
    setArray(newArray);
    setBarColors(newColors);
    console.log(newArray);
  };
  // helper function to genereate random range:
  const randomIntGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  // to clear array:
  const clearArray = () => {
    setArray([]);
  };
  // get x for sort:
  const getX = x => {
    setName(x);
    console.log('GETTED');
    setSDisplay(true);
  };
  //PAUSE-PLAY:
  const handlePlay = () => {
    setIsSorting(true);
  };

  const handlePause = () => {
    setIsSorting(false);
    // setSDisplay(true)
    console.log('handledpause');
  };

  // setting time for run sort funxtion:
  //running functions:

  const runSortF = async () => {
    const arr = [...array];
    const n = arr.length;
    setIsSorting(true);
    if (name === 'Bubble Sort!') {
      await BubbleSort(arr, n);
    } else if (name === 'Insertion Sort!') {
      await InsertionSort(arr, n);
    } else if (name === 'Selection Sort!') {
      await SelectionSort(arr, n);
    }
    setSDisplay(false);
    setIsSorting(false);
  };

  // useEffect(()=>{
  //   swap();

  // },[speed])

  // swap function:
  const swap = (j, k, arr) => {
    return new Promise(res => {
      setTimeout(() => {
        [arr[j], arr[k]] = [arr[k], arr[j]];
        setArray([...arr]);
        res();
        const newColors = [...barColors];
        newColors[j] = colors.current1;
        newColors[k] = colors.current2;
        newColors[j + 2] = colors.current3;
        setBarColors(newColors);
      }, -speed);
    });
  };

  // sorting algorithm functions:
  // 1.bubble-sort:

  const BubbleSort = async (arr, n) => {
    // const arr=[...array]
    // const n= arr.length;
    const newColors = [...barColors];
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          await swap(j, j + 1, arr);
        }
        //       // check if is sorting is false
        // else if (!isSorting) {
        //   break; // Stop sorting
        // }
      }
      newColors[n - i - 1] = colors.sorted;
      setBarColors(newColors);
    }
  };

  // 2.selection sort:
  const SelectionSort = async (arr, n) => {
    const newColors = [...barColors];
    for (let i = 0; i < n - 1; i++) {
      let mini = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[mini]) {
          mini = j;
        }
        newColors[n - j - 1] = colors.current2;
        setBarColors(newColors);
      }
      await swap(i, mini, arr);
      newColors[n - i - 1] = colors.current5;
      setBarColors(newColors);
    }
  };
  // 3.insertion sort:
  const InsertionSort = async (arr, n) => {
    const newColors = [...barColors];
    for (let i = 1; i < n + 1; i++) {
      for (let j = i; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
          await swap(j - 1, j, arr);
        }
      }
      newColors[n - i - 1] = colors.current4;
      setBarColors(newColors);
    }
  };

  return (
    <>
      <Header
        resetArray={resetArray}
        GenerateArray={GenerateArray}
        getValue={getValue}
        clearArray={clearArray}
        runSortF={runSortF}
        changeSpeed={changeSpeed}
        getX={getX}
        isSorting={isSorting}
        handlePause={handlePause}
        handlePlay={handlePlay}
        isSDisplay={isSDisplay}
        setSDisplay={setSDisplay}
      />
      <Bars array={array} barColors={barColors} />
    </>
  );
}

export default App;
