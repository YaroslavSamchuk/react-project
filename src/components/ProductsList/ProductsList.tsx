import { useState, useEffect } from "react"
import { Product } from "../Product/Product"
import "./ProductsList.css"

const products = [
    {
        category: "Hungry",
        name: "Product1",
        img: "https://s3-alpha-sig.figma.com/img/9b0e/7c41/af712b5772924f9dd6361af85786fdf8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gRyt01IKBCepUNf8GFlnWPOOD~M4IYk2usOt6JGnSjVb0Klk1FuL0NXQjtoCc2euXlfFlSktFhhqiO-OEZhASOoD3TaKA8COdCluwSBXoastzW30zyoP6YeZ3U4S4Zk5jWpI5V582MxcN2b6Lv6jKZ-yglA2n~IkHlPdlI1uelXXD1VK-Z3r7VHy0s6xMHwqSXPfg~NoowcGZrgq-GinmKQ-Ykyu1WJB8KZxN~guxljAlO1Iw2HWAbaCKhaff5Zqvv6-Ips8MXhzXjdC1INY5htnhaa7WN-UpD0DKxaKA7ejV1UhZeIs2IqCRayMY4lrPHL86Dtg8tLgVrHLMqXqOw__",
        price: 15,
        id: 0
    },
    {
        category: "Grumpy",
        name: "Product2",
        img: "https://s3-alpha-sig.figma.com/img/680c/98cc/0977f68d2b2d517092f2f06e298a81e7?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BjJCnjkD~mS5UMjpBQELw7tyzIoS-Gx4ysqLda47P4cJd5q9~UUE-Xs5bUt5QY9HPeoZLgz0Jq0S9k1-ExZzCKFJVrLiwUv82J55gUGYt-Gdm3ZGavJgqnTQpV6ehvGg33FdCo-mNNCUeob5Ll5TZos3HYgoa30r~TcZlwqbUsPip5cQUhn4w0IYN85ln9rXfvsddlFZLrk9u7xUzPLdVJTiWPZZKy8wJydI9IntJUtHqkORJC9og7eOidwhYpXaZgi01uQqVS6Eg5mCY9hmwsmjk-P6OzROJxrh6fJcEmjUx73hYo9ig7PRoTfWwk6033jaAOLl3IXqdoTyU5ho8g__",
        price: 20,
        id: 1
    },
    {
        category: "Proud",
        name: "Product3",
        img: "https://s3-alpha-sig.figma.com/img/1cdb/703f/e8f45c2559bf377fec8c2f004534abf8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d9C77OAWnq3uQ9iRFqq3D22AYqdGqesvUhBNTRnigAmIVkOm04jds-OpYoUTB0X~IwdhTDZf6ZuPsx5btraT520rhZvEFz9a40KLVFM3-HcDPgxNgQ3Fpc5UHHzyy7ZzjRoaUl5jkakFNqMBk-ZRnWTRH-g6rCPo4wPambjNpw1XlzH9Z3Jg-r7VUwoEzOfzfq0u~tgjUrTFP5X3CdYLZDew5-gn2XpBRw85mhU82H5tuR3pm~BbAFTLb~8yMexTpCw4N-GzntOqItGC6Hhz4PY3Z6S6ikRPulj9GQN~G4bL4y-kQqYANtRWh0YpNl3Pu7SYQjDgBw6fp7woAwNUAw__",
        price: 25,
        id: 2
    },
    {
        category: "Grumpy",
        name: "Product4",
        img: "https://s3-alpha-sig.figma.com/img/45ef/f69c/8ae5d613530e5ebcf5a7a7f91babb30e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3hOCiJOiZR1Hhu~C8iH0PgeF8QcN4JnjlA~B-nCk7kyTop5w1LBO1OWiXCAeusgH~lcrax7R5yeoDzzlTSKAD~T6PEyBbAfPDClhAgnkRAeWh1KFtOApNhYKsAGu1mZWcyvHH03T9SjhXGygu3LKXYg5W04RbUINyxX9OL5gFtbROBwmpPMhPbUTlrSaatKyHvK2VxoAf1YzLGy9UQCHiS9H6jJx8BjoIAkeMQTqwjmnyCBScybmv-SaU6ChqUATQfB9BE7iHOfDhMWr4ywPhdzwmBeg3BrT0Fh1xp1H6gnI2EN~1w5COvnifcOsxmtxCFi1XQnjEHVLB7U2AiVYA__",
        price: 30,
        id: 3
    },
    {
        category: "Cutie-pies",
        name: "Product5",
        img: "https://s3-alpha-sig.figma.com/img/84d3/8734/43a357097bf8ab6f78a4b2590c345a48?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=esvEh35UngAFQUpKW5idyP1lXidoPm6q9jO8ciBwfbVCEHm-08wKhwmFWTxUHY0x2t0Vim-bmIahPzZz563L6RD2myJDuORQ4Ww1DUa-2A6fp1GApskqAv4bfCwn1wFtMuFhWBTY1o7B88ZCIaxmo02RGpJ7PA0JcLUiSY5VRbHowjnH2D55iEJl3YQj-HZQ~fJc~P7ZR9kygEs5drWW3W7ocSDQWEaDyTPIuqulBTZSqzAO2SrWDmHS0Wuph5Ga~0WliuHJX49rgMadv02eDFaqgr8eG8ta8KSQSJDLN6w5vcyrBgWeGDReYCVYs4dvpg-6pWuUkuXETDWGXblExg__",
        price: 35,
        id: 4
    },
]

export function ProductsList(){
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [filteredProducts, setFilteredProducts] = useState(products)
    useEffect(() => {
        console.log(selectedCategory)
        if (selectedCategory === "All") {
            setFilteredProducts(products)
        } else {
            const filtered = products.filter((product) => {
                return product.category === selectedCategory
            })
            setFilteredProducts(filtered)
        }
    }, [selectedCategory])

    return (
        <div className="products">
            <select onChange={(event) => {
                const selectedValue = event.target.value
                setSelectedCategory(selectedValue)
            }}>
                <option value="All">All</option>
                <option value="Cutie-pies">Cutie-pies</option>
                <option value="Grumpy">Grumpy</option>
                <option value="Hungry">Hungry</option>
                <option value="Proud">Proud</option>
            </select>
            {filteredProducts.map((product) => {
                // key - специальный ключ (id), который используеться при отображении массивов
                // этот ключ позваляет определить, какой элемент был удален добавлен и т. п.
                return <Product 
                        name={product.name}
                        img={product.img}
                        price={product.price}
                        key={product.id}
                        id={product.id} />
            })}
        </div>
    )
}
