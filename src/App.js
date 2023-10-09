const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
    React.createElement("h2", {}, props.color),
  ])
}

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", { key: "1" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Cat",
      breed: "British Shorthair",
      color: "White",
    })
  )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))