import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo: React.FC = () => {
    return (
        <Link href="/">
            <Image
                src="/images/logo.png"
                alt="logo"
                width={65}
                height={65}
                className='md:ml-16'
            />
        </Link>
    )
}

export default Logo
