import React from 'react'
import {useSpring, animated} from 'react-spring'
const heading={
    fontSize:'30px',
    color:'blue'
}
const Helloworld=()=>{
    const  props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
       config:{  duration: 1000  },
       color:'blue'
      })
      const props1 = useSpring({ number: 1, from: { number: 0 }, config:{  duration: 1000 }, })
return(
    <div>
        <h1 style={heading}>Hello React</h1>
        <animated.h1 style={props}>hello</animated.h1>
        <animated.span>{props1.number}</animated.span>
    </div>
    
)


}
export default Helloworld