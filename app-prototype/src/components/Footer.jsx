import { Link } from '@nextui-org/react'

function Footer() {
    return <footer className="flex justify-end items-center">
        <div className="">
            <h3>Kou.d Blue</h3>
            <Link href="https://github.com/KoudBlue">Github</Link>
            <Link href="https://www.linkedin.com/in/koudblue/">LinkedIn</Link>
        </div>
    </footer>
}

export default Footer