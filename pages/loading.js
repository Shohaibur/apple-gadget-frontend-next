import Link from "next/link"
import MyLayout from '@/pages/components/layout';
export default function Loading() {


    return (
      <>
      <MyLayout title="Loading"/>
        <h1 style={{color:"#330a00"}}>Loading</h1>
      <h1 style={{color:"#330a00"}}>This page is loading</h1>
      </>
    )
  }