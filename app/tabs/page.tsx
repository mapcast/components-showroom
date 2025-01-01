'use client'
import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {HSPagination, HSTabs, HSTextArea} from 'mapcast-components'

const code = `import {HSTabs} from 'hs-components/src/components/common/HSTabs';

<HSTabs
selected={step}
clickTab={(s: string) => setStep(s)}
items={[
	{raw: 'table', display: 'Table Page'},
	{raw: 'paddington', display: 'Paddington'},
	{raw: 'COT', display: 'City of Troy'},
]}/>
`

export default function TabsDescription() {
  const [step, setStep] = useState('');
  return (
    <> 
      {/*
      <div style={{width: '100%', height: 'auto', padding: '10px 0'}}>
        <HSTabs
        selected={step}
        clickTab={(s: string) => setStep(s)}
        items={[
          {raw: 'rodin', display: 'Augusto Rodin'},
          {raw: 'paddington', display: 'Paddington'},
          {raw: 'cot', display: 'City of Troy'},
        ]}/>
      </div>
      <HSTextArea width={450} height={175} fieldName='Code' fieldValue={code}/> */}
      <HSPagination page={1} maxPage={20} onChange={() => {}} setPage={() => {}}/>
    </>
  )
}