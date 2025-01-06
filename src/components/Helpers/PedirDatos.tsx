import data from '../../data/productos-store.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500);
    })
}

export const pedirItemPorId = (id: Number) => {
    return new Promise((resolve, reject) => {
        console.log('DATA', data)
        const item = data.find((el) => el.id === id);
        console.log('DATA', data)
        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
} 