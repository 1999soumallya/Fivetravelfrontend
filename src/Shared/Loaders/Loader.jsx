import React from 'react'
import { Dna, MagnifyingGlass } from 'react-loader-spinner'

const DnaLoader = () => {
  return (
    <div className='loader'>
      <Dna visible={true} height="100" width="100" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
    </div>
  )
}
const MagnifineLoader = () => {
  return (
    <div className='loader'>
      <MagnifyingGlass visible={true} height="80" width="80" ariaLabel="MagnifyingGlass-loading" wrapperStyle={{}} wrapperClass="MagnifyingGlass-wrapper" glassColor='#c0efff' color='#e15b64' />
    </div>
  )
}
export {DnaLoader, MagnifineLoader}