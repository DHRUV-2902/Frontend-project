import React from 'react'


export default function HomePage() {
  return (
    
      <div className='w-full h-screen bg-zinc-300 flex flex-col justify-between '>
        <br/><br/>
        <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Access to Advanced Assessment Tools</p>
                <h1 className='py-3 text-5xl md:text-7xl '> Online Recruitment  </h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            
            <div>
                <img className='w-full' id="image" alt="/" ></img>
            
            </div>
        </div>
        <div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
               
                <p> Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'> personal interviews  </p>
                    <p className='flex px-4 py-2 text-slate-500'> prepartions </p>
                    <p className='flex px-4 py-2 text-slate-500'> Live Training</p>
                    <p className='flex px-4 py-2 text-slate-500'> Guidance </p>
                </div>
            </div>
        </div>
    </div>
    <br/><br/><br/>
    
{/* pricing  */}
<div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-8'>The right Price for Online recturtment process </h3>
          <p className='text-3xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            voluptatum iste.
          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>Rs 999 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>Rs 1999<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <p className='flex py-4'>Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div name='about' className='w-full my-32 text-2xl'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Support </p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Portal for practice </p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100K</p>
                    <p className='text-gray-400 mt-2'>Subs </p>
                </div>
            </div>
        </div>
    </div>

    

     {/* footer  */}
     <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'/>
                    <button className='p-2 mb-4'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>Dhruv more </p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
            
        </div>
        </div>
    </div>
  
      </div>
    
  )
}
