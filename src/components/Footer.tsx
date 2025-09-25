const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center border-t  sm:border-gray-200/15 border-transparent p-6 text-sm text-muted-foreground  bg-transparent'>
      <div className='flex flex-col sm:flex-row gap-6 px-6 items-center'>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
        <div>Cookies Settings</div>
      </div>
      <div className='flex flex-grow justify-end pt-10 sm:pt-0'>XSaber™ 2025</div>
    </div>
  )
}

export default Footer
