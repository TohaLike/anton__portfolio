import React from "react"
import { useSpring, animated, useTrail } from "react-spring"

const Links: React.FC = () => {
    const linkBoks = ['https://github.com/TohaLike', 'https://t.me/smokeonthetower',
       'mailto:antonpaper500@gmail.com', 'https://instagram.com/death__devil.7?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr']
    const itemLinks = ['GitHub', 'Telegram', 'Email', 'Instagram']

    const fadeLinks = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 700 }
    })

    const trailHeaderLinks = useTrail(itemLinks.length, {
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 700 }
    })


    return (
        <>
            <div className="visibility__links">
                {trailHeaderLinks.map((style, index) => (
                    <animated.a key={index} href={linkBoks[index]} style={style} className={`link__block links__content__visibility__${index}`}>
                        {itemLinks[index]}
                    </animated.a>
                ))}
            </div>
        </>
    )
}

export default Links