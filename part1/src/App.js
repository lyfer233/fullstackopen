// Sub Component
const Header = (props) => {
  return (
    <div>
      <h1> {props.courseName} </h1>
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
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/> 
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1_data = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2_data = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3_data = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseName={course} />
      <Content 
        part1={part1_data.name} exercises1={part1_data.exercises}
        part2={part2_data.name} exercises2={part2_data.exercises}
        part3={part3_data.name} exercises3={part3_data.exercises}
      />
      <Total total={part1_data.exercises + part2_data.exercises + part3_data.exercises} />
    </div>
  )
}

export default App