import React from 'react'
import Card from '../components/Card/Card'

function Home() {

    const projects = [
        {
            img: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1705487747%2FChallenges%2Fcf3rlsqoovxlf7uajpva.jpg&w=384&q=75',
            title: 'Social Links', 
            skills: ['HTML', 'CSS', 'JS'], 
            lvl: {
                number: 4,
                text: 'Advanced'
            }, 
            desc: "In this small project, you'll build out your social link-sharing profile. You can even personalize it and use it to share all your social profiles!"
        },
        {
            img: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1708091276%2FChallenges%2Fbpwbhwxnm9fkqw9lh0mm.jpg&w=384&q=75',
            title: 'Hangman game', 
            skills: ['HTML', 'CSS', 'JS'], 
            lvl: {
                number: 3,
                text: 'Intermediate'
            }, 
            desc: "This project is a great all-around test. You'll need good HTML to ensure accessible navigation. There are many tricky CSS details, and the game logic will test your JS."
        },
        {
            img: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1705487747%2FChallenges%2Fcf3rlsqoovxlf7uajpva.jpg&w=384&q=75',
            title: 'Social Links', 
            skills: ['HTML', 'CSS', 'JS'], 
            lvl: {
                number: 4,
                text: 'Advanced'
            }, 
            desc: "In this small project, you'll build out your social link-sharing profile. You can even personalize it and use it to share all your social profiles!"
        },
        {
            img: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1708091276%2FChallenges%2Fbpwbhwxnm9fkqw9lh0mm.jpg&w=384&q=75',
            title: 'Hangman game', 
            skills: ['HTML', 'CSS', 'JS'], 
            lvl: {
                number: 3,
                text: 'Intermediate'
            }, 
            desc: "This project is a great all-around test. You'll need good HTML to ensure accessible navigation. There are many tricky CSS details, and the game logic will test your JS."
        },
        {
            img: 'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1705487747%2FChallenges%2Fcf3rlsqoovxlf7uajpva.jpg&w=384&q=75',
            title: 'Social Links', 
            skills: ['HTML', 'CSS', 'JS'], 
            lvl: {
                number: 4,
                text: 'Advanced'
            }, 
            desc: "In this small project, you'll build out your social link-sharing profile. You can even personalize it and use it to share all your social profiles!"
        },
    ]

  return (
    <div className='container'>
        {
            projects.map((project, key) => <Card key = {key} {...project} />)
        }
      </div>
  )
}

export default Home