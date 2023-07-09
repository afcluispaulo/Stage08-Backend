const tags = [
    { id: 1, name: "node", note_id: 1 },
    { id: 2, name: "express", note_id: 1 },
    { id: 3, name: "react", note_id: 1 },
    { id: 4, name: "javascipt", note_id: 1 },
    { id: 5, name: "frontend", note_id: 2 },
];

// const newArray = tags;
const newArray = tags.map(tag => {
    return {
        name: tag.name
    }
});

const newArray2 = tags.map(tag => {
    return tag;
});

// e para adicionar coisas extras ao filtro?
const newArray3 = tags.map(tag => {
    return {
        ...tag,
        date: new Date()
    }
})

const newArrays = tags.filter(tag => tag.note_id === 1);
const newArrays2 = tags.filter(tag => tag.note_id === 2);

// filtro serve como uma query no sql, só que para listas (Array)

console.log(newArrays2);

console.log("teste");
