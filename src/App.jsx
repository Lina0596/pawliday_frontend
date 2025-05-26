import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import CardOne from './components/CardOne';
import CardTwo from './components/CardTwo';
import { CirclePlus } from 'lucide-react';
import { Pencil } from 'lucide-react';

function App() {

  return (
    <div className="min-h-screen bg-[#FFFDF3]">
      <Header />
      <div className="py-12 px-70">
        <Intro headline="Hello ${Doglover}!" text=""/>
        <CardOne
          className="mb-10"
          headline="Add your first 4-legged visitor"
          text="Lorem ipsum dolor sit amet consectetur.
          Blandit congue sit sagittis cursus netus.
          Integer elementum eget libero et pellentesque blandit
          pellentesque viverra varius."
          buttonIcon={<CirclePlus strokeWidth={3}/>}
          buttonText="Add a dog"
        />
        <CardTwo
          name="Leo Storm"
          email="leo.storm@example.com"
          phoneNumber="+49 163 2438301"
          buttonIcon={<Pencil strokeWidth={3}/>}
          images={[{
            src: "https://cdn.pixabay.com/photo/2019/04/05/13/56/shepherd-mongrel-4105106_1280.jpg",
            alt: "Dog 1"
            },
            {
            src: "https://cdn.pixabay.com/photo/2020/05/28/17/15/dog-5231903_1280.jpg",
            alt: "Dog 2"
            }]
          }
        />
      </div>
    </div>
  )
}

export default App
