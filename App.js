// const heading = React.createElement("h1", {id: "heading"}, "hello guys");

const parent = React.createElement("div", {id: "parent"}, [
        React.createElement("div",{id: "child"}, [
                React.createElement("h1", {}, "hello"),
                React.createElement("h2", {}, "guys"),
        ]),
        React.createElement("div",{id: "child"}, [
                React.createElement("h1", {}, "hello"),
                React.createElement("h2", {}, "guys"),
        ])

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);