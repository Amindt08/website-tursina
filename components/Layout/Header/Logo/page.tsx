import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo: React.FC = () => {
    return (
        <Link href="/">
            <Image
                src="/images/logo.png"
                alt="logo"
                width={50}
                height={50}
                style={{ width: "auto", height: "auto" }}
                quality={100}
                className='ml-16'
            />
        </Link>
    )
}

export default Logo
