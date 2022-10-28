// Sub Component
const Header = (props) => {
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  ) 
}

const Content = (props) => {
  let parts_render = props.parts.map(ele => <Part part={ele.name} exercises={ele.exercises} />)
  return (
    <div>
      {parts_render}
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  props.parts.forEach(ele => {
    sum += ele.exercises
  })
  return (
    <div>
      <p>
        {sum}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App