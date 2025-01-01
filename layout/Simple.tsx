'use client';
import { useState } from 'react';
import {HSSimpleFrame, HSDrawer, HSButton} from "chs-components";

import { Roboto } from 'next/font/google';
const font = Roboto({ subsets: ["latin"], weight: "400" });

type WrapperProp = {
  children: JSX.Element
}
export default function Simple({children}: WrapperProp) {
  const [background, setBackground] = useState('#FFF');
  return (
    <div style={{width: '100vw', height: '100vh', background, minWidth: '100vw', minHeight: '100vh', overflow: 'auto'}} className={font.className}>
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
      <div className={`hs-component-desc ${font.className}`}>
        <HSSimpleFrame width={'95vw'} height={'90vh'} title='Tabs' padding={20}>
          {children}
        </HSSimpleFrame>
      </div>
      <style jsx>{`
        .hs-component-desc {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}