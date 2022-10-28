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

  return (
    <div>
      <Header courseName="Half Stack application development" />
      <Content 
        part1="Fundamentals of React" exercises1={10}
        part2="Uinsg props to pass data" exercises2={7}
        part3="State of a component" exercises3={14}
      />
      {/* <Content part="Fundamentals of React" exercises={10} /> */}
      {/* <Content part="Using props to pass data" exercises={7} /> */}
      {/* <Content part="State of a component" exercises={14} /> */}
      <Total total={10 + 7 + 14} />
    </div>
  )
}

export default App