const tags = [
    { id: 1, name: "node", note_id: 1 },
    { id: 2, name: "express", note_id: 1 },
    { id: 3, name: "react", note_id: 1 },
    { id: 4, name: "javascipt", note_id: 1 },
    { id: 5, name: "frontend", note_id: 1 },
];

// const newArray = tags;
const newArray = tags.map(tag => {
    return {
        name: tag.name
    }
});

const newArray2 = tags.map(tag => {
    return tag;
})

// e para adicionar coisas extras ao filtro?

const newArray3 = tags.map(tag => {
    return {
        ...tag,
        date: new Date()
    }
})
console.log(newArray3)

console.log("teste")
