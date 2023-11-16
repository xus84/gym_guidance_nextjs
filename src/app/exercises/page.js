"use client"
import React, { useState } from 'react'

import ExerciseCard from './ExerciseCard';
import Header from '@/components/Header';

function Exercises() {

  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleExerciseClick = (exercise) => {
    setSelectedExercises((prevExercises) => [...prevExercises, exercise]);
  };
  

  const exercises = [
    {
      id: 1,
      name: 'Step Touch',
      description: 'Step side to side, lightly tapping your foot to the side.',
      image: './img/exercises/step_touch.jpg',
      width: '150px',
      height: '140px',
    },
    {
      id: 2,
      name: 'High Knees',
      description: 'Jog in place while lifting your knees as high as possible.',
      image: './img/exercises/step_touch.jpg',
      width: '150px',
      height: '140px',
    },
    {
      id: 3,
      name: 'Butt Kicker',
      description: 'Jog in place, kicking your heels up towards your glutes.',
      image: './img/exercises/step_touch.jpg',
      width: '150px',
      height: '140px',
    },
    {
      id: 4,
      name: 'Running in Place',
      description: 'Simulate running while staying in one spot.',
      image: './img/exercises/step_touch.jpg',
      width: '150px',
      height: '140px',
    },
    {
      id: 5,
      name: 'Front Kicks',
      description: 'Alternate kicking your legs forward.',
      image: './img/exercises/step_touch.jpg',
      width: '150px',
      height: '140px',
    },
    {
      id: 6,
      name: 'Windmill',
      description: 'Stand with feet shoulder-width apart, arms outstretched.',
      image: './img/exercises/step_touch.jpg',
      width: '150px',
      height: '140px',
    },
    {
      id: 7,
      name: 'Bend and Reach',
      description: 'Stand with feet shoulder-width apart. Bend at the waist, reaching down towards your toes.',
      image: './img/exercises/step_touch.jpg',
      width: '150px',
      height: '140px',
    },
    {
      id: 8,
      name: 'Calf Raises',
      description: 'Lift your heels off the ground while standing.',
      image: './img/exercises/step_touch.jpg',
      width: '150px',
      height: '140px',
    },
    {
      id: 9,
      name: 'Arm Circles',
      description: 'Extend your arms to the sides and make circular motions with your hands.',
      image: './img/exercises/step_touch.jpg',
      width: '150px',
      height: '140px',
    },
    {
      id: 10,
      name: 'Side Hops',
      description: 'Hop from side to side, landing softly on the balls of your feet.',
      image: './img/exercises/step_touch.jpg',
      width: '150px',
      height: '140px',
    },
  ];

  const selectedExercisesList = selectedExercises.map((exercise) => (
    <p key={exercise.id}>{exercise.name}</p>
  ))


  return (
    <div className="bg-red-200">
      <Header />
      <div className="grid grid-cols-5 gap-4 p-4">
        {exercises.map((exercise, index) => (
          <div key={index} onClick={() => handleExerciseClick(exercise)}>
          <ExerciseCard  exercise={exercise}/>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4">     
      <h2 className="text-2xl font-bold mb-4">Selected Exercises:</h2>
       <ul className="text-1xl font-semibold list-disc pl-8">{selectedExercisesList}
        </ul>
      </div>
    </div>
  )
}

export default Exercises