export const uniqueId = {
    currentId: 0,
    get() {
        this.currentId += 1;
        return this.currentId;
    }
};

export const initialState = {
    todos: [
        {
            id: uniqueId.get(),
            title: 'JS-101',
            completed: true
        },
        {
            id: uniqueId.get(),
            title: 'JS-102',
            completed: false
        },
        {
            id: uniqueId.get(),
            title: 'JS-201',
            completed: false
        },
        {
            id: uniqueId.get(),
            title: 'JS-202',
            completed: false
        }
    ],
    filters: 'all'
};