import React from 'react'
import '../styles/Header.css'
import { Button, HStack,   Slider,
  SliderTrack,
  Text,
  SliderThumb,
  SliderFilledTrack,
  Box,
  Heading,
  VStack,
 } from '@chakra-ui/react'
 import {FaPause,FaPlay} from 'react-icons/fa'

const Header = ({resetArray,getValue,GenerateArray,clearArray,changeSpeed,runSortF,getX,handlePause,handlePlay,isSorting,isSDisplay,updateSpeed}) => {

  return (
    <div className='header' >
      <HStack className='title' >
          <Heading  >Sorting Visualizer</Heading>
      </HStack>


      <HStack >      
          <Button  type="button" variant={"ghost"} colorScheme="white" onClick={GenerateArray}  >Generate new array!</Button>
          <VStack pl={7} pr={7} >
          <Text >
            Change Array Size
          </Text>
            <Slider  min={5} w={"150px"} step={10} max={100} onChange={(e)=>{resetArray(e); getValue(e)}} >
              <SliderTrack bg='red.100'>
                <Box position='relative' right={10} />
                <SliderFilledTrack bg='tomato' />
              </SliderTrack>
              <SliderThumb boxSize={4} />
            </Slider>
          </VStack>
          <VStack pl={7} pr={7} >
          <Text >
            Change Speed
          </Text>
            <Slider  min={-200} step={100} w={"150px"}  max={4000} onChange={(e)=>{changeSpeed(e)}} >
              <SliderTrack bg='red.100'>
                <Box position='relative' right={10} />
                <SliderFilledTrack bg='tomato' />
              </SliderTrack>
              <SliderThumb boxSize={4} />
            </Slider>
          </VStack>
          <HStack> 

          <Button id='Bubble Sort!' type="button" variant={"ghost"} colorScheme="white" onClick={()=>{getX("Bubble Sort!")}} >Bubble Sort!</Button>
          <Button type="button" variant={"ghost"} colorScheme="white" onClick={()=>{getX("Insertion Sort!")}} >Insertion Sort!</Button>
          <Button type="button" variant={"ghost"} colorScheme="white" onClick={()=>{getX("Selection Sort!")}} >Selection Sort!</Button>
          <Button type="button" variant={"ghost"} colorScheme="white"  >Merge sort!</Button>
          <Button type="button" variant={"ghost"} colorScheme="white"  >Quick sort!</Button>
          <Button type="button" variant={"ghost"} colorScheme="white"  >Heap sort!</Button>


          <VStack>
          {isSDisplay ? (<Text  colorScheme="white" onClick={runSortF} cursor={"pointer"} > Sort! 
          {isSorting ? (<button  style={{marginLeft:"8px"}} onClick={handlePause}><FaPause/></button>) : (<button style={{marginLeft:"8px"}}  onClick={handlePlay}><FaPlay/></button>)}</Text>):
           (<Text  colorScheme="white" display={"none"} onClick={runSortF} >Sort!</Text>)}
          

          </VStack>
          </HStack>

          <Button type="button" variant={"outline"} colorScheme="white" onClick={clearArray} >Clear Array!</Button>


          



      </HStack>
    </div>
  )
}

export default Header