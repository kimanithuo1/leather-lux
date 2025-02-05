const Logo = ({ className = "h-8 w-auto" }) => {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#3D2B1F" />
        <path
          d="M20 50C20 33.4315 33.4315 20 50 20V20C66.5685 20 80 33.4315 80 50V50C80 66.5685 66.5685 80 50 80V80C33.4315 80 20 66.5685 20 50V50Z"
          fill="#D4AF37"
        />
        <path d="M35 40H65M35 50H65M35 60H65" stroke="#3D2B1F" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  }
  
  export default Logo
  
  