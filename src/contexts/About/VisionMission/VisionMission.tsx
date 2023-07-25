import React from 'react'

const VisionMission: React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-around items-center py-10 font-[Montserrat-Medium]">
      <div
        className="h-4/5 w-4/5 flex flex-col justify-around items-center px-[8vw] py-[4vw]"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.25) -2px -2px 12px, rgba(0, 0, 0, 0.25) 12px 12px 16px',
          borderRadius: '10%'
        }}
      >
        <div className="flex flex-col justify-around items-center">
          <h5 className="text-[32px] md:text-[40px] font-[Montserrat-Bold]">Vision</h5>
          <div
            style={{
              marginTop: '10px',
              width: '100px',
              height: '15px',
              background: '#169470',
              borderRadius: '13px'
            }}
          ></div>
          <p className="sm:text-[22px] text-[16px] text-center mt-[30px]">
            SRE ITB as a renewable-energy-based community that will accommodate{' '}
            <span style={{ color: '#169470' }}>youth&apos;s interests</span> and{' '}
            <span style={{ color: '#169470' }}>maximize potential</span> to generate{' '}
            <span style={{ color: '#169470' }}>real-world impact</span>
          </p>
        </div>
        <div className="my-8" />
        <div className="flex flex-col justify-around items-center">
          <h5 className="text-[32px] md:text-[40px] font-[Montserrat-Bold]">Mission</h5>
          <div
            style={{
              marginTop: '10px',
              width: '100px',
              height: '15px',
              background: '#169470',
              borderRadius: '13px'
            }}
          ></div>
          <ol className="list-disc text-justify sm:text-[22px] text-[16px] mt-[30px]">
            <li>
              Enhancing <span style={{ color: '#169470' }}>renewable energy</span> knowledge through basic and advance
              learning program
            </li>
            <li>
              Providing exclusive portfolio through <span style={{ color: '#169470' }}>hands-on project</span> based on
              each individual&apos;s interests
            </li>
            <li>
              <span style={{ color: '#169470' }}>Maximizing individuals skills</span> through various projects and
              development programs
            </li>
            <li>
              Building and maintaining <span style={{ color: '#169470' }}>supportive internal relationship</span> to
              generate significant output
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default VisionMission
