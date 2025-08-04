const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center border-t border-gray-200/15 p-6 text-sm bg-[rgba(10,10,10,0.10)] backdrop-blur-xl sm:bg-transparent sm:backdrop-blur-none'>
      <div className='flex flex-col sm:flex-row gap-6 px-6 items-center'>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
        <div>Cookies Settings</div>
      </div>
      <div className='flex flex-grow justify-end pt-12 sm:pt-0'>XSaber™ 2025</div>
    </div>
  )
}

export default Footer
