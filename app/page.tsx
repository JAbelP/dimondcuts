import Image from 'next/image';
import { Headers } from './components/header/Headers';
import { MainPageTopEyeCatch, GoogleCarosole,ProductEyeCatch} from "./components/EyeCatchs"
import { BodyBlogComponent } from "./components/BodyBlog"
import {MyFooter} from "./components/footer/MyFooter"

export default function Home() {
  return (
    <main className='bg-color3 h-max'>
      <Headers />
      <MainPageTopEyeCatch />
      <GoogleCarosole />
      <BodyBlogComponent />
      <ProductEyeCatch/>
      <MyFooter />

    </main>
  );
}
