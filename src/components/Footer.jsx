import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-4 bg-slate-900 text-center py-8 text-white [&>*]:text-sm'>
        <span>
            Copyright © 2023 - GhostTalk
        </span>
        <span className='text-base text-slate-200'>
            Powered By TechCrony
        </span>
    </footer>
  )
}

export default Footer