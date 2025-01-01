'use client'
import { Roboto } from "next/font/google";
import { useState } from "react";
import {HSPagination, HSModal, HSTabs, HSBigInput, HSSwitch, HSRadio, HSPicketProgressBar, HSTextArea, 
  HSSimpleLoading, HSButton, HSLink, HSToggler, HSFloatButton, HSStepper, HSSimpleToast, HSSimpleFrame, HSSearchPanel,
  HSTable, HSInput, HSSelectBox, HSDrawer, HSMiniMenu, HSTooltip, HSDevider} from "mapcast-components";
import testIcon from '@/public/modify.png';


const font = Roboto({ subsets: ["latin"], weight: "400" });

const loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const footerData = [
  {title: 'Mini Item', items: [{onClick: () => {}, display: 'boardboardboard'}, {onClick: () => {}, display: 'home'}, {onClick: () => {}, display: 'loremipsumdolo'}]},
  {title: 'Foot 2', items: [{onClick: () => {}, display: 'components'}, {onClick: () => {}, display: 'home'}]}
]

export default function TableTest() {
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState('a');
  const [fieldValue, setFieldValue] = useState('');
  const [textarea, setTextarea] = useState(loremipsum);
  const [modalActive, setModalActive] = useState(true);
  const [step, setStep] = useState('table');
  const [toast, setToast] = useState(false);
  const [background, setBackground] = useState('#FFF');
  const [page, setPage] = useState(1);
  const [input, setInput] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [list, setList] = useState([
    {id: '1', birthday: '2024-03-25', name: 'Deep Impact', price: 145455, phone: loremipsum, level: loremipsum},
    {id: '2', birthday: '2024-03-14', name: 'Buena Vista', price: 147886, phone: loremipsum, level: loremipsum},
    {id: '3', birthday: '2024-05-14', name: 'Orfevre', price: 157621, phone: loremipsum, level: loremipsum},
    {id: '4', birthday: '2024-03-11', name: 'Lord Kanaloa', price: 85020, phone: loremipsum, level: loremipsum},
    {id: '5', birthday: '2024-03-10', name: 'Almond Eye', price: 191526, phone: loremipsum, level: loremipsum},
    {id: '6', birthday: '2024-03-06', name: 'Chrono Genesis', price: 120473, phone: loremipsum, level: loremipsum},
    {id: '7', birthday: '2024-03-23', name: 'Equinox', price: 221544, phone: loremipsum, level: loremipsum},
    {id: '8', birthday: '2024-05-07', name: 'Do Deuce', price: 177587, phone: loremipsum, level: loremipsum}
  ]);
  const [searchValue, setSearchValue] = useState('');
  const [searchConditions, setSearchConditions] = useState<any[]>([]);
  function sort(sort: any) {
    if(sort.target === "") {
      setList([{id: '1', birthday: '2024-03-25', name: 'Deep Impact', price: 145455, phone: loremipsum, level: loremipsum},
      {id: '2', birthday: '2024-03-14', name: 'Buena Vista', price: 147886, phone: loremipsum, level: loremipsum},
      {id: '3', birthday: '2024-05-14', name: 'Orfevre', price: 157621, phone: loremipsum, level: loremipsum},
      {id: '4', birthday: '2024-03-11', name: 'Lord Kanaloa', price: 85020, phone: loremipsum, level: loremipsum},
      {id: '5', birthday: '2024-03-10', name: 'Almond Eye', price: 191526, phone: loremipsum, level: loremipsum},
      {id: '6', birthday: '2024-03-06', name: 'Chrono Genesis', price: 120473, phone: loremipsum, level: loremipsum},
      {id: '7', birthday: '2024-03-23', name: 'Equinox', price: 221544, phone: loremipsum, level: loremipsum},
      {id: '8', birthday: '2024-05-07', name: 'Do Deuce', price: 177587, phone: loremipsum, level: loremipsum}]);
    } else {
      if(sort.direction) {
        const sorted = list.sort((a:any, b:any) => b[sort.target] > a[sort.target] ? -1 : a[sort.target] > b[sort.target] ? 1 : 0);
        setList(sorted);
      } else {
        const sorted = list.sort((a:any, b:any) => a[sort.target] > b[sort.target] ? -1 : b[sort.target] > a[sort.target] ? 1 : 0);
        setList(sorted);
      }
    }
  }
  return (
    <div style={{width: '100%', height: '100%', background, minWidth: '100vw', minHeight: '100vh', overflow: 'auto'}} className={font.className}>
      <div style={{position: 'fixed', right: 10, top: 10, display: 'flex', gap: 10}}>
        <HSButton text="day" onClick={() => setBackground("#FFF")}/>
        <HSButton text="night" onClick={() => setBackground("#111")}/>
      </div>
      <HSDrawer items={[
        {text: "Pages", sub: [
          {text: 'board page', onClick: () => {}},
          {text: 'component page', onClick: () => {}},
          {text: 'home', onClick: () => {}}]},
        {text: "Good Shelf", sub: [{text: 'Sub Shelf3', onClick: () => alert("sub!")},{text: 'Sub Shelf 4', onClick: () => alert("sub 2!")},]},
        {text: "Big Shelf", sub: [{text: 'Sub Shelf3', onClick: () => {}},{text: 'Sub Shelf 4', onClick: () => {}},]},
        {text: "Tall Shelf", sub: [{text: 'Sub Shelf3', onClick: () => {}},{text: 'Sub Shelf 4', onClick: () => {}},]},
        {text: "My Shelf", sub: [{text: 'Sub Shelf3', onClick: () => {}},{text: 'Sub Shelf 4', onClick: () => {}},]},
        {text: "Dac Shelf", sub: [{text: 'Sub Shelf3', onClick: () => {}},{text: 'Sub Shelf 4', onClick: () => {}},]},
        {text: "Shlf", sub: [{text: 'Sub Shelf3', onClick: () => {}},{text: 'Sub Shelf 4', onClick: () => {}},]},
        {text: "Shef", sub: [{text: 'Sub Shelf3', onClick: () => {}},{text: 'Sub Shelf 4', onClick: () => {}},]},
        {text: "Self", sub: [{text: 'Sub Shelf3', onClick: () => {}},{text: 'Sub Shelf 4', onClick: () => {}},]},
        {text: "helf", sub: [{text: 'Sub Shelf3', onClick: () => {}},{text: 'Sub Shelf 4', onClick: () => {}},]},
        {text: "Shel", sub: [{text: 'Sub Shelf3', onClick: () => {}},{text: 'Sub Shelf 4', onClick: () => {}},]},
      ]}/>
      <div className={`hs-demo-grid ${font.className}`}>
        <div style={{gridColumn: 'span 2'}}>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"tabs"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSTabs
              selected={step}
              clickTab={(s: string) => setStep(s)}
              items={[
                {raw: 'table', display: 'Table Page'},
                {raw: 'paddington', display: 'Paddington'},
                {raw: 'COT', display: 'City of Troy'},
              ]}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div style={{gridColumn: 'span 2'}}>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"stepper"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSStepper
              step={step}
              setStep={(s: string) => setStep(s)}
              items={[
                {raw: 'table', display: 'Table Page'},
                {raw: 'paddington', display: 'Paddington'},
                {raw: 'COT', display: 'City of Troy'},
              ]}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"switch"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSSwitch value={"bsd"} checked={checked} text={'Switch Me'} onChange={() => setChecked(!checked)}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"radio"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <HSRadio value={"a"} selected={selected} text="Radio A" onClick={setSelected}/>
              <HSRadio value={"b"} selected={selected} text="Radio B" onClick={setSelected}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div style={{gridColumn: 'span 2'}}>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"big input"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 20}}>
              <HSBigInput width={250} fieldName="Just Test" fieldValue={fieldValue} setFieldValue={setFieldValue} reduceBottomPadding 
              imageSrc={testIcon.src}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"picket progress bar"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{height: 55, width: 250, padding: '5px 0'}}>
                <HSPicketProgressBar picket="over 90%." value={98} text="Progress..."/>
              </div>
            </div>
          </HSSimpleFrame>
        </div>
        <div style={{gridRow: 'span 2'}}>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"simple loading"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSSimpleLoading/>
            </div>
          </HSSimpleFrame>
        </div>
        <div style={{gridColumn: 'span 2', gridRow: 'span 2'}}>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"textarea"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSTextArea fieldName="Custom Text-Area" fieldValue={textarea} setFieldValue={setTextarea}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"simple button"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSButton onClick={() => setModalActive(true)} text={"open modal"}/>
            </div>
          </HSSimpleFrame>
        </div>
        
        <div>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"simple link"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSLink text="Click ME!" cooldownTime={1000} onClick={() => setToast(true)}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"devider"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSDevider size={1}/>
              <HSDevider size={1} horizontal/>
            </div>
          </HSSimpleFrame>
        </div>
        <div style={{gridColumn: 'span 2'}}>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"toggler"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSToggler width={350} items={[
                {display: 'ONE', on: () => {}, off: () => {}, default: true},
                {display: 'TWO', on: () => {}, off: () => {}, default: true},
                {display: 'THREE', on: () => {}, off: () => {}, default: false},
                {display: 'FOUR', on: () => {}, off: () => {}, default: false},
                {display: 'FIVE', on: () => {}, off: () => {}, default: false},
              ]}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div style={{gridColumn: 'span 3', gridRow: 'span 3'}}>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"table"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSTable headers={[
                {
                  raw: 'birthday',
                  type: 'string',
                  clickable: false,
                  display: 'Birthday',
                },
                {
                  raw: 'name',
                  type: 'string',
                  clickable: true,
                  display: 'Name',
                },
                {
                  raw: 'price',
                  type: 'number',
                  clickable: true,
                  display: 'Price',
                },
                {
                  raw: 'phone',
                  type: 'string',
                  clickable: true,
                  display: 'Phone',
                },
                {
                  raw: 'level',
                  type: 'string',
                  clickable: true,
                  display: 'Level',
                },
              ]} list={list} handleClickData={(_:any, data: string) => alert(`you clicked: ${data}`)} handleSort={sort} loading={false}/> 
            </div>
          </HSSimpleFrame>
        </div>
        <div style={{gridRow: 'span 2'}}>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"select box"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center'}}>
              <HSSelectBox items={[
                {
                  raw: 'birthday',
                  search: false,
                  display: 'Birthday',
                },
                {
                  raw: 'name',
                  search: true,
                  display: 'Name',
                },
                {
                  raw: 'price',
                  search: true,
                  display: 'Price',
                },
                {
                  raw: 'phone',
                  search: true,
                  display: 'Phone',
                },
                {
                  raw: 'level',
                  search: true,
                  display: 'Level',
                },
              ]} selected={searchKey} setSelected={setSearchKey}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div style={{gridColumn: 'span 2'}}>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"page selector"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSPagination page={page} maxPage={20} onChange={() => {}} setPage={setPage}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"float button"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSFloatButton content={<span style={{color: '#C780FA', fontSize: 20}}>B</span>} onClick={() => {}}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"simple input"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSInput placeholder='type something' type='text' value={input} setValue={setInput} disabled={false}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"tooltip"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'left', alignItems: 'center', position: 'relative'}}>
              <HSTooltip text={"I am tooltip! nice to meet you! "} active={true} width={160} top={20} left={60}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div style={{gridRow: 'span 2'}}>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"mini menu"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <HSMiniMenu item={footerData[0]}/>
            </div>
          </HSSimpleFrame>
        </div>
        <div style={{gridRow: 'span 2', gridColumn: 'span 2'}}>
          <HSSimpleFrame width={'100%'} height={'100%'} padding={10} title={"multiple search panel"}>
            <div style={{width: '100%', height: 'calc(100% - 32px)', display: 'flex', justifyContent: 'center'}}>
              <HSSearchPanel items={[
                {
                  raw: 'birthday',
                  search: false,
                  display: 'Birthday',
                },
                {
                  raw: 'name',
                  search: true,
                  display: 'Name',
                },
                {
                  raw: 'price',
                  search: true,
                  display: 'Price',
                },
                {
                  raw: 'phone',
                  search: true,
                  display: 'Phone',
                },
                {
                  raw: 'level',
                  search: true,
                  display: 'Level',
                },
              ]}
              executeSearch={() => {}}
              searchKey={searchKey}
              updateSearchKey={setSearchKey}
              searchValue={searchValue}
              updateSearchValue={setSearchValue}
              searchConditions={searchConditions}
              updateSearchConditions={setSearchConditions}
              multiple/>
            </div>
          </HSSimpleFrame>
        </div>
        <style jsx>{`
          .hs-demo-grid {
            display: grid;
            gap: 20px;
            padding: 10px;
            padding-top: 50px;
            width: 100%;
            height: calc(100vh);
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          }
        `}</style>
      </div>
      <HSModal active={modalActive} setActive={setModalActive} title="Modal">
        <div style={{width: 500, height: 300}}></div>
      </HSModal>
      <HSSimpleToast text="Toast is Activated" active={toast} close={() => setToast(false)}/>
      {/*<HSFooter items={footerData} sub={{link: '', text: '약관을 확인하세요.'}} fixed/>*/}
    </div>
  )
}