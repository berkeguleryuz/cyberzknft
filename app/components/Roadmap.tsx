import Image from 'next/image'
import React from 'react'

type Props = {}

const Roadmap = (props: Props) => {
  return (
    <div id="#roadmap" className="flex justify-around mt-10 gap-5">
        <Image
            alt='Roadmap'
            src='/CyberZK.png'
            width={700}
            height={700}
            className="p-1 transition-all rounded-3xl"
        />
    </div>
  )
}

export default Roadmap