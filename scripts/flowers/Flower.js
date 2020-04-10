export const Flower = (flower) => {
    return `
        <div class="oneFlower" ${flower.color}>
            <h4>${flower.commonName}</h4>
            <p>${flower.color}</p>
        </div>
    `
}