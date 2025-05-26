import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import CardAddDog from './components/CardAddDog';
import { CirclePlus } from 'lucide-react';

function App() {

  return (
    <div className="min-h-screen bg-[#FFFDF3]">
      <Header />
      <div className="py-12 px-70">
        <Intro headline="Hello ${Doglover}!" text=""/>
        <CardAddDog
          headline="Add your first 4-legged visitor"
          text="Lorem ipsum dolor sit amet consectetur.
          Blandit congue sit sagittis cursus netus.
          Integer elementum eget libero et pellentesque blandit
          pellentesque viverra varius."
          buttonIcon={<CirclePlus strokeWidth={3}/>}
          buttonText="Add a dog"
        />
      </div>

    </div>
  )
}

export default App
