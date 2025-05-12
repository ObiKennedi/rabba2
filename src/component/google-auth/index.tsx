import Image from "next/image"
import "./globals.scss"

const GoogleAuth = () => {
    return(
        <button className="google">
            <Image 
                src={'/icons/google.png'}
                width={24}
                height={24}
                alt="google"
            />
            <div>Continue with Google</div>
        </button>
    )
}

export default GoogleAuth