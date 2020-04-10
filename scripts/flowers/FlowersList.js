import { Flower } from "./Flower.js"
import { useFlowers } from './FlowerDataProvider.js'


const flowerContentTarget = document.querySelector(".flower__Container")

export const FlowerList = () => {
    render()
}

const render = () => {
    const flowers = useFlowers()
    const flowerItem = flowers.map(flower => {
        return `
        ${Flower(flower)}
        `
    }).join("")
    flowerContentTarget.innerHTML = flowerItem
}