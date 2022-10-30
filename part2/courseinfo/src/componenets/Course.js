const Header = ({ header }) => {
    return (
        <div>
            <h1>{header}</h1>
        </div>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
          { parts.map(part => <Part name={part.name} number={part.exercises} />)}
        </div>
    )
}

const Part = ({ name, number }) => {
    console.log( name, number)
    return (
        <>
          <p>{name} {number}</p>
        </>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header header={course.name} />
            <Content parts={course.parts} />
        </div>
    )
}

export default Course