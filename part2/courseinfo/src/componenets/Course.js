const Header = ({ header }) => {
    return (
        <div>
            <h1>{header}</h1>
        </div>
    )
}

const Content = ({ parts }) => {
    const sum = parts.reduce((accumulator, object) => {
        return accumulator + object.exercises
    }, 0)

    return (
        <div>
          { parts.map(part => <Part name={part.name} number={part.exercises} />)}
          <p><b>total of { sum } exercises </b></p>
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