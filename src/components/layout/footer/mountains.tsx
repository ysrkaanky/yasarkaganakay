import React from "react"

interface MountainsProps {
  className?: string
}

export default function Mountains(props: MountainsProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 900"
      className={props.className}
    >
      <rect width="1600" height="900" fill="transparent" />
      <polygon fill="#2a71cc" points="957 450 539 900 1396 900" />
      <polygon fill="#0032aa" points="957 450 872.9 900 1396 900" />
      <polygon fill="#2266b8" points="-60 900 398 662 816 900" />
      <polygon fill="#0038a5" points="337 900 398 662 816 900" />
      <polygon fill="#1b5ca5" points="1203 546 1552 900 876 900" />
      <polygon fill="#003d9f" points="1203 546 1552 900 1162 900" />
      <polygon fill="#155192" points="641 695 886 900 367 900" />
      <polygon fill="#004198" points="587 900 641 695 886 900" />
      <polygon fill="#104780" points="1710 900 1401 632 1096 900" />
      <polygon fill="#004490" points="1710 900 1401 632 1365 900" />
      <polygon fill="#0c3d6e" points="1210 900 971 687 725 900" />
      <polygon fill="#064788" points="943 900 1210 900 971 687" />
    </svg>
  )
}
