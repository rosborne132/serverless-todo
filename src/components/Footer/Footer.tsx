import * as React from 'react'

export const Footer = React.memo(() => (
    <footer className="flex justify-center pv1 w-100 white">
        <a
            href="https://rosborne.io"
            target="_blank"
            rel="noopener noreferrer"
            className="color-inherit flex justify-center no-underline"
        >
            Developed By Me!
        </a>
    </footer>
))
