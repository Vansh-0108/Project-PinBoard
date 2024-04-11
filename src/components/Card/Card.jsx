// import React from 'react'
import './Card.scss'

function Card({img, title, skills, lvl, desc}) {

    // const img = 'src\assets\Screenshot 2024-04-11 133742.png'
    // const title = 'Social Link Profile'
    // const skills = ['HTML', 'CSS', 'JS'];
    // const lvl = {
    //     number: 4,
    //     text: 'ADVANCED'
    // }
    // const desc = "In this small project, you'll build out your social link-sharing profile. You can even personalize it and use it to share all your social profiles!"
    const color = ['#78c8d7', '#acd444', '#f1b604', '#f48925']

  return (
    <div className='card'>
        <div className='img'>
            <img src={img} alt="" />
        </div>
        
        <div className='title'> {title} </div>

        <div className='skills'>
            <div className='stack'>
                {
                    skills.map((skill, key) => {
                        return <div className='skill' key = {key} style={{"color": color[key]}}>{skill}</div>
                    })
                }
            </div>
            <div className='lvl' style={{'border': `solid 0.7px ${color[lvl.number-1]}` }}>
                <div className='number' style={{"backgroundColor": color[lvl.number-1]}}>{lvl.number}</div>
                <div className='text' style={{"color": color[lvl.number-1]}}>{lvl.text}</div>
            </div>
        </div>

        <p className='desc'> {desc} </p>
    </div>
  )
}

export default Card