import React, { useState } from 'react';

function MainPet() {

    const [pets, setPets] = useState([
        { name: "벨라", species: "고양이", age: "5", id: 111 },
        { name: "루시", species: "강아지", age: "3", id: 112 },
        { name: "데이지", species: "토끼", age: "2", id: 113 },
        { name: "몰리", species: "고양이", age: "1", id: 114 },
        { name: "매기", species: "강아지", age: "6", id: 115 }
    ]);

    return (
        <>
            <AddPetForm />
            <ul>
                {pets.map((item) => {
                    return <PetItem key={item.id} data={item} />
                })}
            </ul>
        </>
    )
}


function AddPetForm() {
    return (
        <form>
            <fieldset>
                <legend>새로운 애완동물을 추가해주세요!</legend>
                <label htmlFor="">
                    이름 :
                    <input type="text" />
                </label>
                <label htmlFor="">
                    종류 :
                    <input type="text" />
                </label>
                <label htmlFor="">
                    나이 :
                    <input type="number" />
                </label>
                <button>추가하기</button>
            </fieldset>
        </form>
    )
}


function PetItem({ data }) {
    return (
        <li>{data.name}는 {data.species}입니다. 그리고 {data.age}살 입니다.</li>
    )
}

export default function Pet() {
    return (
        <div>
            <h1>애완동물 정보 리스트</h1>
            <MainPet />
        </div>
    )
}