'use client'

import GoogleAuth from "@/component/google-auth"
import Image from "next/image"
import Link from "next/link"
import "./globals.scss"

export default function SignUp() {
    return (
        <main className="sign-up">
            <section>
                <div>
                    <Image
                        src={'/icons/logo.png'}
                        alt="logo"
                        width={70}
                        height={70}
                    />
                    <div>Rabba</div>
                </div>
                <div>
                    <Image
                        src={'/icons/logo-background.png'}
                        width={300}
                        height={300}
                        alt="loading icons"
                    />
                    <Image
                        src={'/icons/logo-background.png'}
                        width={300}
                        height={300}
                        alt="loading icons"
                    />
                    <Image
                        src={'/icons/logo-background.png'}
                        width={300}
                        height={300}
                        alt="loading icons"
                    />
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <p>Welcome to</p>
                        <Image
                            src={"/icons/rabba-icon.png"}
                            width={237}
                            height={96}
                            alt="logo"
                        />
                        <div>
                            Recharge, Buy Data,
                            Pay Bills, Gain access to
                            earning opportunities through Rabba!
                        </div>
                    </div>
                    <div>Let’s Get Started...</div>
                    <div>
                        <GoogleAuth />
                        <Link href={"email-sign-up"}>
                            <div>Continue with Email</div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.21 12.173C14.21 13.013 14.449 13.348 15.074 13.348C16.467 13.348 17.354 11.573 17.354 8.62099C17.354 4.10899 14.066 1.94899 9.961 1.94899C5.738 1.94899 1.897 4.78099 1.897 10.133C1.897 15.245 5.257 18.029 10.417 18.029C12.169 18.029 13.345 17.837 15.144 17.237L15.53 18.844C13.754 19.421 11.856 19.588 10.393 19.588C3.625 19.588 0 15.868 0 10.132C0 4.34799 4.201 0.411987 9.985 0.411987C16.009 0.411987 19.2 4.01199 19.2 8.42799C19.2 12.172 18.025 15.028 14.329 15.028C12.648 15.028 11.545 14.356 11.401 12.867C10.969 14.523 9.817 15.028 8.256 15.028C6.168 15.028 4.416 13.419 4.416 10.18C4.416 6.91599 5.953 4.89999 8.713 4.89999C10.177 4.89999 11.089 5.47599 11.495 6.38799L12.192 5.11599H14.208V12.173H14.21ZM11.259 9.00499C11.259 7.68599 10.274 7.13299 9.458 7.13299C8.57 7.13299 7.587 7.85199 7.587 9.96499C7.587 11.645 8.331 12.581 9.458 12.581C10.25 12.581 11.259 12.077 11.259 10.685V9.00499Z" fill="#575DFB" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}